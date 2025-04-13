import React, { useState } from 'react';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    InputGroup,
} from 'react-bootstrap';
import springsecurity from '../../assets/spring-security.png';

export function CadastroUsuario() {
    const [form, setForm] = useState({
        email: '',
        senha: '',
        perfis: [],
        ativo: false,
        id: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked, multiple, options } = e.target;

        if (type === 'checkbox') {
            setForm({ ...form, [name]: checked });
        } else if (multiple) {
            const values = Array.from(options).filter(o => o.selected).map(o => o.value);
            setForm({ ...form, [name]: values });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer um fetch/axios POST com os dados do form
        console.log('Enviando dados:', form);
    };

    return (
        <main role="main">
            <section className="jumbotron text-center">
                <img
                    className="d-block mx-auto mb-4"
                    src={springsecurity}
                    alt="Spring Security"
                    width="72"
                    height="72"
                />
                <Container>
                    <h1 className="jumbotron-heading">Clínica Spring Security</h1>
                    <p className="lead text-muted">Médicos e Especialistas</p>
                </Container>
            </section>

            <section className="album py-5 bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Form onSubmit={handleSubmit} noValidate className="was-validated">

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>@</InputGroup.Text>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">Email é requerido.</div>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="senha">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Insira sua senha de acesso"
                                        maxLength={6}
                                        name="senha"
                                        value={form.senha}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">Senha é requerida.</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="perfis">
                                    <Form.Label>Perfil</Form.Label>
                                    <Form.Select
                                        multiple
                                        required
                                        name="perfis"
                                        value={form.perfis}
                                        onChange={handleChange}
                                        size={4}
                                    >
                                        <option value="1">Administrador</option>
                                        <option value="2">Médico</option>
                                        <option value="3">Paciente</option>
                                    </Form.Select>
                                    <div className="invalid-feedback">Pelo menos um perfil é requerido.</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="ativo">
                                    <Form.Check
                                        type="switch"
                                        label="Cadastro Ativo"
                                        name="ativo"
                                        checked={form.ativo}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Control type="hidden" name="id" value={form.id} />

                                <Row>
                                    <Col sm={10}>
                                        <Button type="submit" variant="primary" title="Salvar">
                                            <i className="fas fa-save"></i> Salvar
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}
