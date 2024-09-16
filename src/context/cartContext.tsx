import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import type { MenuItemData } from '../../types';

interface CartContextType {
    cartItems: MenuItemData[];
    addToCart: (item: MenuItemData) => void;
    removeFromCart: (itemId: string) => void;
    updateItemQuantity: (itemId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<MenuItemData[]>(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item: MenuItemData) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.name === item.name);
            if (existingItem) {
                return prevItems.map(i =>
                    i.name === item.name
                        ? { ...i, quantity: (i.quantity || 0) + 1 }
                        : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemName: string) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.name !== itemName)
        );
    };

    const updateItemQuantity = (itemName: string, quantity: number) => {
        console.log(`Updating item ${itemName} to quantity ${quantity}`);
        if (!itemName) {
            console.error('itemName is undefined or null');
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.name === itemName ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateItemQuantity,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
