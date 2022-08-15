// === action types
// === action creators

export const TOGGLE_CONNECT_MODAL = 'TOGGLE_CONNECT_MODAL';
export const toggleConnectModal = () => ({
  type: TOGGLE_CONNECT_MODAL,
});

export const CHANGE_FIELD_CONNECT = 'CHANGE_FIELD_CONNECT';
export const changeFielfConnect = (identifier, newValue) => ({
  type: CHANGE_FIELD_CONNECT,
  identifier: identifier,
  value: newValue,
});

export const CHANGE_FIELD_SING_IN = 'CHANGE_FIELD_SING_IN';
export const chanheFieldSingIn = (identifier, newValue) => ({
  type: CHANGE_FIELD_SING_IN,
  identifier: identifier,
  value: newValue,
});

export const LOG_IN = 'LOG_IN';
export const logIn = () => ({
  type: LOG_IN,
});

export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
export const saveUserToken = (token, user) => ({
  type: SAVE_USER_TOKEN,
  token: token,
  user: user,
});

// === action types
export const SING_IN = 'SING_IN';
export const ERROR_SING_IN = 'ERROR_SING_IN';

// === action creators
export const singIn = () => ({
  type: SING_IN,
});

export const errorSingIn = () => ({
  type: ERROR_SING_IN,
});

export const SAVE_NEW_USER = 'SAVE_NEW_USER';
export const saveNewUser = (user) => ({
  type: SAVE_NEW_USER,
  user: user,
});

export const SAVE_WHEN_REFRESH = 'SAVE_WHEN_REFRESH';
export const saveWhenRefresh = (token, user) => ({
  type: SAVE_WHEN_REFRESH,
  token: token,
  user: user,
});

export const IF_TOKEN_WHEN_REFRESH = 'IF_TOKEN_WHEN_REFRESH';
export const ifTokenWhenRefresh = () => ({
  type: IF_TOKEN_WHEN_REFRESH,
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
  type: LOG_OUT,
});

export const CLOSE_NOTIF_MODAL = 'CLOSE_NOTIF_MODAL';
export const closeNotifModal = () => ({
  type: CLOSE_NOTIF_MODAL,
});

export const ERROR_LOG_IN = 'ERROR_LOG_IN';
export const errorLogIn = () => ({
  type: ERROR_LOG_IN,
});
