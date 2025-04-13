import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/spring-security.png';

export function MedicoCadastro() {
    const [nome, setNome] = useState('');
    const [crm, setCrm] = useState('');
    const [dtInscricao, setDtInscricao] = useState('');
    const [especialidades, setEspecialidades] = useState([]);
    const [novaEspecialidade, setNovaEspecialidade] = useState('');
    const [formSalvo, setFormSalvo] = useState(false);
    const [erros, setErros] = useState({});
    const navigate = useNavigate();

    const validarCampos = () => {
        const novosErros = {};
        if (!nome.trim()) novosErros.nome = 'Nome completo é obrigatório.';
        if (!crm.trim()) novosErros.crm = 'CRM é obrigatório.';
        if (!dtInscricao.trim()) novosErros.dtInscricao = 'Data da inscrição é obrigatória.';
        if (especialidades.length === 0) novosErros.especialidades = 'Adicione pelo menos uma especialidade.';
        return novosErros;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validacoes = validarCampos();

        if (Object.keys(validacoes).length === 0) {
            // Sucesso no envio
            console.log({ nome, crm, dtInscricao, especialidades });
            setFormSalvo(true);
            setErros({});

            
            setTimeout(() => {
                navigate('/'); 
            }, 2000);
        } else {
            setErros(validacoes);
            setFormSalvo(false);
        }
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
                <img className="d-block mx-auto" src={logoImage} alt="Logo" width="72" height="72" />
                <Container>
                    <h1 className="jumbotron-heading">Clínica Spring Security</h1>
                    <p className="lead text-muted">Médicos e Especialistas</p>
                </Container>
            </section>

            <section className="py-5 bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            {formSalvo && (
                                <Alert variant="success" transition="fade" show={formSalvo}>
                                    Dados salvos com sucesso! Redirecionando...
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit} noValidate>
                                <Form.Group as={Row}>
                                    <Col md={6}>
                                        <Form.Label>Nome Completo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="João da Silva"
                                            value={nome}
                                            isInvalid={!!erros.nome}
                                            onChange={(e) => setNome(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">{erros.nome}</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col md={6}>
                                        <Form.Label>Inscrição CRM</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="000000"
                                            value={crm}
                                            isInvalid={!!erros.crm}
                                            onChange={(e) => setCrm(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">{erros.crm}</Form.Control.Feedback>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>Data da Inscrição</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={dtInscricao}
                                            isInvalid={!!erros.dtInscricao}
                                            onChange={(e) => setDtInscricao(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">{erros.dtInscricao}</Form.Control.Feedback>
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
                                    {erros.especialidades && (
                                        <Form.Text className="text-danger">{erros.especialidades}</Form.Text>
                                    )}
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
}
