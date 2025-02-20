import { enhanceReduxMiddleware, keplerGlReducer } from "@kepler.gl/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const middlewares = enhanceReduxMiddleware([thunk]);

const store = configureStore({
  reducer: {
    keplerGl: keplerGlReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
