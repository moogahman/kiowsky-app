import type { MenuItemDisplayProps } from '../../types';
import './item.css';

export function Item({ price, title, link, image }: MenuItemDisplayProps) {
    return (
        <div
            className="container-item"
            onClick={() => {
                window.location.href = link;
            }}>
            <div className="image-container">
                <img className="item-image" alt="Item image" src={image} />
            </div>
            <div className="text-container">
                <a className="item-title">{title}</a>
                <h4 className="item-price">
                    AUD$ <span className="item-price-span">{price}</span>
                </h4>
            </div>
        </div>
    );
}
