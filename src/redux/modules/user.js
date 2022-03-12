import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {axios} from 'axios';


export const kakaoLogin = createAsyncThunk(
    'user/kakaoLogin',
    async (data, thunkAPI) => {
      await axios
        .get(`http://13.125.123.134/oauth2/authorization/kakao/callback?code=${data}`)
        .then(res => {
          alert('로그인 완료');
          console.log(res);
          sessionStorage.setItem('userInfo', JSON.stringify(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    },
  );

export const userSlice = createSlice({
    name: "user",
    initialState: { value: {name: "", age: 0, email: ""}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
});

export default userSlice.reducer;