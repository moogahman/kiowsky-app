import React from 'react';
// Using https://react-icons.github.io/react-icons
import { BiSolidBowlHot } from 'react-icons/bi';
import { FaBowlFood, FaCheese } from 'react-icons/fa6';
import { RiDrinksFill } from 'react-icons/ri';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="sidebar">
                <div>
                    <img src="https://via.placeholder.com/150" alt="profile" />
                </div>
                <div>
                    <RiDrinksFill className="icon" size={35} />
                    <h1>Drinks</h1>
                </div>
                <div>
                    <BiSolidBowlHot className="icon" size={35} />
                    <h1>Hot Food</h1>
                </div>
                <div>
                    <FaBowlFood className="icon" size={35} />
                    <h1>Snacks</h1>
                </div>
                <div>
                    <FaCheese className="icon" size={35} />
                    <h1>Cold Food</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
