import '../styles/Main.css';
import Crimison from '../img/CrimsonDesert.jpg';
import Starfield from '../img/Starfield.jpg';
import SpiderMan from '../img/SpiderMan2.jpg';

const Main = () => {
    return (
        <>
            <main>
                <section className='secao'>
                    <a href="">Section 1</a>
                    <a href="">Section 2</a>
                    <a href="">Section 3</a>
                    <a href="">Section 4</a>
                </section>

                <div className='box'>
                    <div>
                        <div className='box__item'>
                            <img src={Crimison} alt="Imagem do Crimison Desert" />
                            <p>
                                Crimson Desert está sendo desenvolvido a partir da Blackspace Engine, tecnologia 
                                proprietária de nova geração. Segundo a desenvolvedora, ela quer criar um ambiente 
                                de mundo aberto bastante envolvente e que vai entregar uma experiência de jogo realmente 
                                única, cujos detalhes devem continuar sendo divulgados em detalhes em um futuro próximo.
                                O título ainda não tem uma data de lançamento definida, mas tudo indica que ele só vai chegar a partir de 2024.
                            </p>
                        </div>
                        <div className='box__item'>
                            <img src={Starfield} alt="Imagem do Starfield" />
                            <p>
                                Starfield é o novo game da Bethesda apresentado em detalhes durante o 
                                evento Starfield Direct, com transmissão online no Xbox Showcase. Seu 
                                trailer mostrou tudo que os jogadores podem esperar dentro do título, 
                                como exploração espacial, personalização, história densa, além de combates
                                em primeira pessoa.
                                Starfield será lançado no dia 6 de setembro, para Xbox Series S, Xbox Series X e 
                                PC com Windows 10 ou 11 (via Steam e loja do Xbox).
                            </p>
                        </div>
                        <div className='box__item'>
                            <img src={SpiderMan} alt="Imagem do SpiderMan 2" />
                            <p>
                                No novo jogo da Insomniac Games, Peter Parker e Miles Morales 
                                terão que enfrentar vilões como Kraven, Venom e o Senhor Negativo 
                                com mais ação e novas habilidades. Marvel's Spider-Man 2 será lançado 
                                em 20 de outubro para PlayStation 5 (PS5). Por ora, não há previsão para 
                                o console temático no Brasil.
                            </p>
                        </div>
                    </div>

                    <section className='box__sidebar'>
                        <a href="">Section 1</a>
                        <a href="">Section 2</a>
                        <a href="">Section 3</a>
                        <a href="">Section 4</a>
                        <a href="">Section 5</a>
                        <a href="">Section 6</a>
                        <a href="">Section 7</a>
                        <a href="">Section 8</a>
                        <a href="">Section 9</a>
                        <a href="">Section 10</a>
                        <a href="">Section 11</a>
                        <a href="">Section 12</a>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Main;