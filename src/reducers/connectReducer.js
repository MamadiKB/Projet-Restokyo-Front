import { TOGGLE_CONNECT_MODAL, CHANGE_FIELD_CONNECT, CHANGE_FIELD_SING_IN } from 'src/actions/connect';

const initialState = {

  connectIsOpen: false,
  // contenu du champ email
  email: '',
  // contenu du champ password
  password: '',

  jwt: '',

  isLoged: false,

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
        // === copy of state
        ...state,
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

    default:
      return state;
  }
};

export default ConnestReducer;
