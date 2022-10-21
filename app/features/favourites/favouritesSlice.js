import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    favAdd: (state, action) => {
      state.push(action.payload);
    },
    removeFav: (state, action) =>
      state.filter((favourite) => favourite.id !== action.payload),
  },
});

export const { favAdd, removeFav } = favouritesSlice.actions;
export default favouritesSlice.reducer;
