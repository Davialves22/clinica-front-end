import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link className="navbar-brand" to="/">
            Clínica Spring Security
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Administrador
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <Link className="dropdown-item" to="/especialidades">
                    Especialidades
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/u/novo/cadastro/usuario">
                    Cadastro de Usuários
                  </Link>
                  <Link className="dropdown-item" to="/u/lista">
                    Lista de Usuários
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  id="dropdown02"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Médicos
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdown02">
                  <Link className="dropdown-item" to="/medicos/dados">
                    Dados Cadastrais
                  </Link>
                  <Link className="dropdown-item" to="/u/editar/senha">
                    Editar Senha
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/agendamentos/historico/consultas"
                  >
                    Consultas Agendadas
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pacientes
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdown03">
                  <Link className="dropdown-item" to="/pacientes">
                    Cadastrar Dados
                  </Link>
                  <Link className="dropdown-item" to="/u/editar/senha">
                    Editar Senha
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/agendamentos/agendar">
                    Agendar Consulta
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/agendamentos/historico/paciente"
                  >
                    Histórico de Consultas
                  </Link>
                </div>
              </li>
            </ul>

            <div className="form-inline mt-2 mt-md-0">
              <div className="form-check mb-2 mr-sm-2">
                <Link
                  className="btn btn-outline-success my-2 my-sm-0"
                  role="button"
                  to="/login"
                >
                  Login
                </Link>
              </div>
              <div className="form-check mb-2 mr-sm-2">
                <Link
                  className="btn btn-outline-success my-2 my-sm-0"
                  role="button"
                  to="/u/novo/cadastro"
                >
                  Cadastrar-se
                </Link>
              </div>
            </div>

            <form
              action="/logout"
              method="post"
              className="form-inline mt-2 mt-md-0"
            >
              <div className="btn-group mb-2 mr-sm-2">
                <button type="button" className="btn btn-light">
                  <i className="fas fa-user"></i> <span>Davi</span>
                </button>
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></button>
                <div className="dropdown-menu">
                  <button type="submit" className="dropdown-item">
                    Sair
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </header>
  );
};