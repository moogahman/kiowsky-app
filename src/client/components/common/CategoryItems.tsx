import { useEffect, useState } from 'react';
import type { MenuItemData } from '../../../shared/types';
import { Item as ItemComponent } from '../items/item';
import './CategoryItems.css';

interface CategoryItemsProps {
    category: string;
    className?: string;
}

function CategoryItems({ category, className = 'main' }: CategoryItemsProps) {
    const [items, setItems] = useState<MenuItemData[] | null>(null);

    useEffect(() => {
        const cachedItems = localStorage.getItem(`${category}Items`);

        if (!cachedItems) {
            throw new Error(`No cached items found for ${category}`);
        }

        setItems(JSON.parse(cachedItems));
    }, [category]);

    return (
        <div className={className}>
            <h1>{category}</h1>
            <div className="item-list">
                {items ? (
                    items.map((item, index) => (
                        <ItemComponent
                            key={index}
                            price={item.price}
                            title={item.name}
                            link="/detail"
                            image={item.image}
                            category={category}
                        />
                    ))
                ) : (
                    <p>Loading {category.toLowerCase()} items...</p>
                )}
            </div>
        </div>
    );
}

export default CategoryItems;
