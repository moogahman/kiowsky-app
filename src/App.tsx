// Using https://react-icons.github.io/react-icons
import { FaShoppingCart } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLoader from './components/AppLoader';
import DynamicCategory from './components/categories/DynamicCategory';
import Detail from './components/detail/detail';
import Sidebar from './components/sidebar/sidebar';

function App() {
    return (
        <AppLoader>
            <div className="App">
                <div className="price-container">
                    <div className="pay-btn">
                        <h1>Pay</h1>
                    </div>
                    <div className="price-running">
                        <h1 className="price-text">$100</h1>
                    </div>
                    <div className="cart-icon-container">
                        <FaShoppingCart size={30} className="cart-icon" />
                        <div className="item-count-cart-icon-container">
                            <h3 className="item-count-cart-icon">0</h3>
                        </div>
                    </div>
                </div>
                <Sidebar />
                <Routes>
                    <Route
                        path="/detail/:category/:itemId"
                        element={<Detail />}
                    />
                    <Route path="/:category" element={<DynamicCategory />} />
                </Routes>
            </div>
        </AppLoader>
    );
}

export default App;
