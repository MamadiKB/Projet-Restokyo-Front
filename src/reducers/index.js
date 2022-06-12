import { combineReducers } from 'redux';

import districts from './districtsReducer';
// import establishments from './establishmentsReducer';

const rootReducer = combineReducers({
  // name in state: reducers
  districts,

});

export default rootReducer;
