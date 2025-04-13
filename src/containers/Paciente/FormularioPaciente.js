import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoImage from '../../assets/spring-security.png';

export function FormularioPaciente() {
    const [paciente, setPaciente] = useState({
        nome: '',
        dtNascimento: '',
        email: '',
        senha: '',
        id: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setPaciente({
            ...paciente,
            [id]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading('⌛ Enviando dados...');

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // simulação

            toast.update(toastId, {
                render: '✅ Dados salvos com sucesso!',
                type: 'success',
                isLoading: false,
                autoClose: 2000,
                transition: Slide,
                theme: 'colored',
            });

            setTimeout(() => {
                navigate('/'); 
            }, 2200); 
        } catch (error) {
            toast.update(toastId, {
                render: '❌ Erro ao salvar os dados',
                type: 'error',
                isLoading: false,
                autoClose: 3000,
                transition: Slide,
                theme: 'colored',
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <main role="main">
                <section className="text-center">
                    <img
                        className="d-block mx-auto pt-1"
                        src={LogoImage}
                        alt="Logo"
                        width="72"
                        height="72"
                    />
                    <Container>
                        <h1 className="jumbotron-heading">Clínica Spring Security</h1>
                        <p className="lead text-muted">Cadastro de Pacientes</p>
                    </Container>
                </section>

                <section className="py-5 bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <Form onSubmit={handleSubmit} className="was-validated">
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="nome">Nome Completo</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                id="nome"
                                                placeholder="Insira seu nome completo"
                                                value={paciente.nome}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Nome é requerido.</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="dtNascimento">Data de Nascimento</Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="dtNascimento"
                                            value={paciente.dtNascimento}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Data de nascimento é requerida.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>@</InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                                value={paciente.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Email é requerido.</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="senha">Senha</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="senha"
                                            placeholder="Insira sua senha de acesso"
                                            value={paciente.senha}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Senha é requerida para confirmar a operação.</Form.Control.Feedback>
                                    </Form.Group>

                                    <input type="hidden" id="id" value={paciente.id} />

                                    <Button type="submit" variant="primary" title="Salvar">
                                        <FaSave /> Salvar
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    );
}
