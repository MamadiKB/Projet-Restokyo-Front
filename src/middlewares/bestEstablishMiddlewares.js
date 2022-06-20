import axios from 'axios';

import { FETCH_BEST_ESTABLISHMENTS_LIST, saveBestEstablishmentsList } from '../actions/fetch';

const establishmentsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BEST_ESTABLISHMENTS_LIST:
      axios.get('http://mickael-zimmermann.vpnuser.lan/A/projet-restokyo-back/public/api/v1/establishments/best')
        .then((response) => {
          console.log(response.data.establishmentsList);
          store.dispatch(saveBestEstablishmentsList(response.data.establishmentsList));
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
