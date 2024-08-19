// Using https://react-icons.github.io/react-icons
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
                    <div className="price">
                        <h1 className="price-text">$100</h1>
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
