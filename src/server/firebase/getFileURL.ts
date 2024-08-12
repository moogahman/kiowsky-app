import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../config/firebaseConfig.js';

console.log(await getFileURL('Muffin.webp'));

async function getFileURL(url: string): Promise<string> {
    try {
        const storageRef = ref(storage, url);

        const fileURL = await getDownloadURL(storageRef);

        return fileURL;
    } catch (error) {
        console.error('Error retrieving File URL:', error);

        return '';
    }
}

export { getFileURL };
