// == import
// -- tools
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

// -- Middlewares
import establishmentsMiddlewares from 'src/middlewares/establishmentsMiddlewares';
import bestEstablishMiddlewares from 'src/middlewares/bestEstablishMiddlewares';
import districtsMiddlewares from 'src/middlewares/districtsMiddlewares';
import tagsMiddlewares from 'src/middlewares/tagsMiddlewares';
import connectMiddlewares from 'src/middlewares/connectMiddlewares';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    establishmentsMiddlewares,
    bestEstablishMiddlewares,
    districtsMiddlewares,
    tagsMiddlewares,
    connectMiddlewares,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
