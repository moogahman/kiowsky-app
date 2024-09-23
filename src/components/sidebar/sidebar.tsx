import { useEffect, useState } from 'react';
import type { MenuItemData } from '../../../types';
import { getCategoryIcon } from '../../utils';
import './sidebar.css';
import Tab from './tabs/tab';

const Sidebar: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedTab, setSelectedTab] = useState<string | null>(null);

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
            <div className="sidebar-logo">
                <img
                    className="caffee-logo"
                    src="/img/grounded-coffee-logo.png"
                    alt="profile"
                />
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
                            onClick={() => setSelectedTab(category)}
                            isSelected={selectedTab === category}
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
