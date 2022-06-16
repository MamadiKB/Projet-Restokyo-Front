import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

// import { devToolsEnhancer } from 'redux-devtools-extension';
import establishmentsMiddlewares from 'src/middlewares/establishmentsMiddlewares';
import districtsMiddlewares from 'src/middlewares/districtsMiddlewares';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(establishmentsMiddlewares, districtsMiddlewares),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
