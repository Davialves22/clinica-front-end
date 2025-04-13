import React from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer/footer';

export function Home() {
    // Aqui você pode armazenar os caminhos das imagens e o texto em variáveis ou estado, caso precise de manipulação dinâmica.
    const images = {
        springSecurity: '/image/spring-security.png',
        medicina1: '/image/medicina_1.jpg',
        medicina2: '/image/medicina_2.jpg',
        medicina3: '/image/medicina_3.jpg',
        medicina4: '/image/medicina_4.jpg',
        medicina5: '/image/medicina_5.jpg',
        medicina6: '/image/medicina_6.jpg',
    };

    return (
        <>
            <Header />

            <section className="layout-content">
                <main role="main">
                    {/* Seção Jumbotron */}
                    <section className="jumbotron text-center">
                        <img
                            className="d-block mx-auto mb-4"
                            src={images.springSecurity}
                            alt="Spring Security"
                            width="72"
                            height="72"
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

                    {/* Seção de Cards */}
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={images.medicina1} alt="Medicina Esportiva" />
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
                                        <img className="card-img-top" src={images.medicina2} alt="Cardiologia" />
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
                                        <img className="card-img-top" src={images.medicina3} alt="Clínica Médica" />
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

                                {/* Outras seções de cards */}
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={images.medicina4} alt="Pediatria" />
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
                                        <img className="card-img-top" src={images.medicina5} alt="Cirurgia Plástica" />
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
                                        <img className="card-img-top" src={images.medicina6} alt="Ginecologia e Obstetrícia" />
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

            <Footer/>
        </>
    );
};