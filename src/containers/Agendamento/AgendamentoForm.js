import React, { useState, useEffect } from 'react';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Card
} from 'react-bootstrap';
import springsecurity from '../../assets/spring-security.png';

export function AgendamentoForm() {
    const [especialidade, setEspecialidade] = useState('');
    const [medicos, setMedicos] = useState([]);
    const [medicoSelecionado, setMedicoSelecionado] = useState('');
    const [dataConsulta, setDataConsulta] = useState('');
    const [horarios, setHorarios] = useState([]);
    const [horarioSelecionado, setHorarioSelecionado] = useState('');
    const [id, setId] = useState(null); // simula o campo hidden

    // Simula carregamento de médicos (pode vir de uma API)
    useEffect(() => {
        if (especialidade) {
            setMedicos([
                { id: 1, nome: 'Dra. Ana Clara' },
                { id: 2, nome: 'Dr. Pedro Henrique' }
            ]);
        } else {
            setMedicos([]);
        }
    }, [especialidade]);

    // Simula horários disponíveis
    useEffect(() => {
        if (dataConsulta) {
            setHorarios([
                { id: 1, horaMinuto: '08:00' },
                { id: 2, horaMinuto: '09:30' },
                { id: 3, horaMinuto: '14:00' },
            ]);
        } else {
            setHorarios([]);
        }
    }, [dataConsulta]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const agendamento = {
            id,
            especialidade,
            medicoId: medicoSelecionado,
            dataConsulta,
            horarioId: horarioSelecionado
        };

        console.log('Dados do agendamento:', agendamento);
        // Aqui você pode fazer um fetch/axios POST para salvar
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
                <Container className="d-flex justify-content-center align-items-center">
                    <Row>
                        <Col md={12}>
                            <Form onSubmit={handleSubmit} noValidate className="was-validated">

                                {/* Especialidade */}
                                <Form.Group className="mb-3">
                                    <Form.Text muted>
                                        Selecione a especialidade médica referente à sua consulta.
                                    </Form.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Pediatria"
                                        required
                                        value={especialidade}
                                        onChange={(e) => setEspecialidade(e.target.value)}
                                    />
                                    <div className="invalid-feedback">
                                        Especialidade é obrigatória.
                                    </div>
                                </Form.Group>

                                {/* Médicos */}
                                <Form.Group className="mb-3">
                                    <Card>
                                        <Card.Header>Indique o médico desejado</Card.Header>
                                        <Card.Body>
                                            {medicos.length > 0 ? (
                                                medicos.map((m) => (
                                                    <Form.Check
                                                        key={m.id}
                                                        type="radio"
                                                        name="medico"
                                                        label={m.nome}
                                                        value={m.id}
                                                        checked={medicoSelecionado === m.id.toString()}
                                                        onChange={(e) => setMedicoSelecionado(e.target.value)}
                                                        required
                                                    />
                                                ))
                                            ) : (
                                                <Form.Text muted>Escolha uma especialidade para ver médicos.</Form.Text>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Form.Group>

                                {/* Data da consulta */}
                                <Form.Group className="mb-3">
                                    <Form.Text muted>
                                        Selecione a data da consulta
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        value={dataConsulta}
                                        onChange={(e) => setDataConsulta(e.target.value)}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Data é obrigatória.
                                    </div>
                                </Form.Group>

                                {/* Horários disponíveis */}
                                <Form.Group className="mb-3">
                                    <Form.Text muted>
                                        Horários disponíveis para a consulta
                                    </Form.Text>
                                    <Form.Select
                                        value={horarioSelecionado}
                                        onChange={(e) => setHorarioSelecionado(e.target.value)}
                                        required
                                        size={5}
                                    >
                                        <option value="">Selecione um horário</option>
                                        {horarios.map((h) => (
                                            <option key={h.id} value={h.id}>
                                                {h.horaMinuto}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <div className="invalid-feedback">Horário é obrigatório.</div>
                                </Form.Group>

                                {/* Botão de envio */}
                                <Button type="submit" variant="primary" title="Salvar">
                                    <i className="fas fa-save"></i> Salvar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}
