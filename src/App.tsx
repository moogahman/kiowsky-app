// Using https://react-icons.github.io/react-icons
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail/detail';
import ColdFood from './components/sidebar/coldFood/coldFood';
import Drinks from './components/sidebar/drinks/drinks';
import HotFood from './components/sidebar/hotFood/hotFood';
import Snacks from './components/sidebar/snacks/snacks';

import './App.css';
import Sidebar from './components/sidebar/sidebar';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Routes>
                <Route path="/drinks" element={<Drinks />} />
                <Route path="/hotfood" element={<HotFood />} />
                <Route path="/coldfood" element={<ColdFood />} />
                <Route path="/snacks" element={<Snacks />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
