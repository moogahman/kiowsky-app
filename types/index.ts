export interface MenuItemData {
    category: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
}

export interface CategoryMenuData {
    [key: string]: MenuItemData[];
}
