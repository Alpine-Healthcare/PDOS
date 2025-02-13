import { Core } from '../Core';
import DataRequest from '../modules/dataRequest/DataRequest';

describe('DataRequest Module Tests', () => {
  let core: Core;
  let dataRequest: DataRequest;
  let mockHealthKit: any;
  let mockReactNativeHealthKit: any;

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();

    // Setup mock HealthKit
    mockHealthKit = {
      isHealthDataAvailable: jest.fn().mockResolvedValue(true),
      requestAuthorization: jest.fn().mockResolvedValue(undefined),
      queryQuantitySamples: jest.fn().mockResolvedValue([])
    };

    // Setup mock ReactNativeHealthKit with HKQuantityTypeIdentifier
    mockReactNativeHealthKit = {
      default: mockHealthKit,
      HKQuantityTypeIdentifier: {
        StepCount: 'HKQuantityTypeIdentifierStepCount',
        HeartRate: 'HKQuantityTypeIdentifierHeartRate'
      }
    };

    // Setup core
    core = new Core({
      env: 'marigold',
      context: {
        gatewayURL: 'http://localhost:8000'
      }
    });

    // Create dataRequest module instance with mock dependencies
    dataRequest = new DataRequest(core, {}, { reactNativeHealthKit: mockReactNativeHealthKit });
  });

  describe('Initialization', () => {
    test('should initialize with HealthKit availability check', async () => {
      await dataRequest['start']();
      expect(mockHealthKit.isHealthDataAvailable).toHaveBeenCalled();
    });

    test('should handle HealthKit unavailability', async () => {
      mockHealthKit.isHealthDataAvailable.mockResolvedValueOnce(false);
      const consoleSpy = jest.spyOn(console, 'error');
      
      await dataRequest['start']();
      
      expect(consoleSpy).toHaveBeenCalledWith('Healthkit is not available on this device');
      consoleSpy.mockRestore();
    });

    test('should initialize MetricMap with HKQuantityTypeIdentifier keys', () => {
      expect(dataRequest['MetricMap']).toHaveProperty('step_count');
      expect(dataRequest['MetricMap']).toHaveProperty('heart_rate');
    });
  });

  describe('Access Management', () => {
    test('should request authorization for metrics', async () => {
      const metrics = ['step_count', 'heart_rate'];
      
      await dataRequest.checkAccess(metrics);
      
      expect(mockHealthKit.requestAuthorization).toHaveBeenCalledWith([
        'HKQuantityTypeIdentifierStepCount',
        'HKQuantityTypeIdentifierHeartRate'
      ]);
    });

    test('should handle empty metrics array', async () => {
      await dataRequest.checkAccess([]);
      
      expect(mockHealthKit.requestAuthorization).not.toHaveBeenCalled();
    });

    test('should handle authorization error', async () => {
      const consoleSpy = jest.spyOn(console, 'error');
      mockHealthKit.requestAuthorization.mockRejectedValueOnce(new Error('Auth error'));
      
      await dataRequest.checkAccess(['step_count']);
      
      expect(consoleSpy).toHaveBeenCalledWith('Error in getting access to metrics');
      consoleSpy.mockRestore();
    });
  });

  describe('Data Retrieval', () => {
    test('should get today\'s value for metric', async () => {
      const mockQuantity = 1000;
      mockHealthKit.queryQuantitySamples.mockResolvedValueOnce([{ quantity: mockQuantity }]);
      
      const result = await dataRequest.getTodaysValue('step_count');
      
      expect(result).toBe(mockQuantity);
      expect(mockHealthKit.queryQuantitySamples).toHaveBeenCalledWith(
        'HKQuantityTypeIdentifierStepCount',
        expect.objectContaining({
          from: expect.any(Date),
          to: expect.any(Date)
        })
      );
    });

    test('should return 0 when no data available', async () => {
      mockHealthKit.queryQuantitySamples.mockResolvedValueOnce([]);
      
      const result = await dataRequest.getTodaysValue('step_count');
      
      expect(result).toBe(0);
    });

    test('should use correct time range for today', async () => {
      const today = new Date();
      const startOfDay = new Date(today);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);

      await dataRequest.getTodaysValue('step_count');

      expect(mockHealthKit.queryQuantitySamples).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          from: expect.any(Date),
          to: expect.any(Date)
        })
      );

      const callArgs = mockHealthKit.queryQuantitySamples.mock.calls[0][1];
      expect(callArgs.from.getHours()).toBe(0);
      expect(callArgs.from.getMinutes()).toBe(0);
      expect(callArgs.from.getSeconds()).toBe(0);
      expect(callArgs.to.getHours()).toBe(23);
      expect(callArgs.to.getMinutes()).toBe(59);
      expect(callArgs.to.getSeconds()).toBe(59);
    });
  });
}); 