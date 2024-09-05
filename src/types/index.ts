import type { IconType } from 'react-icons';

export interface MenuItemDisplayProps {
    price: number;
    title: string;
    link: string;
    image: string;
    category: string;
}

export interface CategoryTabProps {
    title: string;
    link: string;
    Icon: IconType;
    isSelected: boolean;
    onClick: () => void;
}

export interface CartItemProps {
    imgLink: string;
    imgAlt: string;
    title: string;
    quantity: number;
    price: number;
}

export interface CartProps {
    onClose: () => void;
}
