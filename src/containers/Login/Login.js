import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import springsecurity from '../../assets/spring-security.png';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            credentials: 'include',
            body: new URLSearchParams({ username: email, password }),
        });

        if (response.ok) {
            setAlerta({
                tipo: 'sucesso',
                titulo: 'Login realizado com sucesso',
                texto: 'Redirecionando...',
                subtexto: 'Acesso permitido ao sistema.',
            });
            setTimeout(() => navigate('/'), 1000);
        } else {
            setAlerta({
                tipo: 'erro',
                titulo: 'Credenciais inválidas',
                texto: 'Login ou senha incorretos.',
                subtexto: 'Acesso negado.',
            });
        }
    };

    return (
        <Container className="mt-5 pt-5" style={{ maxWidth: '400px' }}>
            <div className="text-center mb-4">
                <img
                    className="mb-4"
                    src = {springsecurity}
                    alt="logo"
                    width="72"
                    height="72"
                />
                <h1 className="h3 mb-3 font-weight-normal">Clínica Spring Security</h1>
                <p className="font-weight-lighter">Seja bem-vindo.</p>
                <p className="text-muted">Realize seu login para continuar</p>

                {alerta && (
                    <Alert variant={alerta.tipo === 'erro' ? 'danger' : 'success'}>
                        <Alert.Heading>{alerta.titulo}</Alert.Heading>
                        <p>{alerta.texto}</p>
                        <hr />
                        <small>{alerta.subtexto}</small>
                    </Alert>
                )}
            </div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="inputEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Use seu email cadastrado como login.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Digite sua senha.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Lembrar-me" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Entrar
                </Button>
            </Form>

            <hr />

            <Nav className="flex-column text-center">
                <Nav.Link href="/cadastro">
                    <i className="far fa-arrow-alt-circle-right"></i> Novo cadastro
                </Nav.Link>
                <Nav.Link href="/u/p/redefinir/senha">
                    <i className="fas fa-key"></i> Recuperar senha
                </Nav.Link>
                <Nav.Link href="/">
                    <i className="fas fa-home"></i> Home
                </Nav.Link>
            </Nav>
        </Container>
    );
}
