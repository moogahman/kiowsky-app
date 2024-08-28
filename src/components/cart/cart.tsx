import { IoIosCloseCircle } from 'react-icons/io';
import type { CartProps } from '../../types';
import './cart.css';
import CartItem from './cartItem/cartItem';

function Cart({ onClose }: CartProps) {
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
                    <CartItem
                        imgLink="https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
                        imgAlt="image of a muffin"
                        title="Muffin"
                        quantity={1}
                        price={5.94}
                    />
                    <CartItem
                        imgLink="https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
                        imgAlt="image of a muffin"
                        title="Muffin"
                        quantity={1}
                        price={5.94}
                    />
                    <CartItem
                        imgLink="https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
                        imgAlt="image of a muffin"
                        title="Muffin"
                        quantity={1}
                        price={5.94}
                    />
                    <CartItem
                        imgLink="https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
                        imgAlt="image of a muffin"
                        title="Muffin"
                        quantity={1}
                        price={5.94}
                    />
                    <CartItem
                        imgLink="https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
                        imgAlt="image of a muffin"
                        title="Muffin"
                        quantity={1}
                        price={5.94}
                    />
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
