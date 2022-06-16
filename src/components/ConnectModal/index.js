// == Import
import { useDispatch, useSelector } from 'react-redux';
import { toggleConnectModal } from 'src/actions/app';

import './styles.scss';

// == Composant
const ConnectModal = () => {
  const dispatch = useDispatch();

  const ConnectToggle = useSelector((state) => state.headerReducer.ConnectIsOpen);

  let cssConnect = 'conect--off';
  if (ConnectToggle) {
    cssConnect = 'conect';
  }
  console.log(cssConnect);
  return (
    <div className={cssConnect}>
      <button
        className="conect__close"
        type="button"
        onClick={(event) => {
          // console.log(event);
          const action = toggleConnectModal();
          dispatch(action);
        }}
      >
        X
      </button>
      <h4 className="conect__h4">Connexion</h4>
      <form action="" method="POST" className="conect__form">

        <div className="conect__div">
          <label className="conect__label" htmlFor="email">Email* </label>
          <input className="conect__input" type="text" id="email" name="email" required />
        </div>

        <div className="conect__div">
          <label className="conect__label" htmlFor="password">Mot de passe* </label>
          <input className="conect__input" type="password" id="password" name="password" required />
        </div>

        <div className="conect__div">
          <button className="conect__button" type="submit" value="Connexion">Connexion</button>
        </div>
      </form>
      <p className="conect__p">*: Champs obligatoires</p>
    </div>
  );
};

// == Export
export default ConnectModal;
