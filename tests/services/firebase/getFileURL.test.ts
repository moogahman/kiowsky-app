import { getDownloadURL, ref, type StorageReference } from 'firebase/storage';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { storage } from '../../../src/config/firebaseConfig.js';
import { getFileURL } from '../../../src/services/firebase/getFileURL.js';

// Mock the firebase modules
vi.mock('firebase/storage');

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

describe('getFileURL', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('should return the download URL for a valid file path', async () => {
        const mockURL = 'path/to/file.jpg';
        const mockDownloadURL =
            'https://firebasestorage.googleapis.com/file.jpg';

        // Mock the ref and getDownloadURL functions
        vi.mocked(ref).mockReturnValue({} as StorageReference);
        vi.mocked(getDownloadURL).mockResolvedValue(mockDownloadURL);

        const result = await getFileURL(mockURL);

        expect(ref).toHaveBeenCalledWith(storage, mockURL);
        expect(getDownloadURL).toHaveBeenCalled();
        expect(result).toBe(mockDownloadURL);
    });

    it('should throw an error when getDownloadURL fails', async () => {
        const mockURL = 'path/to/nonexistent/file.jpg';
        const mockError = new Error('File not found');

        vi.mocked(ref).mockReturnValue({} as StorageReference);
        vi.mocked(getDownloadURL).mockRejectedValue(mockError);

        await expect(getFileURL(mockURL)).rejects.toThrow(
            'Error retrieving File URL:Error: File not found'
        );
        expect(ref).toHaveBeenCalledWith(storage, mockURL);
        expect(getDownloadURL).toHaveBeenCalled();
    });
});
