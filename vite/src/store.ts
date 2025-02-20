import { enhanceReduxMiddleware, keplerGlReducer } from "@kepler.gl/reducers";
import { configureStore } from "@reduxjs/toolkit";

const middlewares = enhanceReduxMiddleware([]);

const store = configureStore({
  reducer: {
    keplerGl: keplerGlReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
