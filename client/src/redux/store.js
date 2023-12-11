import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formApi } from "./slices/formApi.js";
import { baseApi } from "./slices/rootApi.js";
import newFormSlice from "./slices/formSlice.js";

const rootReducer = combineReducers({
  newForm: newFormSlice,
});

export default configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    rootReducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(formApi.middleware)
      .concat(baseApi.middleware),
});
