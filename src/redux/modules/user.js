import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL, token } from "../UrlForAxios";


// 팔로우
export const requestFollow = createAsyncThunk("/requestFollow", (account_id) => {
  URL.post(`/api/follow`, account_id, {
      headers: {
          Authorization: "Bearer " + token,
      },
      withCredentials: true,
  })
      .then((res) => {
          console.log(res);
      })
      .catch((err) => console.log(err));
});

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
  name: "user",
  initialState: {},
  reducer: {},
  extraReducers: (builder) => {
    builder
        .addCase(requestFollow.pending, (state, action) => {
            console.log("pending");
        })
        .addCase(requestFollow.fulfilled, (state, action) => {
            console.log("create fulfiled");
        })
        .addCase(requestFollow.rejected, (state, action) => {
            console.log(action.error.message);
            console.log("create rejected");
        })
      }
});

export default userSlice.reducer;
