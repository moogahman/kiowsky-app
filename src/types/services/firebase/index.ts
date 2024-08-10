export interface DatabaseItem {
    category: string;
    name: string;
    price: number;
}

export interface DatabaseItems {
    [key: string]: DatabaseItem;
}

export interface Items {
    [key: string]: DatabaseItem[];
}
