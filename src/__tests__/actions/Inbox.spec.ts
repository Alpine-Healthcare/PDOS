import pdos from "../../Core";
import { clear, get } from "../../actions/Inbox";

// Mock dependencies
jest.mock("../../Core", () => {
  const mockPdos = {
    stores: {
      userAccount: {
        edges: {
          e_out_Inbox: {
            clearMessages: jest.fn(),
            _rawNode: {
              unread_messages: [],
            },
          },
        },
      },
    },
  };
  return jest.fn(() => mockPdos);
});

describe("Inbox Actions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("clearMessages", () => {
    it("should call clear on the Inbox edge", async () => {
      await clear();
      expect(
        pdos().stores.userAccount.edges.e_out_Inbox.clearMessages,
      ).toHaveBeenCalled();
    });
  });

  describe("get", () => {
    it("should return unread messages from Inbox", async () => {
      const mockMessages = [
        { id: 1, message: "Test message 1" },
        { id: 2, message: "Test message 2" },
      ];

      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        stores: {
          userAccount: {
            edges: {
              e_out_Inbox: {
                _rawNode: {
                  unread_messages: mockMessages,
                },
              },
            },
          },
        },
      }));

      const result = await get();
      expect(result).toEqual(mockMessages);
    });

    it("should handle case when Inbox is not initialized", async () => {
      const mockPdos = pdos as jest.Mock;
      mockPdos.mockImplementation(() => ({
        stores: {
          userAccount: {
            edges: {
              e_out_Inbox: {
                _rawNode: {
                  unread_messages: undefined,
                },
              },
            },
          },
        },
      }));

      const result = await get();
      expect(result).toBeUndefined();
    });
  });
});
