import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "../components/header/Header";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
            <Route path="/header" element={<Header/>} />

            </Routes>
        </Router>
    );
}

export default RoutesComponent;
