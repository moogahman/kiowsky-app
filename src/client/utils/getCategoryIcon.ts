import type { IconType } from 'react-icons';
import { BiSolidBowlHot } from 'react-icons/bi';
import { FaBowlFood, FaCheese, FaPizzaSlice } from 'react-icons/fa6';
import {
    GiChickenOven,
    GiChocolateBar,
    GiFruitTree,
    GiGingerbreadMan,
    GiNoodles,
} from 'react-icons/gi';
import { IoFish } from 'react-icons/io5';
import { LuSalad, LuSandwich, LuWheatOff } from 'react-icons/lu';
import { MdSoupKitchen } from 'react-icons/md';
import { RiDrinksFill } from 'react-icons/ri';
import { TbMeat } from 'react-icons/tb';

// Default category icons
const defaultCategoryList: CategoryList = {
    Drinks: RiDrinksFill,
    'Hot Food': BiSolidBowlHot,
    Snacks: FaBowlFood,
    'Cold Food': FaCheese,
    Vegetarian: GiFruitTree,
    Desserts: GiChocolateBar,
    Baked: GiGingerbreadMan,
    Meat: TbMeat,
    Chicken: GiChickenOven,
    'Sea Food': IoFish,
    Sandwiches: LuSandwich,
    'Gluten Free': LuWheatOff,
    Pasta: GiNoodles,
    Salads: LuSalad,
    Soup: MdSoupKitchen,
    Pizza: FaPizzaSlice,
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
