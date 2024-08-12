import { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './detail.css';

function Detail() {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleClose = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="main-2">
            <h1 className="title">Bagel</h1>
            <h3 className="price">AUD$12</h3>
            <IoIosCloseCircle
                size={37}
                className="close-icon"
                onClick={handleClose}
            />
            <div className="img-main">
                <img
                    src="https://i0.wp.com/rqn.com.au/wp-content/uploads/2022/10/bagels.jpg?fit=600%2C600&ssl=1"
                    alt="Bagel"
                    className="detail-img"
                />
            </div>
            <div className="quantity-contain">
                <div className="quantity-count">
                    <div className="minus-btn" onClick={handleDecrement}>
                        -
                    </div>
                    <h1 className="quantity-num">{quantity}</h1>
                    <div className="plus-btn" onClick={handleIncrement}>
                        +
                    </div>
                </div>
            </div>
            <div className="cart-btn">
                <h1 className="cart-btn-txt">Add to cart</h1>
            </div>
        </div>
    );
}

export default Detail;
