import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSagas from "../sagas";
import { loadState } from "../helpers/state";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;
