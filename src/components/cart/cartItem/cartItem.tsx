import type { CartItemProps } from '../../../types';
import './cartItem.css';

function CartItem({ imgLink, imgAlt, title, quantity, price }: CartItemProps) {
    return (
        <div className="cart-item">
            <img src={imgLink} alt={imgAlt} />
            <h2>{title}</h2>
            <h2>x{quantity}</h2>
            <h2 className="cart-item-price">${price}</h2>
        </div>
    );
}

export default CartItem;
