import axios from 'axios';
// import jwt from 'jwt-decode';
import { LOG_IN, saveUserToken, errorLogIn } from 'src/actions/connect';
import apiLocal from 'src/utils/api';

const connectMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().connectReducer;
      axios.post(
        `${apiLocal}login_check`,
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          // console.log(response);
          // const { token } = response.data;
          // const user = jwt(token);
          // console.log(user);
          store.dispatch(saveUserToken(response.data.token, response.data.user));
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          store.dispatch(errorLogIn());
        });
      break;
    }
    default:
  }
  next(action);
};

export default connectMiddlewares;
