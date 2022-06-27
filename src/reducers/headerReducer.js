// == action imports
import { TOGGEL_NAV_MENU } from '../actions/app';

const initialState = {
  // -- nav menus burger display status
  navIsOpen: false,

};

const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGEL_NAV_MENU:
      return {
        // === copy of state
        ...state,
        // -- toggle true/false
        navIsOpen: !state.navIsOpen,
      };
    default:

      return state;
  }
};

export default headerReducer;
