import axios from 'axios';
import { useEffect, useState } from 'react';
import type { MenuItemData } from '../../types';
import { Item as ItemComponent } from '../items/item';

interface CategoryItemsProps {
    category: string;
    className?: string;
}

function CategoryItems({ category, className = 'main' }: CategoryItemsProps) {
    const [items, setItems] = useState<MenuItemData[] | null>(null);

    useEffect(() => {
        async function fetchItems() {
            // Check if items are in local storage
            const cachedItems = localStorage.getItem(`${category}Items`);

            if (cachedItems) {
                return setItems(JSON.parse(cachedItems));
            }

            try {
                const response = await axios.get(
                    'http://localhost:3000/api/items/nbcs'
                );
                const fetchedItems = response.data;

                if (!fetchedItems || !fetchedItems[category]) {
                    return console.log(`No ${category} items found.`);
                }

                const categoryItems = fetchedItems[category];

                setItems(categoryItems);

                // Cache the item in local storage
                localStorage.setItem(
                    `${category}Items`,
                    JSON.stringify(categoryItems)
                );
            } catch (error) {
                console.error(`Error fetching ${category} items:`, error);
            }
        }

        fetchItems();
    }, [category]);

    return (
        <div className={className}>
            <h1>{category}</h1>
            {items ? (
                items.map((item, index) => (
                    <ItemComponent
                        key={index}
                        price={item.price}
                        title={item.name}
                        link="/detail"
                        // image={item.image}
                    />
                ))
            ) : (
                <p>Loading {category.toLowerCase()} items...</p>
            )}
        </div>
    );
}

export default CategoryItems;
