import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {}
}

export const CreateNewArtWork = createAsyncThunk(
    'post/CreateNewArtWork',
    async (data, thunkAPI) => {
      await URL.post('/api/artwork', data)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    },
  );

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducer: {
        // setThumbnail: (state, action) => {
        // state.project.thumbNailNum = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
        .addCase(CreateNewArtWork.pending, (state, action) => {
            console.log('pending');
        })
        .addCase(CreateNewArtWork.fulfilled, (state, action) => {
            console.log('create fulfiled');
        })
        .addCase(CreateNewArtWork.rejected, () => {
            console.log('create rejected');
        })
    },
});

export default postSlice.reducer;