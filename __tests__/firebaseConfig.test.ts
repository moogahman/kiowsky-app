import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { describe, expect, it, vi } from 'vitest';
import { firebaseConfig } from '../src/firebaseConfig.js';

vi.mock('firebase/app', () => ({
    initializeApp: vi.fn().mockReturnValue({}),
}));

vi.mock('firebase/analytics', () => ({
    getAnalytics: vi.fn(),
}));

describe('Firebase Initialization', () => {
    it('initializes Firebase app and analytics without error', () => {
        expect(() => {
            const app = initializeApp(firebaseConfig);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const analytics = getAnalytics(app);
        }).not.toThrow();
    });
});
