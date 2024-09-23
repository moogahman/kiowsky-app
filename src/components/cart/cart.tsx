import { IoIosCloseCircle } from 'react-icons/io';
import { useCart } from '../../context/cartContext';
import type { CartProps } from '../../types';
import './cart.css';
import CartItem from './cartItem/cartItem';

const defaultImage = '/img/noImage.png';

function Cart({ onClose }: CartProps) {
    const { cartItems } = useCart();
    console.log('Cart re-rendered with items:', cartItems);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * (item.quantity || 0);
    }, 0);

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
                    {cartItems.map((item, index) => {
                        return (
                            <CartItem
                                key={index}
                                name={item.name}
                                imgLink={item.image || defaultImage}
                                imgAlt={`image of ${item.name}`}
                                title={item.name}
                                quantity={item.quantity || 0}
                                price={Number(item.price.toFixed(2))}
                            />
                        );
                    })}
                </div>
                <div className="cart-total">
                    <h2>Total: ${totalPrice.toFixed(2)}</h2>
                    <div className="checkout-btn">
                        <h2>Checkout</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
