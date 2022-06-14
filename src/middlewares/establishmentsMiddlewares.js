import axios from 'axios';

import { FETCH_ESTABLISHMENTS_LIST, saveEstablishments } from '../actions/fetch';

const establishmentsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ESTABLISHMENTS_LIST:
      axios.get('http://kaba-mamadi.vpnuser.lan/Projet%20Restokyo%20/projet-restokyo-back/public/api/v1/establishments')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveEstablishments(response.data.establishmentsList));
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
