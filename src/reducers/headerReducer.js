import { TOGGEL_NAV_MENU } from '../actions/app';

const initialState = {
  navIsOpen: false,
};

const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGEL_NAV_MENU:
      return {
        // === copy of state
        ...state,
        navIsOpen: !state.navIsOpen,
      };
    default:
      return state;
  }
};

export default headerReducer;
