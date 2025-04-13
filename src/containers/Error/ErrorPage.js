import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import springsecurity from '../../assets/spring-security.png';

export function ErrorPage({ status, error, message }) {
    const navigate = useNavigate();

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
                    <div className="text-center">
                        <h1 className="h3 mb-3 font-weight-normal">
                            <i className="oi oi-warning" /> {status}
                        </h1>

                        <i className="fas fa-user-lock" style={{ fontSize: '2rem' }} />
                        <h5 className="text-danger">{error}</h5>

                        <div>
                            <span>{message}</span>
                            <br />
                            <br />
                            <Button variant="primary" onClick={() => navigate(-1)}>
                                Voltar à página anterior
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
