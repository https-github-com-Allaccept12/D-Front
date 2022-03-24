import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL, token } from "../UrlForAxios";

const nicknameState = {
    nickname: ""
}

export const checknickname = createAsyncThunk(
    'post/checknickname',
    async (nickname, thunkAPI) => {
      const result = await URL.get(`/api/profile/nickname/${nickname}`, {
        headers: {
            "Authorization": "Bearer " + token,
        },
        withCredentials: true,
        })
        .then(res => {
            if (res.data.result === 'success'){
                console.log(res.data);
                // sessionStorage.removeItem('nicknameState')
                // sessionStorage.setItem('nicknameState', '사용 가능')
            } else{
                // sessionStorage.removeItem('nicknameState')
                // sessionStorage.setItem('nicknameState', '사용 불가')
            }
            console.log(res);
        })
        .catch(err => console.log(err));
        
        return result;
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
            state.nickname = action.payload;
            console.log(action.payload)
        })
        .addCase(checknickname.rejected, (state, action) => {
            console.log(action.error.message);
            console.log('create rejected');
        })
        
    },
});


export const { NicknameisOK } = checkNicknameSlice.actions;
export default checkNicknameSlice.reducer;