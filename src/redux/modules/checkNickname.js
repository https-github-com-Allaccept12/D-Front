import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL, token } from "../UrlForAxios";

const nicknameState = {
    nickname: ""
}

export const checknickname = createAsyncThunk(
    'post/checknickname',
    async ({map, setNicknameState}, thunkAPI) => {
      await URL.get(`/api/profile/nickname/${map.nickname}`, {
        headers: {
            "Authorization": "Bearer " + token,
        },
        withCredentials: true,
        })
        .then(res => {
            // console.log(res.data);
            if (res.data.result === 'success'){
                setNicknameState('available')
            } else{
                setNicknameState('fail')
            }
        })
        .catch(err => console.log(err));
    },
  );


export const checkNicknameSlice = createSlice({
    name: 'checknickname',
    initialState: nicknameState,
    reducer: {
    },
    extraReducers: builder => {
        builder
        .addCase(checknickname.pending, (state, action) => {
            console.log('pending');
        })
        .addCase(checknickname.fulfilled, (state, action) => {
            console.log('create fulfiled');
        })
        .addCase(checknickname.rejected, (state, action) => {
            console.log(action.error.message);
            console.log('create rejected');
        })
        
    },
});


export const { NicknameisOK } = checkNicknameSlice.actions;
export default checkNicknameSlice.reducer;