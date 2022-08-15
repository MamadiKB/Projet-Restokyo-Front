// == Import
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleConnectModal,
  changeFielfConnect,
  chanheFieldSingIn,
  logIn,
  singIn,
} from 'src/actions/connect';

import Field from 'src/components/Field';

import './styles.scss';

// == Composant
const ConnectModal = () => {
  const dispatch = useDispatch();

  const emailValue = useSelector((state) => state.connectReducer.email);
  const passwordValue = useSelector((state) => state.connectReducer.password);
  const emailSingInValue = useSelector((state) => state.connectReducer.emailSingIn);
  const passwordSingInValue = useSelector((state) => state.connectReducer.passwordSingIn);
  const usernameSingInValue = useSelector((state) => state.connectReducer.usernameSingIn);
  const connectToggle = useSelector((state) => state.connectReducer.connectIsOpen);
  const errorLogIn = useSelector((state) => state.connectReducer.errorLogIn);
  const errorSingIn = useSelector((state) => state.connectReducer.errorSingIn);

  let cssConnect = 'conect--off';
  if (connectToggle) {
    cssConnect = 'conect';
  }

  let errorConnect = '';
  if (errorLogIn) {
    errorConnect = <span className="connect__error">E-mail ou mot de passe incorrect</span>;
  }

  let errorlog = '';
  if (errorSingIn) {
    errorlog = <span className="connect__error">E-mail ou mot de passe incorrect</span>;
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
        {errorConnect}
        <form className="conect__form">
          <div className="conect__div">
            <Field
              identifier="email"
              placeholder="E-mail"
              label="E-mail*"
              changeField={(identifier, newValue) => {
                dispatch(changeFielfConnect(identifier, newValue));
              }}
              value={emailValue}
            />
          </div>
          <div className="conect__div">
            <Field
              identifier="password"
              placeholder="Mot de passe"
              label="Mot de passe*"
              type="password"
              changeField={(identifier, newValue) => {
                dispatch(changeFielfConnect(identifier, newValue));
              }}
              value={passwordValue}
            />
          </div>
          <div className="conect__div">
            <button
              className="conect__button"
              type="button"
              value="Connexion"
              onClick={() => {
                dispatch(logIn());
              }}
            >
              Connexion
            </button>
          </div>
        </form>
        <p className="conect__p">*: Champs obligatoires</p>
      </div>
      <div className="form__wrapper">
        <h4 className="conect__h4">Inscription</h4>
        {errorlog}
        <form className="singin__form">

          <div className="conect__div">
            <Field
              identifier="usernameSingIn"
              placeholder="Nom d'utilisateur"
              label="Nom d'utilisateur*"
              changeField={(identifier, newValue) => {
                // console.log(identifier, newValue);
                dispatch(chanheFieldSingIn(identifier, newValue));
              }}
              value={usernameSingInValue}
            />
          </div>
          <div className="conect__div">
            <Field
              identifier="emailSingIn"
              placeholder="E-mail"
              label="E-mail*"
              changeField={(identifier, newValue) => {
                // console.log(identifier, newValue);
                dispatch(chanheFieldSingIn(identifier, newValue));
              }}
              value={emailSingInValue}
            />
          </div>
          <div className="conect__div">
            <Field
              identifier="passwordSingIn"
              placeholder="Mot de passe"
              label="Mot de passe*"
              type="password"
              changeField={(identifier, newValue) => {
                // console.log(identifier, newValue);
                dispatch(chanheFieldSingIn(identifier, newValue));
              }}
              value={passwordSingInValue}
            />
          </div>
          <div className="singin__div">
            <button
              className="singin__button"
              type="submit"
              value="singin"
              onClick={(e) => {
                e.preventDefault();
                dispatch(singIn());
              }}
            >
              Inscription
            </button>
          </div>
        </form>
        <p className="conect__p">*: Champs obligatoires</p>
      </div>
    </div>
  );
};

// == Export
export default ConnectModal;
