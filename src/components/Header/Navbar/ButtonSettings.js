// == Import

import { useSelector, useDispatch } from 'react-redux';
import { toggleConnectModal, logOut } from 'src/actions/connect';
import './styles.scss';

// == Composant
const ButtonSettings = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.connectReducer.isLogged);
  if (isLogged) {
    return (
      <>
        <li className="nav__item">
          <a
            href="#"
            className="nav__link__settings__profil"
          >
            Mon compte
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#"
            className="nav__link__settings__logout"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Déconnexion
          </a>
        </li>
      </>
    );
  }
  return (
    <li className="nav__item">
      <a
        href="#"
        className="nav__link nav__link__connexion"
        onClick={() => {
          dispatch(toggleConnectModal());
        }}
      >
        Connexion / Inscription
      </a>
    </li>
  );
};

// == Export
export default ButtonSettings;
