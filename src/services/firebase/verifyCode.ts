// TO-DO: Integrate auth with login screen

import { child, get, ref } from 'firebase/database';
import { database } from '../../firebaseConfig.js';

async function verifyCode(code: string): Promise<boolean> {
    const dbRef = ref(database);

    try {
        const snapshot = await get(child(dbRef, `codes/${code}`));

        if (snapshot.exists()) {
            // If code exists, setup the kiosk

            return true;
        } else {
            // Code does not exist, throw error

            return false;
        }
    } catch (error) {
        console.error('Error verifying code:', error);

        return false;
    }
}

export { verifyCode };
