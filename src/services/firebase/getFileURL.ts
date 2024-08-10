import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../config/firebaseConfig.js';

async function getFileURL(url: string): Promise<string> {
    try {
        const storageRef = ref(storage, url);

        const fileURL = await getDownloadURL(storageRef);

        return fileURL;
    } catch (error) {
        throw new Error('Error retrieving File URL:' + error);
    }
}

export { getFileURL };
