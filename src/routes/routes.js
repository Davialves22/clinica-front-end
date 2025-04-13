import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "../containers/Home/Home";
import { MedicoCadastro } from "../containers/MedicoCadastro/MedicoCadastro";
import { ConsultasAgendadas } from "../containers/MedicoConsultas/MedicoConsultas";
import { FormularioPaciente } from "../containers/Paciente/FormularioPaciente";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<MedicoCadastro/>} />
            <Route path="/consultas" element={<ConsultasAgendadas/>} />
            <Route path="/pacientecadastro" element={<FormularioPaciente/>} />


            </Routes>
        </Router>
    );
}

export default RoutesComponent;
