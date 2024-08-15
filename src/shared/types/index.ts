export interface MenuItemData {
    category: string;
    name: string;
    price: number;
    image: string;
}

export interface CategoryMenuData {
    [key: string]: MenuItemData[];
}
