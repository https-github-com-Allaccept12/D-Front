import { createSlice } from '@reduxjs/toolkit';

export const tendencySlice = createSlice({
    name: 'tendency',
    initialState: {},
    reducers: {
        tendency: (state, action) => {
            state.tendency = action.payload
        },
    },
  });

export const { tendency } = tendencySlice.actions;
export default tendencySlice.reducer;