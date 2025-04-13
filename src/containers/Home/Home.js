import React from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer/footer';
import springsecurity from '../../assets/spring-security.png';
import medicina1 from '../../assets/medicina_1.jpg';
import medicina2 from '../../assets/medicina_2.jpg';
import medicina3 from '../../assets/medicina_3.jpg';
import medicina4 from '../../assets/medicina_4.jpg';
import medicina5 from '../../assets/medicina_5.jpg';
import medicina6 from '../../assets/medicina_6.jpg';



export function Home() {

    return (
        <>
            <Header />

            <section className="layout-content">
                <main role="main">

                    <section className="jumbotron text-center">
                        <img
                            className="d-block mx-auto mb-4 mt-5 pt-3"
                            src={springsecurity}
                            alt="Spring Security"
                            width="100"
                            height="100"
                        />
                        <div className="container">
                            <h1 className="jumbotron-heading">Clínica Spring Security</h1>
                            <p className="lead text-muted">
                                Contamos com toda a infraestrutura e segurança para você e sua
                                família. Cadastre-se e agende suas consultas com os melhores médicos
                                da região.
                            </p>
                        </div>
                    </section>

                    <p style={{ textAlign: 'center' }}>Nossos Serviços:</p>

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={medicina1} alt="Medicina Esportiva" />
                                        <div className="card-body">
                                            <h5 className="card-title">Medicina Esportiva</h5>
                                            <p className="card-text">
                                                Abordagem do atleta de uma forma global, desde a fisiologia
                                                do exercício à prevenção de lesões, passando pelo controle de
                                                atletas profissionais e amadores...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={medicina2} alt="Cardiologia" />
                                        <div className="card-body">
                                            <h5 className="card-title">Cardiologia</h5>
                                            <p className="card-text">
                                                A cardiologia aborda as doenças relacionadas com o coração
                                                e sistema vascular. Em nossa clínica contamos com os melhores...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={medicina3} alt="Clínica Médica" />
                                        <div className="card-body">
                                            <h5 className="card-title">Clínica Médica</h5>
                                            <p className="card-text">
                                                Complexo preparado com uma estrutura que engloba todas as
                                                áreas não cirúrgicas, sendo subdividida em várias outras
                                                especialidades...
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={medicina4} alt="Pediatria" />
                                        <div className="card-body">
                                            <h5 className="card-title">Pediatria</h5>
                                            <p className="card-text">
                                                Nossa clínica conta com a parte da medicina que estuda e
                                                trata crianças. Possuímos quartos exclusivos para esta faixa
                                                etária com...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={medicina5} alt="Cirurgia Plástica" />
                                        <div className="card-body">
                                            <h5 className="card-title">Cirurgia Plástica</h5>
                                            <p className="card-text">
                                                Correção das deformidades, malformações ou lesões que
                                                comprometem funções dos órgãos através de cirurgia de caráter
                                                reparador...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={medicina6} alt="Ginecologia e Obstetrícia" />
                                        <div className="card-body">
                                            <h5 className="card-title">Ginecologia e obstetrícia</h5>
                                            <p className="card-text">
                                                É a especialidade médica que aborda de forma integral a
                                                mulher. Trata desde as doenças infecciosas sexuais, gestação,
                                                alterações...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            <Footer />
        </>
    );
};