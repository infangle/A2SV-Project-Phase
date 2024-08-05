// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { JobsApi } from "@/services/api";
import { getDefaultAutoSelectFamily } from "net";

const store = configureStore({
  reducer: {
    [JobsApi.reducerPath]: JobsApi.reducer,
  },

  middleware: (getDefaultMiddlewear) =>
    getDefaultMiddlewear.concat(JobsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
