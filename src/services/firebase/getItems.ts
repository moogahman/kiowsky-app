import { child, get, ref } from 'firebase/database';
import { database } from '../../config/firebaseConfig.js';
import type {
    DatabaseItem,
    DatabaseItems,
    Items,
} from '../../types/services/firebase';

console.log(await getItems('nbcs'));

/**
 * Returns an object with items sorted into the categories
 * @param kioskId The Kiosk ID
 * @returns Promise<Items | undefined>
 */
async function getItems(kioskId: string): Promise<Items> {
    try {
        const dbRef = ref(database);

        const snapshot = await get(child(dbRef, `kiosks/${kioskId}/items`));

        if (!snapshot.exists()) {
            console.warn('No items found in database for kiosk:', kioskId);
            return {};
        }

        const databaseItems = snapshot.val() as DatabaseItems;

        const items: Items = {};

        // Iterate through the items object and categorize them
        Object.values(databaseItems).forEach((item: DatabaseItem) => {
            const category = item.category;

            // If the category is not already a key in "items" add it
            if (!items[category]) {
                items[category] = [];
            }

            items[category].push(item);
        });

        return items;
    } catch (error) {
        throw new Error('Error getting items: ' + error);
    }
}

export { getItems };
