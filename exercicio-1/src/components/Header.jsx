import logo from '../img/LogoPUC.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <>
        <header className='container'>
            <img className='container__logo' src={logo} alt="Logo da PUC" />
            <ul className='container__links'>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
                <li>Link4</li>
            </ul>
            <a className='container__botao' href="#">Entrar</a>
        </header>
        </>
    );
};

export default Header;