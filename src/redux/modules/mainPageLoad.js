import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL, token, account_id } from "../UrlForAxios";



export const mainPageLoad = createAsyncThunk(
    '/mainPageLoad',
    async () => {
        console.log(account_id);
      await URL.get('/',account_id)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
    },
  );


export const mainPageSlice = createSlice({
    name: 'mainPageLoad',
    initialState: {},
    reducer: {
    },
    extraReducers: builder => {
        builder
        .addCase(mainPageLoad.pending, (state, action) => {
            console.log('pending');
        })
        .addCase(mainPageLoad.fulfilled, (state, action) => {
            console.log('create fulfiled');
        })
        .addCase(mainPageLoad.rejected, (state, action) => {
            console.log(action.error.message);
            console.log('create rejected');
        })
        
    },
});


export const { Load } = mainPageSlice.actions;
export default mainPageSlice.reducer;