export interface MenuItemData {
    category: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
    id: string;
}

export interface CategoryMenuData {
    [key: string]: MenuItemData[];
}
