import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import logoImage from '../../assets/spring-security.png';

export function ConsultasAgendadas() {
    const [consultas, setConsultas] = useState([
        { id: 1, paciente: 'João da Silva', dataConsulta: '2025-04-15', especialidade: 'Cardiologia' },
        { id: 2, paciente: 'Maria Oliveira', dataConsulta: '2025-04-20', especialidade: 'Dermatologia' },
        { id: 3, paciente: 'Carlos Souza', dataConsulta: '2025-04-22', especialidade: 'Pediatria' }
    ]);

    const excluirConsulta = (id) => {
        const confirmacao = window.confirm('Deseja mesmo excluir esta consulta?');
        if (!confirmacao) return;

        setConsultas(consultas.filter((consulta) => consulta.id !== id));
    };

    return (
        <main role="main">
            <section className="jumbotron text-center bg-light">
                <img
                    className="d-block mx-auto"
                    src={logoImage}
                    alt="Logo"
                    width="72"
                    height="72"
                />
                <Container>
                    <h1 className="jumbotron-heading">Clínica Spring Security</h1>
                    <p className="lead text-muted">Médicos e Especialistas</p>
                </Container>
            </section>

            <section className="py-5 bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <h2>Consultas Agendadas</h2>
                            <Table striped bordered hover size="sm" responsive>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Paciente</th>
                                        <th>Data Consulta</th>
                                        <th>Especialidade</th>
                                        <th>Editar</th>
                                        <th>Excluir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consultas.map((consulta, index) => (
                                        <tr key={consulta.id}>
                                            <td>{index + 1}</td>
                                            <td>{consulta.paciente}</td>
                                            <td>{consulta.dataConsulta}</td>
                                            <td>{consulta.especialidade}</td>
                                            <td>
                                                <Button variant="warning" size="sm">
                                                    Editar
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => excluirConsulta(consulta.id)}
                                                >
                                                    Excluir
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {consultas.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="text-center">
                                                Nenhuma consulta agendada.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}
