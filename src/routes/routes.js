import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer/footer";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
            <Route path="/header" element={<Header/>} />
            <Route path="/footer" element={<Footer/>} />

            </Routes>
        </Router>
    );
}

export default RoutesComponent;
