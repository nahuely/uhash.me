import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import { loadState } from "../helpers/state";

import shortenerMiddleware from "./middleware/feature/shorteners";
import authMiddleware from "./middleware/feature/auth";
import coreMiddleware from "./middleware/core/api";
import routeMiddleware from "./middleware/core/router";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const featureMiddlewares = [
  shortenerMiddleware,
  authMiddleware,
  routeMiddleware
];
const coreMiddlewares = [coreMiddleware];

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...featureMiddlewares, ...coreMiddlewares))
);

export default store;