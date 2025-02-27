import { Core } from "../Core";
import Storage from "../modules/storage/Storage";

describe("Storage Module Tests", () => {
  let core: Core;
  let storage: Storage;

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();

    // Setup mock localStorage
    const mockLocalStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    global.localStorage = mockLocalStorage as any;

    // Setup core
    core = new Core({
      env: "marigold",
      context: {
        gatewayURL: "http://localhost:8000",
      },
    });

    // Create storage module instance
    storage = new Storage(core, null, null);
  });

  describe("Storage Operations", () => {
    test("should add item to localStorage", async () => {
      const key = "test-key";
      const value = "test-value";

      await storage.addItem(key, value);

      expect(localStorage.setItem).toHaveBeenCalledWith(key, value);
    });

    test("should get item from localStorage", async () => {
      const key = "test-key";
      const expectedValue = "test-value";

      (localStorage.getItem as jest.Mock).mockReturnValue(expectedValue);

      const result = await storage.getItem(key);

      expect(localStorage.getItem).toHaveBeenCalledWith(key);
      expect(result).toBe(expectedValue);
    });

    test("should return null when getting non-existent item", async () => {
      const key = "non-existent-key";

      (localStorage.getItem as jest.Mock).mockReturnValue(null);

      const result = await storage.getItem(key);

      expect(localStorage.getItem).toHaveBeenCalledWith(key);
      expect(result).toBeNull();
    });
  });
});
