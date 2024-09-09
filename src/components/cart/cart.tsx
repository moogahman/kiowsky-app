import { IoIosCloseCircle } from 'react-icons/io';
import { useCart } from '../../context/cartContext';
import type { CartProps } from '../../types';
import './cart.css';
import CartItem from './cartItem/cartItem';

function Cart({ onClose }: CartProps) {
    const { cartItems } = useCart();

    return (
        <div className="cart-container">
            <div className="cart-container-actual">
                <div className="cart-heading">
                    <h1>Your Order</h1>
                </div>
                <IoIosCloseCircle
                    className="close-icon"
                    size={35}
                    onClick={onClose}
                />
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <CartItem
                            key={index}
                            imgLink={item.image}
                            imgAlt={`image of ${item.name}`}
                            title={item.name}
                            quantity={item.quantity || 0}
                            price={item.price}
                        />
                    ))}
                </div>
                <div className="cart-total">
                    <h2>Total: $0.00</h2>
                    <div className="checkout-btn">
                        <h2>Checkout</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
