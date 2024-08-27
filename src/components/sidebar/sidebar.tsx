import { useEffect, useState } from 'react';
import type { MenuItemData } from '../../../types';
import { getCategoryIcon } from '../../utils';
import './sidebar.css';
import Tab from './tabs/tab';

const Sidebar: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const cachedItems = localStorage.getItem('sidebarItems');

        if (!cachedItems) {
            console.error('No cached sidebar items found');
            return setCategories([]);
        }

        try {
            const items: [string, MenuItemData[]][] = JSON.parse(cachedItems);
            const categoryNames = items.map(item => item[0]);

            setCategories(categoryNames);
        } catch (error) {
            console.error('Error parsing cached sidebar items:', error);

            setCategories([]);
        }
    }, []);

    return (
        <div className="sidebar">
            <div>
                <img src="https://via.placeholder.com/150" alt="profile" />
            </div>
            {categories.length > 0 ? (
                categories.map((category, index) => {
                    const link = category
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, '-');

                    const icon = getCategoryIcon(category);

                    return (
                        <Tab
                            key={index}
                            title={category}
                            link={link}
                            Icon={icon}
                        />
                    );
                })
            ) : (
                <p>Loading categories...</p>
            )}
            <div>
                <h4 className="powered-by">Powered by</h4>
                <img
                    alt="Kiowsky logo"
                    src="./img/Logo-text.png"
                    className="logo-text"
                />
            </div>
        </div>
    );
};

export default Sidebar;
