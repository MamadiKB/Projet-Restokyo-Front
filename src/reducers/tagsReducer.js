// == action imports
import { SAVE_TAGS_LIST } from 'src/actions/fetch';

const initialState = {
  // -- tags list from API
  tagsList: [],
};

const tagsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TAGS_LIST:
      return {
        // === copy of state
        ...state,
        tagsList: action.tagsList,
      };
    default:
      return state;
  }
};

export default tagsReducer;
