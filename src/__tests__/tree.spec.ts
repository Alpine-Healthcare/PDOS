import { Core } from '../Core';
import PDFSNode from '../store/PDFSNode';
import UserAccount from '../store/UserAccount';
import * as Pdfs from '../store/Pdfs';
import { AuthType } from '../modules/auth/Auth';

// Mock the Pdfs module
jest.mock('../store/Pdfs', () => ({
  getFromPdfs: jest.fn(),
  addToPdfs: jest.fn()
}));

describe('PDOS Tree Tests', () => {
  let core: Core;
  let mockEncryption: any;
  let mockAuth: any;

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Setup mock encryption module
    mockEncryption = {
      encryptNode: jest.fn((data) => Promise.resolve(data)),
      decryptNode: jest.fn((data) => Promise.resolve(data))
    };

    // Setup mock auth module
    mockAuth = {
      authType: AuthType.WALLET,
      publicKey: '0x123',
      getPDOSRoot: jest.fn(() => Promise.resolve('root-hash')),
      updatePDOSRoot: jest.fn(() => Promise.resolve())
    };

    // Setup core with mocked modules
    core = new Core({
      env: 'marigold',
      context: {
        gatewayURL: 'http://localhost:8000'
      }
    });
    core.modules.encryption = mockEncryption;
    core.modules.auth = mockAuth;
  });

  describe('PDFSNode', () => {
    let node: PDFSNode;

    beforeEach(() => {
      node = new PDFSNode(core, [], 'TestNode');
    });

    test('should create a new node when no hash is provided', async () => {
      const mockNewNode = {
        rawNode: { type: 'TestNode', data: 'test-data' },
        hash: 'new-hash',
        newTreePath: ['new-hash']
      };

      (Pdfs.addToPdfs as jest.Mock).mockResolvedValue(mockNewNode);

      await node.node;

      expect(Pdfs.addToPdfs).toHaveBeenCalled();
      expect(node._hash).toBe('new-hash');
      expect(node._nodeType).toBe('TestNode');
    });

    test('should load existing node when hash is provided', async () => {
      node = new PDFSNode(core, [], 'TestNode', 'existing-hash');
      const mockExistingNode = {
        type: 'TestNode',
        data: 'test-data'
      };

      (Pdfs.getFromPdfs as jest.Mock).mockResolvedValue(mockExistingNode);

      await node.node;

      expect(Pdfs.getFromPdfs).toHaveBeenCalledWith('existing-hash');
      expect(node._hash).toBe('existing-hash');
      expect(node._nodeType).toBe('TestNode');
    });

    test('should update node and refresh tree', async () => {
      const mockNewNode = {
        rawNode: { type: 'TestNode', data: 'updated-data' },
        hash: 'updated-hash',
        newTreePath: ['updated-hash']
      };

      (Pdfs.addToPdfs as jest.Mock).mockResolvedValue(mockNewNode);

      // @ts-ignore - accessing protected method for testing
      await node.update({ data: 'updated-data' });

      expect(mockEncryption.encryptNode).toHaveBeenCalled();
      expect(Pdfs.addToPdfs).toHaveBeenCalled();
      expect(node._hash).toBe('updated-hash');
    });
  });

  describe('UserAccount', () => {
    let userAccount: UserAccount;

    beforeEach(() => {
      userAccount = new UserAccount(core);
    });

    test('should initialize with provided hash', async () => {
      const mockNode = {
        type: 'N_UserAccount',
        data: 'user-data'
      };

      (Pdfs.getFromPdfs as jest.Mock).mockResolvedValue(mockNode);

      await userAccount.init('test-hash');

      expect(Pdfs.getFromPdfs).toHaveBeenCalledWith('test-hash');
      expect(userAccount._hash).toBe('test-hash');
      expect(userAccount.isLoaded).toBe(true);
    });

    test('should sync local root hash', async () => {
      userAccount._hash = 'new-root-hash';

      await userAccount.syncLocalRootHash();

      expect(mockAuth.getPDOSRoot).toHaveBeenCalled();
      expect(mockAuth.updatePDOSRoot).toHaveBeenCalledWith('new-root-hash', '0x123');
    });

    test('should add access package', async () => {
      const mockNewNode = {
        rawNode: { type: 'N_UserAccount', access_package: { key: 'value' } },
        hash: 'new-hash',
        newTreePath: ['new-hash']
      };

      (Pdfs.addToPdfs as jest.Mock).mockResolvedValue(mockNewNode);

      await userAccount.addAccessPackage({ key: 'value' });

      expect(Pdfs.addToPdfs).toHaveBeenCalled();
      expect(userAccount._hash).toBe('new-hash');
    });

    test('should refresh tree with new path', async () => {
      const oldTreePath = ['old-hash-1', 'old-hash-2'];
      const updateTreePath = ['new-hash-1', 'new-hash-2'];
      const mockNode = {
        type: 'N_UserAccount',
        data: 'test-data'
      };

      (Pdfs.getFromPdfs as jest.Mock).mockResolvedValue(mockNode);

      await userAccount.refresh(oldTreePath, updateTreePath);

      expect(userAccount._hash).toBe('new-hash-1');
      expect(userAccount.isRefreshing).toBe(false);
    });
  });
});
