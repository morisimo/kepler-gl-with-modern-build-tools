import keplerGlReducer, { enhanceReduxMiddleware } from "@kepler.gl/reducers";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { taskMiddleware } from "react-palm/tasks";

const store = configureStore({
  reducer: {
    keplerGl: keplerGlReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const enhancedMiddleware = enhanceReduxMiddleware(
      getDefaultMiddleware().concat(taskMiddleware)
    );
    return new Tuple(...enhancedMiddleware);
  },
});

export default store;
