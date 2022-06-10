// == Import
import ResTokyologo from 'src/assets/img/mainLogo.png';

import './styles.scss';

// == Composant
const Navbar = () => (
  <div className="nav__wrapper">
    <nav className="nav">
      <img src={ResTokyologo} alt="restokyo logo" className="nav__logo" />
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#" className="nav__link">accueil
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            restaurants
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            izakaya
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            nourriture
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link nav__link__connexion">
            connexion
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link nav__link__inscription">
            inscription
          </a>
        </li>
      </ul>
      <h1 className="nav__title">Restez serein, restaurez-vous, ResTokyo</h1>
      <div className="toggler__icon">
        <div className="line__1" />
        <div className="line__2" />
        <div className="line__3" />
      </div>
    </nav>
  </div>
);

// == Export
export default Navbar;
