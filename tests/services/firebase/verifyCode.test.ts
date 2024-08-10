import { child, get, ref } from 'firebase/database';
import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    type Mock,
    vi,
} from 'vitest';
import { database } from '../../../src/config/firebaseConfig.js';
import { verifyCode } from '../../../src/services/firebase/verifyCode';

vi.mock('../../../src/config/env', () => ({
    env: {
        FIREBASE_API_KEY: 'test-api-key',
        FIREBASE_AUTH_DOMAIN: 'test-auth-domain',
        FIREBASE_PROJECT_ID: 'test-project-id',
        FIREBASE_STORAGE_BUCKET: 'test-storage-bucket',
        FIREBASE_MESSAGING_SENDER_ID: 'test-messaging-sender-id',
        FIREBASE_APP_ID: 'test-app-id',
        FIREBASE_MEASUREMENT_ID: 'test-measurement-id',
        FIREBASE_DATABASE_URL: 'https://test-database-url.firebaseio.com',
    },
}));

vi.mock('firebase/database', () => ({
    get: vi.fn(),
    child: vi.fn(),
    ref: vi.fn(),
    getDatabase: vi.fn(),
}));

// ... existing imports and mocks ...

describe('verifyCode', () => {
    const mockKioskId = 'mock-kiosk';
    const mockCode = '12345';
    const dbRef = {};

    beforeEach(() => {
        (ref as Mock).mockReturnValue(dbRef);
        (child as Mock).mockReturnValue({});
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should return true if the code exists', async () => {
        (get as Mock).mockResolvedValue({
            exists: () => true,
            val: () => mockCode,
        });

        const result = await verifyCode(mockKioskId, mockCode);

        expect(result).toBe(true);
        expect(ref).toHaveBeenCalledWith(database);
        expect(child).toHaveBeenCalledWith(dbRef, `kiosks/${mockKioskId}/code`);
        expect(get).toHaveBeenCalled();
    });

    it('should return false if the code does not exist', async () => {
        (get as Mock).mockResolvedValue({
            exists: () => true,
            val: () => 'different-code',
        });

        const result = await verifyCode(mockKioskId, mockCode);
        expect(result).toBe(false);
        expect(ref).toHaveBeenCalledWith(database);
        expect(child).toHaveBeenCalledWith(dbRef, `kiosks/${mockKioskId}/code`);
        expect(get).toHaveBeenCalled();
    });

    it('should return false if there is an error', async () => {
        (get as Mock).mockRejectedValue(new Error('Test error'));

        const result = await verifyCode(mockKioskId, mockCode);
        expect(result).toBe(false);
        expect(ref).toHaveBeenCalledWith(database);
        expect(child).toHaveBeenCalledWith(dbRef, `kiosks/${mockKioskId}/code`);
        expect(get).toHaveBeenCalled();
    });
});
