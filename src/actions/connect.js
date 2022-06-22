// === action types
export const TOGGLE_CONNECT_MODAL = 'TOGGLE_CONNECT_MODAL';
export const CHANGE_FIELD_CONNECT = 'CHANGE_FIELD_CONNECT';
export const CHANGE_FIELD_SING_IN = 'CHANGE_FIELD_SING_IN';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
export const SAVE_WHEN_REFRESH = 'SAVE_WHEN_REFRESH';
export const IF_TOKEN_WHEN_REFRESH = 'IF_TOKEN_WHEN_REFRESH';
export const LOG_OUT = 'LOG_OUT';
// === action creators

export const toggleConnectModal = () => ({
  type: TOGGLE_CONNECT_MODAL,
});

export const changeFielfConnect = (identifier, newValue) => ({
  type: CHANGE_FIELD_CONNECT,
  identifier: identifier,
  value: newValue,
});

export const chanheFieldSingIn = (identifier, newValue) => ({
  type: CHANGE_FIELD_SING_IN,
  identifier: identifier,
  value: newValue,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUserToken = (token) => ({
  type: SAVE_USER_TOKEN,
  token: token,
  user: '',
});

export const saveWhenRefresh = (token) => ({
  type: SAVE_WHEN_REFRESH,
  token: token,
});

export const ifTokenWhenRefresh = () => ({
  type: IF_TOKEN_WHEN_REFRESH,
});

export const logOut = () => ({
  type: LOG_OUT,
});