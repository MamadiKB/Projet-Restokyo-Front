// === action types
// -- action fetch
export const FETCH_ESTABLISHMENTS_LIST = 'FETCH_ESTABLISHMENTS_LIST';

// -- action save
export const SAVE_ESTABLISHMENTS_LIST = 'SAVE_ESTABLISHMENTS';

// === action creators
// -- action fetch
export const fetchEstablishments = () => ({
  type: FETCH_ESTABLISHMENTS_LIST,
});
// -- action of save
export const saveEstablishments = (newValue) => ({
  type: SAVE_ESTABLISHMENTS_LIST,
  establishmentsList: newValue,
});
