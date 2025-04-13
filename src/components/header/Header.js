import React from 'react';
import { Navbar, Nav, NavDropdown, Container, ButtonGroup, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Clínica Spring Security
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="me-auto">
              <NavDropdown title="Administrador" id="dropdown01">
                <NavDropdown.Item as={Link} to="/especialidades">Especialidades</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pacientecadastro">Cadastro de Usuários</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/u/lista">Lista de Usuários</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Médicos" id="dropdown02">
                <NavDropdown.Item as={Link} to="/cadastro">Dados Cadastrais</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/u/editar/senha">Editar Senha</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/consultas">Consultas Agendadas</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Pacientes" id="dropdown03">
                <NavDropdown.Item as={Link} to="/pacientecadastro">Cadastrar Dados</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/u/editar/senha">Editar Senha</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/agendamentos/agendar">Agendar Consulta</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/agendamentos/historico/paciente">Histórico de Consultas</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="align-items-center">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/pacientecadastro">Cadastrar-se</Nav.Link>

              {/* ✅ SEU BOTÃO COM DROPDOWN */}
              <Dropdown as={ButtonGroup} className="mb-2 ms-3">
                <Button variant="light">
                  <i className="fas fa-user"></i> <span>Davi</span>
                </Button>

                <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <form action="/logout" method="post">
                    <button type="submit" className="dropdown-item">Sair</button>
                  </form>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
