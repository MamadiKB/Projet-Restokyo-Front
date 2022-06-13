// === action types
// -- action fetch
export const FETCH_ESTABLISHMENTS = 'FETCH_ESTABLISHMENTS';

// -- action save
export const SAVE_ESTABLISHMENTS = 'SAVE_ESTABLISHMENTS';

// === action creators
// -- action fetch
export const fetchEstablishments = () => ({
  type: FETCH_ESTABLISHMENTS,
});
// -- action of save
export const saveEstablishments = (newValue) => ({
  type: SAVE_ESTABLISHMENTS,
  recipes: newValue,
});
