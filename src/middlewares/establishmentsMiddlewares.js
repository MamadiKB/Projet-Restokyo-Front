import axios from 'axios';

import { FETCH_ESTABLISHMENTS_LIST, saveEstablishmentsList } from 'src/actions/fetch';
import apiLocal from 'src/utils/api';

const establishmentsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ESTABLISHMENTS_LIST:
      axios.get(`${apiLocal}establishments`)
        .then((response) => {
          // console.log(response.data.establishmentsList);
          store.dispatch(saveEstablishmentsList(response.data.establishmentsList));
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
