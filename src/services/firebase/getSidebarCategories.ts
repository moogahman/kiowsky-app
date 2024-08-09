import { child, get, ref } from 'firebase/database';
import { database } from '../../config/firebaseConfig.js';
import type { Item } from '../../types/services/firebase';

async function getSidebarCategories(kioskId: string) {
    try {
        const dbRef = ref(database);

        const snapshot = await get(child(dbRef, `kiosks/${kioskId}/items`));

        const items = snapshot.toJSON();
        const categories: string[] = [];

        if (!items) return console.error('No items found');

        Object.values(items).forEach((item: Item) => {
            const category = item.category;

            if (categories.includes(category)) return;

            categories.push(category);
        });
    } catch (error) {
        console.error('Error getting sidebar categories:', error);
    }
}

export { getSidebarCategories };
