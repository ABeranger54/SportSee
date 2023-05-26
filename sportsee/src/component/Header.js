import '../style/Header.css';
import logo from '../media/logo.png'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
        <img src={logo} alt="Logo SportSee" />
        <nav>
            <ul>
                <li><Link to="#">Accueil</Link></li>
                <li><Link to="#">Profil</Link></li>
                <li><Link to="#">Réglage</Link></li>
                <li><Link to="#">Communauté</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
