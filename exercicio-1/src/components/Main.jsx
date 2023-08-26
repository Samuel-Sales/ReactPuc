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
                        <h2>Notícias</h2>
                        <a href="https://www.thewitcher.com/us/pt-br/" target="_blank">The Witcher 3</a>
                        <a href="https://www.rocketleague.com/" target="_blank">Rocket League</a>
                        <a href="https://blog.counter-strike.net/" target="_blank">CS:GO</a>
                        <a href="https://www.ea.com/pt-br/games/ea-sports-fc/fc-24" target="_blank">EA FC 24</a>
                        <a href="https://www.nomanssky.com/" target="_blank">No man's Sky</a>
                        <a href="https://baldursgate3.game/" target="_blank">Baldur's Gate 3</a>
                        <a href="https://diablo4.blizzard.com/en-us/" target="_blank">Diablo IV</a>
                        <a href="https://nba.2k.com/2k23/" target="_blank">NBA 2K23</a>
                        <a href="https://worldofwarcraft.blizzard.com/en-us/" target="_blank">WoW</a>
                        <a href="https://www.dota2.com/home" target="_blank">Dota 2</a>
                        <a href="https://playvalorant.com/pt-br/?" target="_blank">Valorant</a>
                        <a href="https://www.cyberpunk.net/br/en/" target="_blank">CyberPunk 2077</a>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Main;