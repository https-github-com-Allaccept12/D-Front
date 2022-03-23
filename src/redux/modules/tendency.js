import { createSlice } from '@reduxjs/toolkit';

export const tendencySlice = createSlice({
    name: 'tendency',
    initialState: {},
    reducers: {
        tendency: (state, action) => {
            state.tendency = action.payload
        },
        // preview(state, action) {
        //     state.value = action.payload
        // }
    },
  });

export const { tendency } = tendencySlice.actions;
export default tendencySlice.reducer;