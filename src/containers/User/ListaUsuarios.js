import React, { useEffect, useState } from 'react';
import {
    Container,
    Table,
    Row,
    Col
} from 'react-bootstrap';
import springsecurity from '../../assets/spring-security.png';

export function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    // Simulando dados (substituir por fetch em API real)
    useEffect(() => {
        setUsuarios([
            {
                id: 1,
                email: 'admin@ifpe.edu.br',
                ativo: true,
                perfis: ['Administrador'],
                credenciais: 'Atualizar senha',
                dadosPessoais: 'Ver dados'
            },
            {
                id: 2,
                email: 'medico@ifpe.edu.br',
                ativo: false,
                perfis: ['Médico'],
                credenciais: 'Atualizar senha',
                dadosPessoais: 'Ver dados'
            }
            // Adicione mais usuários conforme necessário
        ]);
    }, []);

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
                    <Row>
                        <Col md={12}>
                            <h2>Usuários Cadastrados</h2>

                            <Table
                                striped
                                bordered
                                hover
                                size="sm"
                                responsive
                                className="mt-3"
                            >
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Nome de Usuário (email)</th>
                                        <th>Cadastro Ativo</th>
                                        <th>Perfis</th>
                                        <th>Credenciais</th>
                                        <th>Dados Pessoais</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario, index) => (
                                        <tr key={usuario.id}>
                                            <td>{index + 1}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.ativo ? 'Sim' : 'Não'}</td>
                                            <td>{usuario.perfis.join(', ')}</td>
                                            <td>{usuario.credenciais}</td>
                                            <td>{usuario.dadosPessoais}</td>
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
