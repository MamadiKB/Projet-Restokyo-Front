import axios from 'axios';

import { FETCH_DISTRICTS_LIST, saveDistricList } from '../actions/fetch';

const districtsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DISTRICTS_LIST:
      axios.get('http://kaba-mamadi.vpnuser.lan/Projet%20Restokyo%20/projet-restokyo-back/public/api/v1/districts')
        .then((response) => {
          // console.log(response.data.districts);
          store.dispatch(saveDistricList(response.data.districts));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  next(action);
};

export default districtsMiddlewares;
