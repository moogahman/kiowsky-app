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
                <Sidebar />
                <Routes>
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/:category" element={<DynamicCategory />} />
                </Routes>
            </div>
        </AppLoader>
    );
}

export default App;
