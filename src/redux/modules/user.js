import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from './userApi';

const UserApi = new userApi();

const userState = {
  user: {},
  isLogin: false,
};

export const kakaoLoginAxios = createAsyncThunk(
  "user/kakaoLoginAxios",
  async ({code, history}, {dispatch}) => {
    const user = await UserApi.kakaoLogin({code, history});
    if (user) {
      dispatch(user.data);
      return user;
    }
  },
);

// export const kakaoLogin = createAsyncThunk(
//     'user/kakaoLogin',
//     async (data, thunkAPI) => {
//       console.log(data);
//       await axios
//         .get(`http://keykim.shop/oauth2/authorization/kakao/callback?code=${data}`)
//         .then(res => {
//           alert('로그인 완료');
//           console.log(res);
//           sessionStorage.setItem('userInfo', JSON.stringify(res.data));
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     },
//   );

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(kakaoLoginAxios.fulfilled, (state, action) => {
        state.isLogin = true;
      })
  },
});

export default userSlice.reducer;