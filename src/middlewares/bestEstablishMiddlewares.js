// == Imports
import axios from 'axios';
// -- actions
import { FETCH_BEST_ESTABLISHMENTS_LIST, saveBestEstablishmentsList } from 'src/actions/fetch';
import apiLocal from 'src/utils/api';

const establishmentsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BEST_ESTABLISHMENTS_LIST:
      axios.get(`${apiLocal}establishments/best`)
        .then((response) => {
          store.dispatch(saveBestEstablishmentsList(response.data.establishmentsList));
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // console.log(error);
        });
      break;

    default:
  }

  next(action);
};

export default establishmentsMiddlewares;
