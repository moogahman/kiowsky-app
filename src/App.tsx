import React from 'react';
// Using https://react-icons.github.io/react-icons
import { Route, Routes } from 'react-router-dom';
import Drinks from './drinks';
import HotFood from './hotFood';

import './App.css';
import Sidebar from './sidebar';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Routes>
                <Route path="/drinks" element={<Drinks />} />
                <Route path="/hotfood" element={<HotFood />} />
            </Routes>
        </div>
    );
}

export default App;
