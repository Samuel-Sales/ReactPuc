import logo from '../img/LogoPUC.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <>
        <header className='container'>
            <img className='container__logo' src={logo} alt="Logo da PUC" />
            <ul className='container__links'>
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
            </ul>
            <a className='container__botao' href="#">Entrar</a>
        </header>
        </>
    );
};

export default Header;