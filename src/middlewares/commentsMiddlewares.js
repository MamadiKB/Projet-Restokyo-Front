import axios from 'axios';
// import jwt from 'jwt-decode';
import { ADD_COMMENT } from 'src/actions/comments';
import apiLocal from 'src/utils/api';

const commentsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const { inputCommentValue, noteValue, establishmentId } = store.getState().commentsReducer;
      const { token } = store.getState().connectReducer;
      const url = `${apiLocal}establishment/${establishmentId}/comments`;
      axios.post(
        url,
        {
          content: inputCommentValue,
          rating: noteValue,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      )
        .then(() => {
          /* console.log(response); */
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          /* console.log(error); */
        });
      break;
    }
    default:
  }
  next(action);
};

export default commentsMiddlewares;
