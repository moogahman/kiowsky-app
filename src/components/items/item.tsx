import './item.css';

interface ItemProps {
    price: number;
    title: string;
    link: string;
    image: string;
}

export function Item({ price, title, link, image }: ItemProps) {
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
