import { BiSolidBowlHot } from 'react-icons/bi';
import { FaBowlFood, FaCheese } from 'react-icons/fa6';
import { RiDrinksFill } from 'react-icons/ri';

import './sidebar.css';

// import { getItems } from '../../services/firebase';
import Tab from './tabs/tab';

function Sidebar() {
    // console.log(getItems('nbcs'));
    return (
        <div className="sidebar">
            <div>
                <img src="https://via.placeholder.com/150" alt="profile" />
            </div>
            <Tab title="Drinks" link="/drinks" Icon={RiDrinksFill} />
            <Tab title="Hot Food" link="/hotfodd" Icon={BiSolidBowlHot} />
            <Tab title="Snacks" link="/snacks" Icon={FaBowlFood} />
            <Tab title="Cold Food" link="/coldfood" Icon={FaCheese} />
            <div>
                <h4 className="powered-by">Powered by</h4>
                <img
                    alt="Kiowsky logo"
                    src="./img/Logo-text.png"
                    className="logo-text"
                />
            </div>
        </div>
    );
}

export default Sidebar;
