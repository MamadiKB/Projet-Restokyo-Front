import axios from 'axios';

import { FETCH_TAGS_LIST, saveTagsList } from 'src/actions/fetch';
import apiLocal from 'src/utils/api';

const tagsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TAGS_LIST:
      axios.get(`${apiLocal}tags`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveTagsList(response.data));
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

export default tagsMiddlewares;
