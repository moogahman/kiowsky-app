import axios from 'axios';
import { useEffect, useState } from 'react';
import type { CategoryMenuData } from '../types';
import './AppLoader.css';

interface AppLoaderProps {
    children: React.ReactNode;
}

function AppLoader({ children }: AppLoaderProps) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);

    useEffect(() => {
        async function fetchAndCacheData() {
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/items/nbcs'
                );

                const fetchedItems = response.data as CategoryMenuData;

                if (!fetchedItems) {
                    console.log('No items found for the given kiosk ID.');
                    return;
                }

                // Extract categories and items from the fetched data
                const categories = Object.keys(fetchedItems);

                const allItems = categories.flatMap(
                    category => fetchedItems[category]
                );

                setTotalAssets(allItems.length);

                // Wait for state update to complete
                await new Promise(resolve => setTimeout(resolve, 0));

                // Preload images for all items
                for (let i = 0; i < allItems.length; i++) {
                    const item = allItems[i];

                    if (!item) return;

                    if (item.image) {
                        await preloadImage(item.image);
                    }

                    setProgress(i + 1);
                    // Wait for progress update to be reflected
                    await new Promise(resolve => setTimeout(resolve, 0));
                }

                // Cache categories in localStorage
                for (const category of categories) {
                    localStorage.setItem(
                        `${category}Items`,
                        JSON.stringify(fetchedItems[category])
                    );
                }

                // Cache sidebar items in localStorage
                localStorage.setItem(
                    'sidebarItems',
                    JSON.stringify(Object.entries(fetchedItems))
                );

                setLoading(false);
            } catch (error) {
                console.error('Error fetching and caching data:', error);
                setLoading(false);
            }
        }

        fetchAndCacheData();
    }, []);

    // Function to preload an image
    const preloadImage = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => resolve();
            img.onerror = reject;
            img.src = src;
        });
    };

    // Display loading screen while assets are being loaded
    if (loading) {
        return (
            <div className="loading-screen">
                <h2>
                    Loading assets ({progress}/{totalAssets})
                </h2>
                <progress value={progress} max={totalAssets}></progress>
            </div>
        );
    }

    return <>{children}</>;
}

export default AppLoader;
