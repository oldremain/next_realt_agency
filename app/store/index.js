import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../features/favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    favourites: favReducer,
  },
});
