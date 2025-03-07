import { Core } from "../Core";
import Auth, {
  AuthType,
  InitSteps,
  ALPINE_HEALTHCARE,
} from "../modules/auth/Auth";
import { ethers } from "ethers";
import Encryption from "../modules/encryption/Encryption";

// Mock ethers
jest.mock("ethers", () => {
  const original = jest.requireActual("ethers");
  return {
    ...original,
    BrowserProvider: jest.fn(),
    Contract: jest.fn(),
    Wallet: jest.fn(),
  };
});

describe("Auth Module Tests", () => {
  let core: Core;
  let auth: Auth;
  let mockContract: any;
  let mockSigner: any;
  let mockProvider: any;
  let mockWallet: any;

  const mockPublicKey = "0x123456789";
  const mockPdosRoot = "mock-pdos-root";
  const mockPrivateKey = "0xabcdef123456";

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();

    // Setup mock contract
    mockContract = {
      checkIsActive: jest.fn().mockResolvedValue(true),
      getPDOSRoot: jest.fn().mockResolvedValue(mockPdosRoot),
      onboard: jest.fn().mockResolvedValue({ wait: jest.fn() }),
      offboardUser: jest.fn().mockResolvedValue({ wait: jest.fn() }),
      updatePDOSRoot: jest.fn().mockResolvedValue({ wait: jest.fn() }),
      addComputeNodeAccessForUser: jest
        .fn()
        .mockResolvedValue({ wait: jest.fn() }),
      getUsersForComputeNode: jest.fn().mockResolvedValue([]),
      getUsersComputeNode: jest.fn().mockResolvedValue("mock-compute-node"),
    };

    // Setup mock signer
    mockSigner = {
      address: mockPublicKey,
      getAddress: jest.fn().mockResolvedValue(mockPublicKey),
    };

    // Setup mock provider
    mockProvider = {
      getSigner: jest.fn().mockResolvedValue(mockSigner),
      request: jest.fn().mockResolvedValue([mockPublicKey]),
    };

    // Setup mock wallet
    mockWallet = {
      address: mockPublicKey,
      connect: jest.fn().mockReturnThis(),
    };

    // Mock ethers Contract constructor
    (ethers.Contract as unknown as jest.Mock).mockImplementation(
      () => mockContract,
    );
    (ethers.Wallet as unknown as jest.Mock).mockImplementation(
      () => mockWallet,
    );

    // Setup core
    core = new Core({
      env: "marigold",
      context: {
        gatewayURL: "http://localhost:8000",
      },
    });

    // Create a partial mock of core.tree
    const mockTree = {
      root: {
        init: jest.fn().mockResolvedValue(undefined),
        addAccessPackage: jest.fn().mockResolvedValue(undefined),
        push: jest.fn().mockResolvedValue(undefined),
        _hash: mockPdosRoot,
        _rawNode: {
          access_package: {},
        },
      },
    };
    Object.defineProperty(core, "tree", {
      value: mockTree,
      writable: true,
    });

    // Mock core.modules.encryption with a partial implementation
    const mockEncryption: Partial<Encryption> = {
      generateAccessPackage: jest.fn().mockResolvedValue("mock-access-package"),
      setAccessPackage: jest.fn().mockResolvedValue(undefined),
    };
    core.modules.encryption = mockEncryption as Encryption;

    // Setup auth module
    auth = new Auth(core, {
      eip1193Provider: mockProvider,
      jsonRpcProvider: {} as any,
      privateKey: mockPrivateKey,
    });
  });

  describe("Wallet Authentication", () => {
    test("should initialize wallet user with private key", async () => {
      await auth.initializeWalletUserWithPrivateKey();

      expect(auth.authType).toBe(AuthType.WALLET);
      expect(auth.publicKey).toBe(mockPublicKey);
      expect(auth.info.isAuthenticated).toBe(true);
      expect(auth.info.isActive).toBe(true);
      expect(auth.info.pdosRoot).toBe(mockPdosRoot);
    });

    test("should initialize wallet user with provider", async () => {
      await auth.initializeWalletUser(mockProvider);

      expect(auth.authType).toBe(AuthType.WALLET);
      expect(auth.publicKey).toBe(mockPublicKey);
      expect(auth.info.isAuthenticated).toBe(true);
      expect(auth.info.isActive).toBe(true);
      expect(auth.info.pdosRoot).toBe(mockPdosRoot);
    });

    test("should handle new user onboarding", async () => {
      // Mock getPDOSRoot to return undefined first time to simulate new user
      mockContract.getPDOSRoot.mockResolvedValueOnce(undefined);

      // Mock fetch for register-wallet-user
      global.fetch = jest.fn().mockResolvedValueOnce({
        json: () => Promise.resolve({ hash_id: "new-pdos-root" }),
      }) as jest.Mock;

      await auth.initializeWalletUser(mockProvider);

      expect(auth.initStep).toBe(InitSteps.COMPLETED);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/auth/register-wallet-user",
        expect.any(Object),
      );
      expect(core.tree.root.addAccessPackage).toHaveBeenCalled();
      expect(mockContract.onboard).toHaveBeenCalled();
    });

    test("should disconnect wallet user", async () => {
      await auth.disconnectWalletUser();

      expect(auth.info.isAuthenticated).toBe(false);
      expect(auth.info.isActive).toBe(false);
      expect(auth.info.pdosRoot).toBeUndefined();
      expect(auth.publicKey).toBeUndefined();
    });
  });

  describe("Contract Interactions", () => {
    beforeEach(async () => {
      await auth.initializeWalletUserWithPrivateKey();
    });

    test("should check if user is active", async () => {
      const isActive = await auth.checkIsActive();
      expect(isActive).toBe(true);
      expect(mockContract.checkIsActive).toHaveBeenCalledWith(mockPublicKey);
    });

    test("should update PDOS root", async () => {
      const newHash = "new-hash";
      await auth.updatePDOSRoot(newHash);

      expect(mockContract.updatePDOSRoot).toHaveBeenCalledWith(
        mockPublicKey,
        newHash,
      );
      expect(auth.info.pdosRoot).toBe(newHash);
    });

    test("should add compute node access", async () => {
      const computeAddress = "0xcomputeAddress";
      await auth.addComputeNodeAccessForUser(computeAddress);

      expect(mockContract.addComputeNodeAccessForUser).toHaveBeenCalledWith(
        computeAddress,
      );
      expect(auth.info.computeNodeAddress).toBe(computeAddress);
    });

    test("should get users for compute node", async () => {
      const computeAddress = "0xcomputeAddress";
      await auth.getUsersForComputeNode(computeAddress);

      expect(mockContract.getUsersForComputeNode).toHaveBeenCalledWith(
        computeAddress,
      );
    });

    test("should get user compute node", async () => {
      const computeNode = await auth.getUserComputeNode();

      expect(mockContract.getUsersComputeNode).toHaveBeenCalledWith(
        mockPublicKey,
      );
      expect(computeNode).toBe("mock-compute-node");
    });
  });
});
