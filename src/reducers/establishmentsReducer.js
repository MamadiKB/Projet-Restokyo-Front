import { SAVE_ESTABLISHMENTS_LIST } from 'src/actions/fetch';

const initialState = {
  establishmentsList: [],
};

const establishmentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ESTABLISHMENTS_LIST:
      return {
        ...state,
        establishmentsList: action.establishmentsList,
      };
    default:
      return state;
  }
};

export default establishmentsReducer;
