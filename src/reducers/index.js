import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import searchBarReducer from './searchBarReducer';
import districtsReducer from './districtsReducer';
import establishmentsReducer from './establishmentsReducer';

const rootReducer = combineReducers({
  // name in state: reducers
  headerReducer,
  searchBarReducer,
  districtsReducer,
  establishmentsReducer,

});

export default rootReducer;
