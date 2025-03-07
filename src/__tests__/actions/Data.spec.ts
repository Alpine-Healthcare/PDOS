import pdos from "../../Core";
import { sync, getAllRecords } from "../../actions/Data";
import PDOSNode from "../../tree/base/PDOSNode";
import { traverseTree } from "../../tree/NetworkMapper";

// Mock dependencies
jest.mock("../../Core", () => {
  const mockPdos = {
    root: undefined,
    stores: {
      userAccount: {
        edges: {
          e_out_DataManifest: null,
        },
      },
      tree: {
        root: {
          push: jest.fn(),
        },
      },
    },
  };
  return jest.fn(() => mockPdos);
});

jest.mock("../../tree/NetworkMapper", () => ({
  traverseTree: jest.fn(),
}));

describe("Data Actions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("sync", () => {
    it("should return early if root is undefined", async () => {
      await sync();
      expect(traverseTree).not.toHaveBeenCalled();
    });

    it("should sync treatment binaries and root hash", async () => {
      const mockNode = {
        _nodeType: "TreatmentBinary",
        _rawNode: {
          metric: "test-metric",
        },
        syncData: jest.fn(),
      };

      // Set up mock root
      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        root: {},
        tree: {
          root: {
            push: jest.fn(),
          },
        },
      }));

      (traverseTree as jest.Mock).mockImplementation((root, callback) => {
        callback(mockNode);
      });

      await sync();

      expect(traverseTree).toHaveBeenCalled();
      expect(mockNode.syncData).toHaveBeenCalled();
      expect(pdos().tree.root.push).toHaveBeenCalled();
    });
  });

  describe("getAllRecords", () => {
    it("should return empty object if data manifest is null", () => {
      const result = getAllRecords();
      expect(result).toEqual({});
    });

    it("should return metrics from data manifest", () => {
      const mockMetrics = {
        metric1: { data: "test1" },
        metric2: { data: "test2" },
      };

      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        stores: {
          userAccount: {
            edges: {
              e_out_DataManifest: {
                edges: {
                  node1: {
                    _rawNode: {
                      metric: "metric1",
                      records: mockMetrics.metric1,
                    },
                  },
                  node2: {
                    _rawNode: {
                      metric: "metric2",
                      records: mockMetrics.metric2,
                    },
                  },
                },
              },
            },
          },
        },
      }));

      const result = getAllRecords();
      expect(result).toEqual(mockMetrics);
    });
  });
});
