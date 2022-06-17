import { SAVE_DISTRICTS_LIST } from 'src/actions/fetch';

const initialState = {
  asideDistrictValue: '',
  districtsList: [],
};

const districtsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DISTRICTS_LIST:
      return {
        ...state,
        districtsList: action.districtsList,
      };
    default:
      return state;
  }
};

export default districtsReducer;
