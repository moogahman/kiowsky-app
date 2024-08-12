import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../config/firebaseConfig';

async function getFileURL(url: string): Promise<string | null> {
    try {
        const storageRef = ref(storage, url);

        const fileURL = await getDownloadURL(storageRef);

        return fileURL;
    } catch (error) {
        console.error('Error retrieving File URL:', error);

        return null;
    }
}

export { getFileURL };
