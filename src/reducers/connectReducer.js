// == action imports
import {
  TOGGLE_CONNECT_MODAL,
  CHANGE_FIELD_CONNECT,
  CHANGE_FIELD_SING_IN,
  SAVE_USER_TOKEN,
  SAVE_WHEN_REFRESH,
  IF_TOKEN_WHEN_REFRESH,
  LOG_OUT,
} from 'src/actions/connect';

const initialState = {

  connectIsOpen: false,
  // email feald
  email: '',
  // contenu du champ password
  password: '',
  // JWT
  token: null,
  // -- log status
  isLogged: false,
  // -- user info
  user: [],

  // contenu du champ email
  emailSingIn: '',
  // contenu du champ password
  passwordSingIn: '',
  // pseudo de l'utilisateur
  usernameSingIn: '',

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
        user: '',
        email: '',
        password: '',
        connectIsOpen: false,
      };
    case SAVE_WHEN_REFRESH:
      return {
        ...state,
        token: action.token,
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

    default:
      return state;
  }
};

export default ConnestReducer;
