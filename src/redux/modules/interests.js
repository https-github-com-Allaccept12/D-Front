import { createSlice } from '@reduxjs/toolkit';

export const interestsSlice = createSlice({
    name: 'interests',
    initialState: {},
    reducers: {
        interests: (state, action) => {
            state.interests = action.payload
        },
    },
  });

export const { interests } = interestsSlice.actions;
export default interestsSlice.reducer;