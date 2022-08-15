// === action types
// -- action of Header
export const TOGGEL_NAV_MENU = 'TOGGEL_NAV_MENU';
// -- action of Selects
export const CHANGE_SELECT_DISTRICT_VALUE = 'CHANGE_SELECT_DISTRICT_VALUE';
export const CHANGE_SELECT_ESTABLISHMENT_VALUE = 'CHANGE_SELECT_ESTABLISHMENT_VALUE';
export const CHANGE_SELECT_SPECIALITY_VALUE = 'CHANGE_SELECT_SPECIALITY_VALUE';
export const ADD_SELECT_SEARCH_VALUE = 'ADD_SELECT_SEARCH_VALUE';
// -- action of aside
export const ADD_ASIDE_SELECT_VALUE = 'GET_ASIDE_SELECT_VALUE';

// === action creators
// -- action of Header
export const toggelNavMenu = (newValue) => ({
  type: TOGGEL_NAV_MENU,
  value: newValue,
});
// -- action of searchBar
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

// -- action of aside
export const addAsideSelectValue = (newValue) => ({
  type: ADD_ASIDE_SELECT_VALUE,
  value: newValue,
  /* value: newValue */
});
