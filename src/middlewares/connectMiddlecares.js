import axios from 'axios';
import { LOG_IN } from 'src/actions/connect';

const connectMiddlewares = (store) => (next) => (action) => {
  // console.log('action =', action);

  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().connectReducer;
      axios.post(
        'http://localhost:3001/login',
        {
          email: email,
          password: password,
        },
      )
        .then((response) => {
          console.log(response);
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
// bouclierman@herocorp.io / jennifer
