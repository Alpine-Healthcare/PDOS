import pdos from "../../Core";
import { 
  addTreatment, 
  getActiveTreatments, 
  getTreatmentBinaryForTreatment,
  getTreatment,
  getTreatmentInstances 
} from "../../actions/Treatments";
import PDFSNode from "../../store/PDFSNode";
import { Core } from "../../Core";

// Mock dependencies
jest.mock("../../Core", () => {
  const mockPdos = {
    tree: {
      root: {
        edges: {
          e_out_TreatmentManifest: {
            addTreatment: jest.fn()
          }
        },
        syncLocalRootHash: jest.fn()
      }
    },
    stores: {
      userAccount: {
        edges: {
          e_out_TreatmentManifest: {
            treatments: []
          }
        }
      }
    }
  };
  return jest.fn(() => mockPdos);
});

describe('Treatment Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('addTreatment', () => {
    it('should add treatment and sync root hash', async () => {
      const name = 'Test Treatment';
      const hashId = 'test-hash';
      const intake = { test: 'data' };

      await addTreatment(name, hashId, intake);

      expect(pdos().tree.root.edges.e_out_TreatmentManifest.addTreatment)
        .toHaveBeenCalledWith(name, hashId, intake);
      expect(pdos().tree.root.syncLocalRootHash).toHaveBeenCalled();
    });
  });

  describe('getActiveTreatments', () => {
    it('should return active treatments from manifest', () => {
      const mockTreatments = [
        { id: 1, name: 'Treatment 1' },
        { id: 2, name: 'Treatment 2' }
      ];

      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        stores: {
          userAccount: {
            edges: {
              e_out_TreatmentManifest: {
                treatments: mockTreatments
              }
            }
          }
        }
      }));

      const result = getActiveTreatments();
      expect(result).toEqual(mockTreatments);
    });

    it('should return empty array if no treatments exist', () => {
      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        stores: {
          userAccount: {
            edges: {
              e_out_TreatmentManifest: null
            }
          }
        }
      }));

      const result = getActiveTreatments();
      expect(result).toEqual([]);
    });
  });

  describe('getTreatmentBinaryForTreatment', () => {
    it('should return treatment binary edge', async () => {
      const mockBinary = { id: 'binary-1' };
      const mockCore = new Core({
        env: 'marigold',
        context: {
          gatewayURL: 'http://test.com'
        }
      });
      const mockTreatment = new PDFSNode(
        mockCore,
        ['root', 'treatment'],
        'Treatment',
        'test-hash'
      );
      mockTreatment.edges = {
        e_out_TreatmentBinary: mockBinary
      };

      const result = await getTreatmentBinaryForTreatment(mockTreatment);
      expect(result).toEqual(mockBinary);
    });
  });

  describe('getTreatment', () => {
    it('should find and return specific treatment', () => {
      const treatmentName = 'Test Treatment';
      const mockTreatments = [
        { _rawNode: { data: { treatmentName: 'Other Treatment' } } },
        { _rawNode: { data: { treatmentName } } }
      ];

      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        stores: {
          userAccount: {
            edges: {
              e_out_TreatmentManifest: {
                treatments: mockTreatments
              }
            }
          }
        }
      }));

      const result = getTreatment(treatmentName);
      expect(result).toEqual(mockTreatments[1]);
    });

    it('should return undefined if treatment not found', () => {
      const result = getTreatment('Non-existent Treatment');
      expect(result).toBeUndefined();
    });
  });

  describe('getTreatmentInstances', () => {
    it('should return treatment instances', () => {
      const treatmentName = 'Test Treatment';
      const mockInstances = [
        { id: 'instance-1' },
        { id: 'instance-2' }
      ];
      
      const mockTreatment = {
        _rawNode: { 
          data: { 
            treatmentName 
          } 
        },
        edges: {
          e_out_TreatmentInstance_1: mockInstances[0],
          e_out_TreatmentInstance_2: mockInstances[1],
          other_edge: { id: 'other' }
        }
      };

      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        stores: {
          userAccount: {
            edges: {
              e_out_TreatmentManifest: {
                treatments: [mockTreatment]
              }
            }
          }
        }
      }));

      const result = getTreatmentInstances(treatmentName);
      expect(result).toEqual(mockInstances);
    });

    it('should return empty array if treatment not found', () => {
      const result = getTreatmentInstances('Non-existent Treatment');
      expect(result).toEqual([]);
    });
  });
}); 