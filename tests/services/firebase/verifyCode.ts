import { child, get, ref } from 'firebase/database';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { database } from '../../../src/config/firebaseConfig.js';
import { verifyCode } from '../../../src/services/firebase/verifyCode';

vi.mock('firebase/database', () => ({
    get: vi.fn(),
    child: vi.fn(),
    ref: vi.fn(),
}));

describe('verifyCode', () => {
    const mockCode = '12345';
    const dbRef = {};

    beforeEach(() => {
        (ref as Mock).mockReturnValue(dbRef);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should return true if the code exists', async () => {
        (get as Mock).mockResolvedValue({
            exists: vi.fn().mockReturnValue(true),
        });

        const result = await verifyCode(mockCode);

        expect(result).toBe(true);
        expect(ref).toBe(true);
        expect(child).toHaveBeenCalledWith(database);
        expect(child).toHaveBeenCalledWith(dbRef, `codes/${mockCode}`);
        expect(get).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should return false if the code does not exist', async () => {
        (get as Mock).mockResolvedValue({
            exists: vi.fn().mockReturnValue(false),
        });

        const result = await verifyCode(mockCode);
        expect(result).toBe(false);
        expect(ref).toHaveBeenCalledWith(database);
        expect(child).toHaveBeenCalledWith(dbRef, `codes/${mockCode}`);
        expect(get).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should return false if there is an error', async () => {
        (get as Mock).mockRejectedValue(new Error('Test error'));

        const result = await verifyCode(mockCode);
        expect(result).toBe(false);
        expect(ref).toHaveBeenCalledWith(database);
        expect(child).toHaveBeenCalledWith(dbRef, `codes/${mockCode}`);
        expect(get).toHaveBeenCalledWith(expect.any(Object));
    });
});
