import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebaseConfig.js';

const imageRef = ref(storage, 'Muffin.webp');

getDownloadURL(imageRef)
    .then(url => console.log('Image URL:', url))
    .catch(error => console.error('Error retrieving image URL:', error));
