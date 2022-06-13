import axios from 'axios';

import { FETCH_ESTABLISHMENTS, saveEstablishments } from '../actions/fetch';

const establishmentsMiddlewares = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_ESTABLISHMENTS:
      axios.get('http://mickael-zimmermann.vpnuser.lan/A/projet-restokyo-back/public/api/v1/establishments')
        .then((response) => {
          console.log(response.data);

          store.dispatch(saveEstablishments(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  next(action);
};

export default establishmentsMiddlewares;
