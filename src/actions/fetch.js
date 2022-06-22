// === action types
// -- action fetch
export const FETCH_ESTABLISHMENTS_LIST = 'FETCH_ESTABLISHMENTS_LIST';
export const FETCH_DISTRICTS_LIST = 'FETCH_DISTRICTS_LIST';
export const FETCH_BEST_ESTABLISHMENTS_LIST = 'FETCH_BEST_ESTABLISHMENTS_LIST';
export const FETCH_TAGS_LIST = 'FETCH_TAGS_LIST';
// -- action save
export const SAVE_ESTABLISHMENTS_LIST = 'SAVE_ESTABLISHMENTS_LIST';
export const SAVE_BEST_ESTABLISHMENTS_LIST = 'SAVE_BEST_ESTABLISHMENTS_LIST';
export const SAVE_DISTRICTS_LIST = 'SAVE_DISTRICTS_LIST';
export const SAVE_TAGS_LIST = 'SAVE_TAGS_LIST';

// === action creators
// -- action fetch
export const fetchEstablishmentsList = () => ({
  type: FETCH_ESTABLISHMENTS_LIST,
});

export const fetchBestEstablishmentsList = () => ({
  type: FETCH_BEST_ESTABLISHMENTS_LIST,
});

export const fetchDistrictList = () => ({
  type: FETCH_DISTRICTS_LIST,
});

export const fetchTagsList = () => ({
  type: FETCH_TAGS_LIST,
});
// -- action of save
export const saveEstablishmentsList = (newValue) => ({
  type: SAVE_ESTABLISHMENTS_LIST,
  establishmentsList: newValue,
});

export const saveBestEstablishmentsList = (newValue) => ({
  type: SAVE_BEST_ESTABLISHMENTS_LIST,
  bestEstablishmentsList: newValue,
});

export const saveDistricList = (newValue) => ({
  type: SAVE_DISTRICTS_LIST,
  districtsList: newValue,
});

export const saveTagsList = (newValue) => ({
  type: SAVE_TAGS_LIST,
  tagsList: newValue,
});
