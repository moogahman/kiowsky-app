import './AddToCartAnimation.css';

const AddToCartAnimation = ({ isVisible }: { isVisible: boolean }) => {
    return (
        <div className={`add-to-cart-animation ${isVisible ? 'visible' : ''}`}>
            <p>Item added to cart!</p>
        </div>
    );
};

export default AddToCartAnimation;
