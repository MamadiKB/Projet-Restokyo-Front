// == import
// -- tool
import { combineReducers } from 'redux';
// -- Reducer
import connectReducer from './connectReducer';
import headerReducer from './headerReducer';
import searchBarReducer from './searchBarReducer';
import districtsReducer from './districtsReducer';
import establishmentsReducer from './establishmentsReducer';
import tagsReducer from './tagsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  // name in state: reducers
  connectReducer,
  headerReducer,
  searchBarReducer,
  districtsReducer,
  establishmentsReducer,
  tagsReducer,
  commentsReducer,

});

export default rootReducer;
