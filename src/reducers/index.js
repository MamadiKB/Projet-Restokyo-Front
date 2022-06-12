import { combineReducers } from 'redux';

import searchBarReducer from './searchBarReducer';
import districtsReducer from './districtsReducer';
import establishmentsReducer from './establishmentsReducer';

const rootReducer = combineReducers({
  // name in state: reducers
  searchBarReducer,
  districtsReducer,
  establishmentsReducer,

});

export default rootReducer;
