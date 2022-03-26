import { createSlice } from "@reduxjs/toolkit";

export const mainPageArtistsSlice = createSlice({
  name: "hotist",
  initialState: {},
  reducers: {
    artists: (state, action) => {
      state.artist = action.payload;
    },
    artworks: (state, action) => {
      state.artworks = action.payload;
    },
  },
});

export const { artists, artworks } = mainPageArtistsSlice.actions;
export default mainPageArtistsSlice.reducer;
