import axios from 'axios';
// import jwt from 'jwt-decode';
import { SING_IN, saveNewUser } from 'src/actions/connect';

const singInMiddlewares = (store) => (next) => (action) => {
  // console.log('action =', action);

  switch (action.type) {
    case SING_IN: {
      const { emailSingIn, passwordSingIn, usernameSingIn } = store.getState().connectReducer;
      axios.post(
        'http://localhost:8000/api/v1/profil/ajouter',
        {
          email: emailSingIn,
          password: passwordSingIn,
          pseudo: usernameSingIn,
        },
      )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveNewUser(response.data));
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // console.log(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default singInMiddlewares;
