// == Import
import { useDispatch, useSelector } from 'react-redux';
import { toggleConnectModal } from 'src/actions/app';

import Field from 'src/components/Field';

import './styles.scss';

// == Composant
const ConnectModal = () => {
  const dispatch = useDispatch();

  const ConnectToggle = useSelector((state) => state.headerReducer.ConnectIsOpen);
  let cssConnect = 'conect--off';
  if (ConnectToggle) {
    cssConnect = 'conect';
  }

  return (
    <div className={cssConnect}>
      <div className="form__wrapper">
        <button
          className="conect__close"
          type="button"
          onClick={() => {
            // console.log(event);
            const action = toggleConnectModal();
            dispatch(action);
          }}
        >
          X
        </button>
        <h4 className="conect__h4">Connexion</h4>
        <form className="conect__form">

          <div className="conect__div">
            <Field
              identifier="email"
              placeholder="E-mail"
              label="E-mail"
              changeField={(identifier, newValue) => {
                console.log(identifier, newValue);
              }}
            />
          </div>

          <div className="conect__div">
            <Field
              identifier="password"
              placeholder="Mot de passe"
              label="Mot de passe"
              type="password"
              changeField={(identifier, newValue) => {
                console.log(identifier, newValue);
              }}
            />
          </div>

          <div className="conect__div">
            <button className="conect__button" type="submit" value="Connexion">Connexion</button>
          </div>
        </form>
      </div>
      <div className="form__wrapper">
        <h4 className="conect__h4">Inscription</h4>
        <form className="singin__form">

          <div className="conect__div">
            <Field
              identifier="userName"
              placeholder="Nom d'utilisateur"
              label="Nom d'utilisateur"
              changeField={(identifier, newValue) => {
                console.log(identifier, newValue);
              }}
            />
          </div>

          <div className="conect__div">
            <Field
              identifier="emailSingin"
              placeholder="E-mail"
              label="E-mail"
              changeField={(identifier, newValue) => {
                console.log(identifier, newValue);
              }}
            />
          </div>

          <div className="conect__div">
            <Field
              identifier="passwordSingin"
              placeholder="Mot de passe"
              label="Mot de passe"
              type="password"
              changeField={(identifier, newValue) => {
                console.log(identifier, newValue);
              }}
            />
          </div>

          <div className="singin__div">
            <button className="singin__button" type="submit" value="singin">Connexion</button>
          </div>
        </form>
        <p className="conect__p">*: Champs obligatoires</p>
      </div>
    </div>
  );
};

// == Export
export default ConnectModal;
