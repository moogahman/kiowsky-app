import React from 'react';

import { Item } from '../../items/item';

import './hotFood.css';

function HotFood() {
    return (
        <div className="main-1">
            <h1>Hot Food</h1>
            <Item
                price={12}
                title="Bagle"
                link="https://google.com"
                image="https://i0.wp.com/rqn.com.au/wp-content/uploads/2022/10/bagels.jpg?fit=600%2C600&ssl=1"
            />
        </div>
    );
}

export default HotFood;
