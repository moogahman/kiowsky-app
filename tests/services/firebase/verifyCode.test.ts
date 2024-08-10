import { child, get, ref } from 'firebase/database';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { database } from '../../../src/config/firebaseConfig.js';
import { verifyCode } from '../../../src/services/firebase/verifyCode.js';

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

// Mock Firebase modules
vi.mock('firebase/database');

describe('verifyCode', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('should return true when the code matches', async () => {
        const mockRef = {};
        (ref as Mock).mockReturnValue(mockRef);
        const mockChild = {};
        (child as Mock).mockReturnValue(mockChild);
        const mockSnapshot = {
            val: vi.fn().mockReturnValue('123456'),
        };
        (get as Mock).mockResolvedValue(mockSnapshot);

        const result = await verifyCode('kiosk1', '123456');
        expect(result).toBe(true);

        expect(ref).toHaveBeenCalledWith(database);
        expect(child).toHaveBeenCalledWith(mockRef, 'kiosks/kiosk1/code');
        expect(get).toHaveBeenCalledWith(mockChild);
    });

    it('should return false when the code does not match', async () => {
        const mockSnapshot = {
            val: vi.fn().mockReturnValue('123456'),
        };
        (get as Mock).mockResolvedValue(mockSnapshot);

        const result = await verifyCode('kiosk1', '654321');
        expect(result).toBe(false);
    });

    it('should throw an error when there is a database error', async () => {
        (get as Mock).mockRejectedValue(new Error('Database error'));

        await expect(verifyCode('kiosk1', '123456')).rejects.toThrow(
            'Error verifying code: Error: Database error'
        );
    });
});
