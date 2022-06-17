// === action types
export const TOGGLE_CONNECT_MODAL = 'TOGGLE_CONNECT_MODAL';
export const CHANGE_FIELD_CONNECT = 'CHANGE_FIELD_CONNECT';
export const CHANGE_FIELD_SING_IN = 'CHANGE_FIELD_SING_IN';
export const LOG_IN = 'LOG_IN';

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
