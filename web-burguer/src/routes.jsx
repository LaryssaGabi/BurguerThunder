import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/App'
import Pedidos from './pages/log/Pedidos'

export default function RoutesTelas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pedidosFeitos" element={<Pedidos />} />
            </Routes>
        </Router>
    );
}
