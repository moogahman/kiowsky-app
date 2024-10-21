import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLoader from './components/AppLoader';
import Cart from './components/cart/cart';
import DynamicCategory from './components/categories/DynamicCategory';
import Detail from './components/detail/detail';
import Sidebar from './components/sidebar/sidebar';
import StartScreen from './components/start/StartScreen';
import { useCart } from './hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { cartItems, setCartItems } = useCart();
    const [isStartScreenVisible, setIsStartScreenVisible] = useState(true);

    const handlePriceContainerClick = () => {
        setIsCartVisible(true);
    };

    const handleCloseCart = () => {
        setIsCartVisible(false);
    };

    const totalItemsInCart = cartItems.reduce(
        (total, item) => total + (item.quantity ?? 0),
        0
    );

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * (item.quantity ?? 0),
        0
    );

    const handleStart = () => {
        setIsStartScreenVisible(false);
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const resetTimeout = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                console.log('User logged out due to inactivity');
                setIsStartScreenVisible(true);
                clearCart();
            }, 30000); // 1 minute
        };

        const events = ['mousemove', 'keydown', 'touchstart'];

        events.forEach(event => window.addEventListener(event, resetTimeout));

        resetTimeout();

        return () => {
            clearTimeout(timeoutId);
            events.forEach(event =>
                window.removeEventListener(event, resetTimeout)
            );
        };
    }, []);

    return (
        <AppLoader>
            <Elements stripe={stripePromise}>
                {isStartScreenVisible ? (
                    <StartScreen onStart={handleStart} />
                ) : (
                    <div className="App">
                        <div
                            className="price-container"
                            onClick={handlePriceContainerClick}>
                            <div className="price-running">
                                <h1 className="price-text">
                                    ${totalPrice.toFixed(2)}
                                </h1>
                            </div>
                            <div className="cart-icon-container">
                                <FaShoppingCart
                                    size={30}
                                    className="cart-icon"
                                />
                                <div className="item-count-cart-icon-container">
                                    <h3 className="item-count-cart-icon">
                                        {totalItemsInCart}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <Sidebar />
                        {isCartVisible && <Cart onClose={handleCloseCart} />}
                        <Routes>
                            <Route
                                path="/detail/:category/:itemId"
                                element={<Detail />}
                            />
                            <Route
                                path="/:category"
                                element={<DynamicCategory />}
                            />
                        </Routes>
                    </div>
                )}
            </Elements>
        </AppLoader>
    );
}

export default App;
