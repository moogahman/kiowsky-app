import { useState } from 'react';
import type { Item } from '../../../types';

import './hotFood.css';

function HotFood() {
    const [items, setItems] = useState<Item[] | []>([]);

    return (
        <div className="main-1">
            <h1>Hot Food</h1>
            <Item
                price={12}
                title="Bagel"
                link="/detail"
                image="https://i0.wp.com/rqn.com.au/wp-content/uploads/2022/10/bagels.jpg?fit=600%2C600&ssl=1"
            />
        </div>
    );
}

export default HotFood;
