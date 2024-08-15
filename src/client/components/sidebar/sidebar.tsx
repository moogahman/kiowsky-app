import { useEffect, useState } from 'react';

import type { MenuItemData } from '../../types';
import { getCategoryIcon } from '../../utils';
import './sidebar.css';
import Tab from './tabs/tab';

const Sidebar: React.FC = () => {
    const [items, setItems] = useState<[string, MenuItemData[]][] | null>(null);

    useEffect(() => {
        const cachedItems = localStorage.getItem('sidebarItems');
        if (cachedItems) {
            setItems(JSON.parse(cachedItems));
        } else {
            console.error('No cached sidebar items found');
        }
    }, []);

    return (
        <div className="sidebar">
            <div>
                <img src="https://via.placeholder.com/150" alt="profile" />
            </div>
            {items ? (
                items.map((item, index) => {
                    const link = item[0]
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, '');

                    const icon = getCategoryIcon(item[0]);

                    return (
                        <Tab
                            key={index}
                            title={item[0]}
                            link={link}
                            Icon={icon}
                        />
                    );
                })
            ) : (
                <p>Loading items...</p>
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
