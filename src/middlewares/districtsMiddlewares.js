import axios from 'axios';

import { FETCH_DISTRICTS_LIST, saveDistricList } from 'src/actions/fetch';

const districtsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DISTRICTS_LIST:
      axios.get('http://localhost:8000/api/v1/districts')
        .then((response) => {
          // console.log(response.data.districts);
          store.dispatch(saveDistricList(response.data.districts));
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

export default districtsMiddlewares;
