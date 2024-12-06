import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Reducer";


const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState

export default store;
