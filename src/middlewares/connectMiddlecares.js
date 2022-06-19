import axios from 'axios';
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
          // console.log(response.data);
          store.dispatch(saveUserToken(response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default connectMiddlewares;
