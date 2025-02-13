import { Core } from '../Core';
import Encryption, { AccessPackage, AccessPackageEncrypted } from '../modules/encryption/Encryption';
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { hexToBytes, bytesToHex, utf8ToBytes, bytesToUtf8 } from "ethereum-cryptography/utils";
import * as aes from "ethereum-cryptography/aes";
import { getRandomBytesSync } from "ethereum-cryptography/random.js";

// Mock external dependencies
jest.mock('@lit-protocol/lit-node-client');
jest.mock('ethereum-cryptography/random.js');
jest.mock('ethereum-cryptography/utils');
jest.mock('ethereum-cryptography/aes');
jest.mock('@lit-protocol/encryption', () => ({
  encryptString: jest.fn(),
  decryptToString: jest.fn()
}));

// Test class to access protected methods
class TestableEncryption extends Encryption {
  public async testStart() {
    return this.start();
  }
}

describe('Encryption Module Tests', () => {
  let core: Core;
  let encryption: TestableEncryption;
  let mockLitNodeClient: any;
  let mockSigner: any;

  const mockPublicKey = '0x123456789';
  const mockIV = 'mock-iv';
  const mockDataKey = 'mock-data-key';
  const mockCiphertext = 'mock-ciphertext';
  const mockDataToEncryptHash = 'mock-data-hash';

  beforeEach(() => {
    jest.clearAllMocks();

    // Setup mock signer
    mockSigner = {
      address: mockPublicKey,
      signMessage: jest.fn().mockResolvedValue('mock-signature')
    };

    // Setup mock core
    core = new Core({
      env: 'marigold',
      context: {
        gatewayURL: 'http://localhost:8000'
      }
    });

    // Mock core.modules.auth
    Object.defineProperty(core.modules, 'auth', {
      value: {
        publicKey: mockPublicKey,
        getSigner: jest.fn().mockResolvedValue(mockSigner)
      },
      writable: true
    });

    // Mock core.modules.storage
    Object.defineProperty(core.modules, 'storage', {
      value: {
        addItem: jest.fn().mockResolvedValue(undefined),
        getItem: jest.fn().mockResolvedValue(null)
      },
      writable: true
    });

    // Setup mock LitNodeClient
    mockLitNodeClient = {
      connect: jest.fn().mockResolvedValue(undefined),
      getLatestBlockhash: jest.fn().mockResolvedValue('mock-blockhash'),
      getSessionSigs: jest.fn().mockResolvedValue({
        sessionSigs: 'mock-session-sigs'
      })
    };
    (LitJsSdk.LitNodeClient as unknown as jest.Mock).mockImplementation(() => mockLitNodeClient);

    // Mock random bytes generation
    (getRandomBytesSync as jest.Mock).mockImplementation((size: number) => new Uint8Array(size));

    // Mock hex/bytes conversion
    (bytesToHex as jest.Mock).mockImplementation((bytes: Uint8Array) => 'mock-hex');
    (hexToBytes as jest.Mock).mockImplementation((hex: string) => new Uint8Array(16));
    (utf8ToBytes as jest.Mock).mockImplementation((str: string) => new Uint8Array(16));
    (bytesToUtf8 as jest.Mock).mockImplementation((bytes: Uint8Array) => '{"mock": "data"}');

    // Mock AES encryption/decryption
    (aes.encrypt as jest.Mock).mockImplementation(() => new Uint8Array(16));
    (aes.decrypt as jest.Mock).mockImplementation(() => new Uint8Array(16));

    // Create encryption module instance
    encryption = new TestableEncryption(core, { enabled: true });
  });

  describe('Initialization', () => {
    test('should initialize with Lit client when enabled', async () => {
      await encryption.testStart();
      expect(LitJsSdk.LitNodeClient).toHaveBeenCalled();
      expect(mockLitNodeClient.connect).toHaveBeenCalled();
    });

    test('should not initialize Lit client when disabled', async () => {
      encryption = new TestableEncryption(core, { enabled: false });
      await encryption.testStart();
      expect(LitJsSdk.LitNodeClient).not.toHaveBeenCalled();
    });
  });

  describe('Access Package Management', () => {
    test('should generate access package when enabled', async () => {
      const result = await encryption.generateAccessPackage();
      
      expect(getRandomBytesSync).toHaveBeenCalledTimes(2);
      expect(result).toBeDefined();
      expect(core.modules.storage?.addItem).toHaveBeenCalled();
    });

    test('should return empty access package when disabled', async () => {
      encryption = new TestableEncryption(core, { enabled: false });
      const result = await encryption.generateAccessPackage();
      
      expect(result).toEqual({ ciphertext: "", dataToEncryptHash: "" });
    });

    test('should set access package from storage if available', async () => {
      const mockAccessPackage = {
        iv: mockIV,
        datakey: mockDataKey
      };
      
      (core.modules.storage?.getItem as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(mockAccessPackage)
      );

      await encryption.setAccessPackage({
        ciphertext: mockCiphertext,
        dataToEncryptHash: mockDataToEncryptHash
      });

      expect(core.modules.storage?.getItem).toHaveBeenCalled();
    });
  });

  describe('Encryption/Decryption Operations', () => {
    beforeEach(async () => {
      // Setup access package
      await encryption.generateAccessPackage();
    });

    test('should encrypt node data', async () => {
      const testData = { test: 'data' };
      await encryption.encryptNode(testData);
      
      expect(aes.encrypt).toHaveBeenCalled();
      expect(bytesToHex).toHaveBeenCalled();
    });

    test('should decrypt node data', async () => {
      const encryptedData = 'encrypted-data';
      const result = await encryption.decryptNode(encryptedData);
      
      expect(aes.decrypt).toHaveBeenCalled();
      expect(result).toBeDefined();
    });

    test('should handle string and object input in encryptNode', async () => {
      await encryption.encryptNode('test-string');
      expect(aes.encrypt).toHaveBeenCalled();

      await encryption.encryptNode({ test: 'object' });
      expect(aes.encrypt).toHaveBeenCalled();
    });
  });

  describe('Lit Protocol Integration', () => {
    test('should encrypt with Lit', async () => {
      const testData = 'test-data';
      await encryption.encryptWithLit(testData);
      
      expect(core.modules.auth?.publicKey).toBeDefined();
    });

    test('should decrypt with Lit', async () => {
      await encryption.decryptWithLit(mockCiphertext, mockDataToEncryptHash);
      
      expect(mockLitNodeClient.getSessionSigs).toHaveBeenCalled();
    });

    test('should get session signatures', async () => {
      const result = await encryption.getSessionSignatures();
      
      expect(mockLitNodeClient.getLatestBlockhash).toHaveBeenCalled();
      expect(mockLitNodeClient.getSessionSigs).toHaveBeenCalled();
      expect(result).toBeDefined();
    });
  });

  describe('Portal Communication', () => {
    test('should handle portal communication', async () => {
      const mockEmit = jest.fn();
      const mockCheck = jest.fn().mockResolvedValue('mock-response');

      encryption.setPortalSend(mockEmit);
      encryption.setPortalReceive(mockCheck);

      await encryption.portal('test-type', 'test-prop', 'test-data');

      expect(mockEmit).toHaveBeenCalledWith('test-type', 'test-prop', 'test-data');
      expect(mockCheck).toHaveBeenCalledWith('test-type');
    });

    test('should throw error when portal emit not set', async () => {
      await expect(encryption.portal('test-type')).rejects.toThrow('Portal emit not set');
    });
  });
}); 