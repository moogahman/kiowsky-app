import { useNavigate } from 'react-router-dom';
import type { MenuItemDisplayProps } from '../../types';
import { truncateText } from '../../utils';
import './item.css';

const defaultImage = './img/noImage.png';

export function Item({ price, title, image, category }: MenuItemDisplayProps) {
    const displayImage = image || defaultImage;
    const truncatedTitle = truncateText(title, 17);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${category}/${encodeURIComponent(title)}`);
    };

    return (
        <div className="container-item" onClick={handleClick}>
            <div className="image-container">
                <img
                    className="item-image"
                    alt="Item image"
                    src={displayImage}
                />
            </div>
            <div className="text-container">
                <a className="item-title">{truncatedTitle}</a>
                <h4 className="item-price">
                    AUD$ <span className="item-price-span">{price}</span>
                </h4>
            </div>
        </div>
    );
}
