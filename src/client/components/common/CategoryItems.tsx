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
        const cachedItems = localStorage.getItem(`${category}Items`);

        if (cachedItems) {
            setItems(JSON.parse(cachedItems));
        } else {
            console.error(`No cached items found for ${category}`);
        }
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
                        image={item.image}
                    />
                ))
            ) : (
                <p>Loading {category.toLowerCase()} items...</p>
            )}
        </div>
    );
}

export default CategoryItems;
