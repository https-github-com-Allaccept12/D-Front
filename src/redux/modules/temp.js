import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { preview } from "./image";
import { user } from "./userState";
import { URL, token } from "../UrlForAxios";

const initialState = {};

export const kakaoSlice = createAsyncThunk(
  "post/kakao",
  ({ code, history, dispatch }) => {
    URL.get(`/user/kakao/callback?code=${code}`)
      .then((res) => {
        console.log(res);
        if (res.data.result === "success") {
          const access_token = res.data.data.access_token;
          const refresh_token = res.data.data.refresh_token;
          const account_id = res.data.data.account_id;
          const have_to_signup = res.data.data.isSignUp;
          const profile_img = res.data.data.profile_img;
          sessionStorage.setItem("access_token", access_token);
          sessionStorage.setItem("refresh_token", refresh_token);
          sessionStorage.setItem("account_id", account_id);
          sessionStorage.setItem("profile_img", profile_img);
          dispatch(preview(profile_img));
          dispatch(user(access_token));
          if (have_to_signup) {
            history.replace("/TendencyTest");
          } else {
            refreshSlice({ access_token, refresh_token });
            window.location.href = "/";
          }
        }
      })
      .catch((err) => console.log(err));
  }
);



export const refreshSlice = createAsyncThunk(
  "post/refresh",
  async ({ access_token, refresh_token }) => {
    console.log('access:', access_token);
    console.log('refresh:', refresh_token);

    URL.get(`/user/refresh?accessToken`,{
      headers: {
        AccessAuthorization: access_token,
        RefreshAuthorization: refresh_token
        },
      withCredentials: true,
      })
      .then((res) => {
        sessionStorage.setItem("access_token",res.data.data.accessToken);
        sessionStorage.setItem("refresh_token",res.data.data.refreshToken);
        alert('다시 로그인 해주세요.');
        window.location.href = "/logout";
      })
      .catch((err) => console.log(err));
  }
);


export const tempSlice = createSlice({
  name: "refreshSlice",
  initialState,
  reducer: {
    // setThumbnail: (state, action) => {
    // state.project.thumbNailNum = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshSlice.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(refreshSlice.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(refreshSlice.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      });
  },
});

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducer: {
//     user: (state, action) => {
//     state.user = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(kakaoSlice.pending, (state, action) => {
//         console.log("pending");
//       })
//       .addCase(kakaoSlice.fulfilled, (state, action) => {
//         console.log("create fulfiled");
//       })
//       .addCase(kakaoSlice.rejected, (state, action) => {
//         console.log(action.error.message);
//         console.log("create rejected");
//       })
//       .addCase(refreshSlice.pending, (state, action) => {
//         console.log("pending");
//       })
//       .addCase(refreshSlice.fulfilled, (state, action) => {
//         console.log("create fulfiled");
//       })
//       .addCase(refreshSlice.rejected, (state, action) => {
//         console.log(action.error.message);
//         console.log("create rejected");
//       });
//   },
// });

// export const { user } = userSlice.actions;
// export default userSlice.reducer;
// export default kakaoSlice.reducer;
