import type { IconType } from 'react-icons';

export interface MenuItemData {
    category: string;
    name: string;
    price: number;
}

export interface CategoryMenuData {
    [key: string]: MenuItemData[];
}

export interface MenuItemDisplayProps {
    price: number;
    title: string;
    link: string;
    // image: string;
}

export interface CategoryTabProps {
    title: string;
    link: string;
    Icon: IconType;
}
