import type { IconType } from 'react-icons';
import { BiSolidBowlHot } from 'react-icons/bi';
import { FaBowlFood, FaCheese } from 'react-icons/fa6';
import { RiDrinksFill } from 'react-icons/ri';

// Default category icons
const defaultCategoryList: CategoryList = {
    Drinks: RiDrinksFill,
    'Hot Food': BiSolidBowlHot,
    Snacks: FaBowlFood,
    'Cold Food': FaCheese,
};

/**
 * Retrieves the icon component for a given category
 * @param category The name of the category
 * @returns IconType The corresponding icon component, or a default icon if not found
 */
function getCategoryIcon(category: string): IconType {
    return defaultCategoryList[category] || FaBowlFood;
}

export { getCategoryIcon };

// Define structure for the category list
interface CategoryList {
    [key: string]: IconType;
}
