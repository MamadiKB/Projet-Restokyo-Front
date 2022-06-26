// == action imports
import { CHANGE_COMMENT_VALUE, CHANGE_NOTE_VALUE, GET_ID } from 'src/actions/comments';

const initialState = {
  // -- value of input comment
  inputCommentValue: '',

  noteValue: '',

  establishmentId: '',
};

const commentReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_COMMENT_VALUE:
      return {
        ...state,
        inputCommentValue: action.value,
      };
    case CHANGE_NOTE_VALUE:
      return {
        ...state,
        noteValue: action.value,
      };
    case GET_ID:
      return {
        ...state,
        establishmentId: action.value,
      };
    default:

      return state;
  }
};

export default commentReducer;
