// == Import
import { useDispatch, useSelector } from 'react-redux';
import { toggelNavMenu } from 'src/actions/app';
import { Link } from 'react-router-dom';
import ResTokyologo from 'src/assets/img/mainLogo.png';

import './styles.scss';

// == Composant
const Navbar = () => {
  const toggelNav = useSelector((state) => state.headerReducer.navIsOpen);
  let cssNav = 'nav nav--collapse';
  let cssNavMenu = 'nav__menu nav__menu--collapse';
  if (toggelNav) {
    cssNav = 'nav';
    cssNavMenu = 'nav__menu';
  }
  else {
    cssNav = 'nav nav--collapse';
    cssNavMenu = 'nav__menu nav__menu--collapse';
  }

  const dispatch = useDispatch();

  return (
    <div className="nav__wrapper">
      <nav className={cssNav}>
        <img src={ResTokyologo} alt="restokyo logo" className="nav__logo" />
        <ul className={cssNavMenu}>
          <li className="nav__item">
            <Link
              to="/"
              href="#"
              className="nav__link"
            >
              accueil
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="restaurants"
              href="#"
              className="nav__link"
            >
              Restaurants
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="izakaya"
              href="#"
              className="nav__link"
            >
              Izakaya
            </Link>
          </li>
          {/*         <li className="nav__item">
            <a href="#" className="nav__link">
              Spécialitées
            </a>
          </li> */}
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
        <div
          className="toggler__icon"
          // eslint-disable-next-line no-unused-vars
          onClick={(event) => {
            const action = toggelNavMenu();
            dispatch(action);
          }}
        >
          <div className="line__1" />
          <div className="line__2" />
          <div className="line__3" />
        </div>
      </nav>
    </div>
  );
};

// == Export
export default Navbar;
