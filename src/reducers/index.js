import { combineReducers } from 'redux';

import connectReducer from './connectReducer';
import headerReducer from './headerReducer';
import searchBarReducer from './searchBarReducer';
import districtsReducer from './districtsReducer';
import establishmentsReducer from './establishmentsReducer';

const rootReducer = combineReducers({
  // name in state: reducers
  connectReducer,
  headerReducer,
  searchBarReducer,
  districtsReducer,
  establishmentsReducer,

});

export default rootReducer;
