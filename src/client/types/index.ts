import type { IconType } from 'react-icons';

export interface MenuItemDisplayProps {
    price: number;
    title: string;
    link: string;
    image: string;
}

export interface CategoryTabProps {
    title: string;
    link: string;
    Icon: IconType;
}
