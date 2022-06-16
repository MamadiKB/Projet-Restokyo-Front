// === action types
// -- action fetch
export const FETCH_ESTABLISHMENTS_LIST = 'FETCH_ESTABLISHMENTS_LIST';
export const FETCH_DISTRICTS_LIST = 'FETCH_DISTRICTS_LIST';
// -- action save
export const SAVE_ESTABLISHMENTS_LIST = 'SAVE_ESTABLISHMENTS';
export const SAVE_DISTRICTS_LIST = 'SAVE_DISTRICTS_LIST';

// === action creators
// -- action fetch
export const fetchEstablishmentsList = () => ({
  type: FETCH_ESTABLISHMENTS_LIST,
});
// -- action of save
export const saveEstablishmentsList = (newValue) => ({
  type: SAVE_ESTABLISHMENTS_LIST,
  establishmentsList: newValue,
});

export const fetchDistrictList = () => ({
  type: FETCH_DISTRICTS_LIST,
});
// -- action of save
export const saveDistricList = (newValue) => ({
  type: SAVE_DISTRICTS_LIST,
  districtsList: newValue,
});
