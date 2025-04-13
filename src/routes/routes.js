import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "../containers/Home/Home";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;
