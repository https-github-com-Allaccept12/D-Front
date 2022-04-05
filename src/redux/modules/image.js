import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
    name: "image",
    initialState: { url: "", dimoDeletes: [] },
    reducers: {
        preview: (state, action) => {
            state.url = action.payload;
        },
        forSend: (state, action) => {
            state.file = action.payload;
        },
        artworkFiles: (state, action) => {
            state.artworkFiles = action.payload;
        },
        dimoFiles: (state, action) => {
            state.dimoFiles = action.payload;
        },
        dimoDeletes: (state, action) => {
            state.dimoDeletes = action.payload;
        },

        // preview(state, action) {
        //     state.value = action.payload
        // }
    },
});

export const { preview, forSend, artworkFiles, dimoFiles, dimoDeletes } = imageSlice.actions;
export default imageSlice.reducer;
