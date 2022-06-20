import { SAVE_ESTABLISHMENTS_LIST, SAVE_BEST_ESTABLISHMENTS_LIST } from 'src/actions/fetch';

const initialState = {
  establishmentsList: [],
  bestEstablishmentsList: [],
};

const establishmentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ESTABLISHMENTS_LIST:
      return {
        ...state,
        establishmentsList: action.establishmentsList,
      };
    case SAVE_BEST_ESTABLISHMENTS_LIST:
      return {
        ...state,
        bestEstablishmentsList: action.bestEstablishmentsList,
      };
    default:
      return state;
  }
};

export default establishmentsReducer;
