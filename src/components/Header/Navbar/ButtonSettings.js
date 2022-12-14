// == Import
// -- tool
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleConnectModal, logOut } from 'src/actions/connect';
// -- styles
import './styles.scss';

// == Composant
const ButtonSettings = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.connectReducer.user);
  const isLogged = useSelector((state) => state.connectReducer.isLogged);
  const roles = useSelector((state) => state.connectReducer.user.roles);

  if (isLogged && roles[0] === 'ROLE_ADMIN') {
    return (
      <>
        <li className="nav__item">
          <a
            href="http://mickaelzimmermann-server.eddi.cloud/projet-restokyo-back/public/login?controller_name=BackController"
            target="_blank"
            className="nav__link__settings__profil"
            rel="noreferrer"
          >
            Administration
          </a>
        </li>
        <li className="nav__item">
          <Link
            to="/"
            className="nav__link__settings__logout"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Déconnexion
          </Link>
        </li>
      </>
    );
  }

  if (isLogged && roles[0] === 'ROLE_USER') {
    return (
      <>
        <li className="nav__item">
          <Link
            to={`mon-compte/${userInfo.pseudo}`}
            href="#"
            className="nav__link__settings__profil"
          >
            Mon compte
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/"
            className="nav__link__settings__logout"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Déconnexion
          </Link>
        </li>
      </>
    );
  }
  return (
    <li className="nav__item">
      <button
        type="button"
        className="nav__link nav__link__connexion"
        onClick={() => {
          dispatch(toggleConnectModal());
        }}
      >
        Connexion / Inscription
      </button>
    </li>
  );
};

// == Export
export default ButtonSettings;
