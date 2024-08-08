import React from 'react';
import { BiSolidBowlHot } from 'react-icons/bi';
import { FaBowlFood, FaCheese } from 'react-icons/fa6';
import { RiDrinksFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src="https://via.placeholder.com/150" alt="profile" />
            </div>
            <Link to="/drinks" className="link1">
                <div>
                    <RiDrinksFill className="icon" size={35} />
                    <h1>Drinks</h1>
                </div>
            </Link>
            <Link to="/hotfood" className="link2">
                <div>
                    <BiSolidBowlHot className="icon" size={35} />
                    <h1>Hot Food</h1>
                </div>
            </Link>
            <Link to="/snacks" className="link3">
                <div>
                    <FaBowlFood className="icon" size={35} />
                    <h1>Snacks</h1>
                </div>
            </Link>
            <Link to="/coldfood" className="link4">
                <div>
                    <FaCheese className="icon" size={35} />
                    <h1>Cold Food</h1>
                </div>
            </Link>
            <div>
                <h4 className="powered-by">Powered by</h4>
                <img
                    alt="Kiowsky logo"
                    src="./img/logo-text.png"
                    className="logo-text"
                />
            </div>
        </div>
    );
}

export default Sidebar;
