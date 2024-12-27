import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Creator from './pages/creator.jsx';
import Header from './components/header.jsx';
import Admin from './pages/admin.jsx';
import Pay from './pages/pay.jsx';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/creator" element={<Creator />} />
                <Route path="/pay" element={<Pay />} />
            </Routes>
        </Router>
    );
};

export default App;
