import axios from 'axios';
import { useEffect, useState } from 'react';

import type { CategoryMenuData, MenuItemData } from '../../types';
import { getCategoryIcon } from '../../utils';
import './sidebar.css';
import Tab from './tabs/tab';

const Sidebar: React.FC = () => {
    const [items, setItems] = useState<[string, MenuItemData[]][] | null>(null);

    useEffect(() => {
        async function fetchItems() {
            // Check if items are in local storage
            const cachedItems = localStorage.getItem('sidebarItems');

            if (cachedItems) {
                return setItems(JSON.parse(cachedItems));
            }

            try {
                const response = await axios.get(
                    'http://localhost:3000/api/items/nbcs'
                );
                const fetchedItems = response.data as CategoryMenuData;

                if (!fetchedItems) {
                    console.log('No items found for the given kiosk ID.');
                    return;
                }

                const items = Object.entries(fetchedItems);

                setItems(items);

                // Cache the items in local storage
                localStorage.setItem('sidebarItems', JSON.stringify(items));
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        }

        fetchItems();
    }, []);

    /* return (
        <div className="sidebar">
            <div>
                <img src="https://via.placeholder.com/150" alt="profile" />
            </div>
            <Tab title="Drinks" link="/drinks" Icon={RiDrinksFill} />
            <Tab title="Hot Food" link="/hotfood" Icon={BiSolidBowlHot} />
            <Tab title="Snacks" link="/snacks" Icon={FaBowlFood} />
            <Tab title="Cold Food" link="/coldfood" Icon={FaCheese} />
            <div>
                <h4 className="powered-by">Powered by</h4>
                <img
                    alt="Kiowsky logo"
                    src="./img/Logo-text.png"
                    className="logo-text"
                />
            </div>
        </div>
    ); */

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
