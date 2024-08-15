import type { IconType } from 'react-icons';
import { BiSolidBowlHot } from 'react-icons/bi';
import { FaBowlFood, FaCheese } from 'react-icons/fa6';
import { RiDrinksFill } from 'react-icons/ri';

const defaultCategoryList: CategoryList = {
    Drinks: RiDrinksFill,
    'Hot Food': BiSolidBowlHot,
    Snacks: FaBowlFood,
    'Cold Food': FaCheese,
};

function getCategoryIcon(category: string): IconType {
    return defaultCategoryList[category] || FaBowlFood;
}

export { getCategoryIcon };

interface CategoryList {
    [key: string]: IconType;
}
