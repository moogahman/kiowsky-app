import { IoIosCloseCircle } from 'react-icons/io';
import './detail.css';

function Detail() {
    return (
        <div className="main-2">
            <h1>Bagel</h1>
            <IoIosCloseCircle size={37} className="close-icon" />
            <div className="img-main">
                <img
                    src="https://i0.wp.com/rqn.com.au/wp-content/uploads/2022/10/bagels.jpg?fit=600%2C600&ssl=1"
                    alt="Bagel"
                    className="detail-img"
                />
            </div>
            <div className="cart-btn">
                <h1 className="cart-btn-txt">Add to cart</h1>
            </div>
        </div>
    );
}

export default Detail;
