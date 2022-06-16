import { TOGGEL_NAV_MENU, TOGGLE_CONNECT_MODAL } from '../actions/app';

const initialState = {
  navIsOpen: false,
  ConnectIsOpen: false,
};

const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGEL_NAV_MENU:
      return {
        // === copy of state
        ...state,
        navIsOpen: !state.navIsOpen,
      };
    case TOGGLE_CONNECT_MODAL:
      return {
        // === copy of state
        ...state,
        ConnectIsOpen: !state.ConnectIsOpen,
      };
    default:
      return state;
  }
};

export default headerReducer;
