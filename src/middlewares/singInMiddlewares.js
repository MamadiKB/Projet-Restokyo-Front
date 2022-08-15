import axios from 'axios';
import { SING_IN, saveNewUser, errorSingIn } from 'src/actions/connect';
import apiLocal from 'src/utils/api';

const singInMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case SING_IN: {
      const {
        emailSingIn,
        passwordSingIn,
        usernameSingIn,
      } = store.getState().connectReducer;
      axios.post(
        // URL
        `${apiLocal}profil/ajouter`,
        // paramétres
        {
          email: emailSingIn,
          password: passwordSingIn,
          pseudo: usernameSingIn,
        },
      )
        .then((response) => {
          store.dispatch(saveNewUser(response.data));
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          store.dispatch(errorSingIn());
          // console.log(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default singInMiddlewares;
