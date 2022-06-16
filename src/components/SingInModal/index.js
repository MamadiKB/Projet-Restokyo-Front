// == Import
import { useDispatch, useSelector } from 'react-redux';
import { toggleConnectModal } from 'src/actions/app';

import './styles.scss';

// == Composant
const SingIntModal = () => {
  const dispatch = useDispatch();

  const ConnectToggle = useSelector((state) => state.headerReducer.ConnectIsOpen);

  let cssConnect = 'Singin--off';
  if (ConnectToggle) {
    cssConnect = 'Singin';
  }
  console.log(cssConnect);
  return (
    <div className={cssConnect}>
      <button
        className="singin__close"
        type="button"
        onClick={(event) => {
          // console.log(event);
          const action = toggleConnectModal();
          dispatch(action);
        }}
      >
        X
      </button>
      <h4 className="singin__h4">Connexion</h4>
      <form className="singin__form">

        <div className="conect__div">
          <label className="singin__label" htmlFor="nom-utilisateur">Nom d'utilisateur* </label>
          <input className="singin__input" type="password" id="password" name="password" required />
        </div>

        <div className="conect__div">
          <label className="singin__label" htmlFor="email">Email* </label>
          <input className="singin__input" type="text" id="email" name="email" required />
        </div>

        <div className="conect__div">
          <label className="singin__label" htmlFor="password">Mot de passe* </label>
          <input className="singin__input" type="password" id="password" name="password" required />
        </div>

        <div className="singin__div">
          <button className="singin__button" type="submit" value="singin">Connexion</button>
        </div>
      </form>
      <p className="singin__p">*: Champs obligatoires</p>
    </div>
  );
};

// == Export
export default SingIntModal;
