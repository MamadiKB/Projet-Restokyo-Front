import axios from 'axios';
// import jwt from 'jwt-decode';
import { LOG_IN, saveUserToken } from 'src/actions/connect';

const connectMiddlewares = (store) => (next) => (action) => {
  // console.log('action =', action);

  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().connectReducer;
      axios.post(
        'http://localhost:8000/api/v1/login_check',
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          // console.log(response.data.user);
          // const { token } = response.data;
          // const user = jwt(token);
          // console.log(user);
          store.dispatch(saveUserToken(response.data.token, response.data.user));
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

export default connectMiddlewares;
