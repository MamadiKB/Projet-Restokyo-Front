// === action types
export const CHANGE_SELECT_DISTRICT_VALUE = 'CHANGE_SELECT_DISTRICT_VALUE';
export const CHANGE_SELECT_ESTABLISHMENT_VALUE = 'CHANGE_SELECT_ESTABLISHMENT_VALUE';
export const CHANGE_SELECT_SPECIALITY_VALUE = 'CHANGE_SELECT_SPECIALITY_VALUE';
export const ADD_SELECT_SEARCH_VALUE = 'ADD_SELECT_SEARCH_VALUE';

// === action creators
export const changeSelectDistrictValue = (newValue) => ({
  type: CHANGE_SELECT_DISTRICT_VALUE,
  value: newValue,
  /* value: newValue */
});

export const changeSelectEstablishmentValue = (newValue) => ({
  type: CHANGE_SELECT_ESTABLISHMENT_VALUE,
  value: newValue,
  /* value: newValue */
});

export const changeSelectSpecialityValue = (newValue) => ({
  type: CHANGE_SELECT_SPECIALITY_VALUE,
  value: newValue,
  /* value: newValue */
});

export const addSelectSearchValue = () => ({
  type: ADD_SELECT_SEARCH_VALUE,
});
