/** Use for search by tag,
 the other values are for the compose search bar which is in beta */

// == action imports
import {
  CHANGE_SELECT_DISTRICT_VALUE,
  CHANGE_SELECT_ESTABLISHMENT_VALUE,
  CHANGE_SELECT_SPECIALITY_VALUE,
  ADD_SELECT_SEARCH_VALUE,
} from '../actions/app';

const initialState = {
  // -- value of etablishment Select
 // etablishmentValue: '',
  // -- value of District Select
 // districtValue: '',
  // -- value of Speciality Select
  specialityValue: '',

  searchValue: {
    etablishment: '',
    district: '',
    speciality: '',
  },
};

const searchBarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SELECT_DISTRICT_VALUE:
      return {
        // === copy of state
        ...state,
        districtValue: action.value,
      };

    case CHANGE_SELECT_ESTABLISHMENT_VALUE:
      return {
        // === copy of state
        ...state,
        etablishmentValue: action.value,
      };

    case CHANGE_SELECT_SPECIALITY_VALUE:
      return {
        // === copy of state
        ...state,
        specialityValue: action.value,
      };

    case ADD_SELECT_SEARCH_VALUE:
      return {
        // === copy of state
        ...state,
        searchValue: {
          etablishment: state.etablishmentValue,
          district: state.districtValue,
          speciality: state.specialityValue,
        },
      };
    default:
      return state;
  }
};

export default searchBarReducer;
