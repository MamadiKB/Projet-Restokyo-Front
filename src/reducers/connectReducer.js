// == action imports
import {
  TOGGLE_CONNECT_MODAL,
  CHANGE_FIELD_CONNECT,
  CHANGE_FIELD_SING_IN,
  SAVE_USER_TOKEN,
  SAVE_WHEN_REFRESH,
  SAVE_NEW_USER,
  IF_TOKEN_WHEN_REFRESH,
  LOG_OUT,
  CLOSE_NOTIF_MODAL,
  ERROR_LOG_IN,
  ERROR_SING_IN,
} from 'src/actions/connect';

const initialState = {

  connectIsOpen: false,
  // email feald
  email: '',
  // password feald
  password: '',
  // JWT
  token: null,
  // -- log status
  isLogged: false,
  // -- user info
  user: [],
  // -- for successful registration Modal
  isSingIn: false,
  //  email feald sing in
  emailSingIn: '',
  //  password eald sing in
  passwordSingIn: '',
  // pseudo
  usernameSingIn: '',
  // error messages
  errorLogIn: false,
  errorSingIn: false,
};

const ConnestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CONNECT_MODAL:
      return {
        ...state, // === copy of state
        connectIsOpen: !state.connectIsOpen,
      };
    case CHANGE_FIELD_CONNECT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case CHANGE_FIELD_SING_IN:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case SAVE_USER_TOKEN:
      return {
        ...state,
        isLogged: true,
        token: action.token,
        user: action.user,
        email: '',
        password: '',
        connectIsOpen: false,
      };
    case SAVE_WHEN_REFRESH:
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    case IF_TOKEN_WHEN_REFRESH:
      return {
        ...state,
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
        email: '',
        password: '',
      };
    case SAVE_NEW_USER:
      return {
        ...state,
        isLogged: false,
        user: action.user,
        email: '',
        password: '',
        connectIsOpen: false,
        isSingIn: true,
      };
    case CLOSE_NOTIF_MODAL:
      return {
        ...state,
        isSingIn: false,
      };
    case ERROR_LOG_IN:
      return {
        ...state,
        errorLogIn: true,
      };
    case ERROR_SING_IN:
      return {
        ...state,
        errorSingIn: true,
      };
    default:
      return state;
  }
};

export default ConnestReducer;
