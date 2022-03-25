import { createSlice } from '@reduxjs/toolkit';

export const mainPageArtistsSlice = createSlice({
    name: 'hotist',
    initialState: {},
    reducers: {
        artists: (state, action) => {
            state.artist = action.payload
        },
    },
  });


export const { artists } = mainPageArtistsSlice.actions;
export default mainPageArtistsSlice.reducer;