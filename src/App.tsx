import React from 'react';
// Using https://react-icons.github.io/react-icons
import { Route, Routes } from 'react-router-dom';
import ColdFood from './coldFood';
import Drinks from './drinks';
import HotFood from './hotFood';
import Snacks from './snacks';

import './App.css';
import Sidebar from './sidebar';

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
