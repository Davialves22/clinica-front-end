import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "../containers/Home/Home";
import { MedicoCadastro } from "../containers/MedicoCadastro/MedicoCadastro";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<MedicoCadastro/>} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;
