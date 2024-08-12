// Using https://react-icons.github.io/react-icons
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ColdFood from './components/sidebar/coldFood/coldFood.jsx';
import Drinks from './components/sidebar/drinks/drinks.jsx';
import HotFood from './components/sidebar/hotFood/hotFood.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Snacks from './components/sidebar/snacks/snacks.jsx';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Routes>
                <Route path="/drinks" element={<Drinks />} />
                <Route path="/hotfood" element={<HotFood />} />
                <Route path="/coldfood" element={<ColdFood />} />
                <Route path="/snacks" element={<Snacks />} />
            </Routes>
        </div>
    );
}

export default App;
