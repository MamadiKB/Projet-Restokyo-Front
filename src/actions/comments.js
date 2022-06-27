export const CHANGE_COMMENT_VALUE = 'CHANGE_COMMENT_VALUE';
export const CHANGE_NOTE_VALUE = 'CHANGE_NOTE_VALUE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_ID = 'GET_ID';

export const changeCommentValue = (newValue) => ({
  type: CHANGE_COMMENT_VALUE,
  value: newValue,
});

export const changeNoteValue = (newValue) => ({
  type: CHANGE_NOTE_VALUE,
  value: newValue,
});

export const addComment = () => ({
  type: ADD_COMMENT,
});

export const getId = (newValue) => ({
  type: GET_ID,
  value: newValue,
});
