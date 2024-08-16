import type { MenuItemDisplayProps } from '../../types';
import './item.css';

const defaultImage = './img/noImage.png';

export function Item({ price, title, link, image }: MenuItemDisplayProps) {
    const displayImage = image || defaultImage;

    return (
        <div
            className="container-item"
            onClick={() => {
                window.location.href = link;
            }}>
            <div className="image-container">
                <img
                    className="item-image"
                    alt="Item image"
                    src={displayImage}
                />
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
