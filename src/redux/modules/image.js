import { createSlice } from '@reduxjs/toolkit';



export const imageSlice = createSlice({
    name: 'image',
    initialState: {url: ""},
    reducers: {
        preview: (state, action) => {
            state.url = action.payload
        },
        // preview(state, action) {
        //     state.value = action.payload
        // }
    },
  });

export const { preview } = imageSlice.actions;
export default imageSlice.reducer;