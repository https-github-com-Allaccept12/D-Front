import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL, token } from "../UrlForAxios";

const initialState = {
}

export const checknickname = createAsyncThunk(
    'post/checknickname',
    async (nickname, thunkAPI) => {
      await URL.post(`/api/profile/nickname/${nickname}`, {
        // await URL.post('/api/profile/nickname/', nickname, {
        headers: {
            "Authorization": "Bearer " + token,
        },
        withCredentials: true,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    },
  );


export const checkNicknameSlice = createSlice({
    name: 'post',
    initialState,
    reducer: {
    },
    extraReducers: builder => {
        builder
        .addCase(checknickname.pending, (state, action) => {
            console.log('pending');
        })
        
    },
});


// export const { checknickname } = checkNicknameSlice.actions;
export default checkNicknameSlice.reducer;