import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Alert } from 'react-bootstrap';

export function MedicoCadastro() {
    const [nome, setNome] = useState('');
    const [crm, setCrm] = useState('');
    const [dtInscricao, setDtInscricao] = useState('');
    const [especialidades, setEspecialidades] = useState([]);
    const [novaEspecialidade, setNovaEspecialidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você lidaria com o envio do formulário (POST)
        console.log({ nome, crm, dtInscricao, especialidades });
    };

    const adicionarEspecialidade = () => {
        if (novaEspecialidade.trim()) {
            setEspecialidades([...especialidades, novaEspecialidade.trim()]);
            setNovaEspecialidade('');
        }
    };

    const removerEspecialidade = (index) => {
        setEspecialidades(especialidades.filter((_, i) => i !== index));
    };

    return (
        <main role="main">
            <section className="jumbotron text-center bg-light">
                <img
                    className="d-block mx-auto"
                    src="/image/spring-security.png"
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
                        <Col md={8}>
                            {/* Alert Sucesso pode ser renderizado condicionalmente */}
                            {/* <Alert variant="success">Dados salvos com sucesso!</Alert> */}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row}>
                                    <Col md={6}>
                                        <Form.Label>Nome Completo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="João da Silva"
                                            value={nome}
                                            required
                                            onChange={(e) => setNome(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Nome completo é requerido.
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col md={6}>
                                        <Form.Label>Inscrição CRM</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="000000"
                                            value={crm}
                                            required
                                            onChange={(e) => setCrm(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>Data da Inscrição</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={dtInscricao}
                                            required
                                            onChange={(e) => setDtInscricao(e.target.value)}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Especialidade(s)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="suas especialidades são..."
                                        value={novaEspecialidade}
                                        onChange={(e) => setNovaEspecialidade(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), adicionarEspecialidade())}
                                    />
                                    <Form.Text className="text-muted">
                                        Insira suas especialidades médicas e pressione Enter.
                                    </Form.Text>
                                </Form.Group>

                                <ul className="list-group mb-3">
                                    {especialidades.map((esp, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            {esp}
                                            <Button variant="outline-danger" size="sm" onClick={() => removerEspecialidade(index)}>
                                                Remover
                                            </Button>
                                        </li>
                                    ))}
                                </ul>

                                <Form.Group as={Row}>
                                    <Col sm={10}>
                                        <Button type="submit" variant="primary" title="Salvar">
                                            <i className="fas fa-save"></i> Salvar
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>

                            <hr />

                            <h2>Especialidades médicas</h2>
                            <Table striped bordered hover size="sm" responsive>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Especialidade</th>
                                        <th>Excluir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {especialidades.map((esp, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{esp}</td>
                                            <td>
                                                <Button variant="danger" size="sm" onClick={() => removerEspecialidade(index)}>
                                                    Excluir
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};