import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL, token } from "../UrlForAxios";


// 팔로우
export const requestFollow = createAsyncThunk("/requestFollow", (account_id) => {
  const data = { id: account_id }
  URL.post(`/api/follow`, data, {
      headers: {
          Authorization: "Bearer " + token,
      },
      withCredentials: true,
  })
      .then((res) => {
        //   console.log(res);
      })
      .catch((err) => console.log(err));
});

// 언팔로우
export const requestUnFollow = createAsyncThunk("/requestFollow", (account_id) => {
  const data = { id: account_id }
  URL.patch(`/api/follow`, data, {
      headers: {
          Authorization: "Bearer " + token,
      },
      withCredentials: true,
  })
      .then((res) => {
        //   console.log(res);
      })
      .catch((err) => console.log(err));
});

// 팔로잉리스트
export const requestFollowing = createAsyncThunk("/requestFollowing", ({ account_id, dispatch }) => {
  URL.get(`/api/follow/following`,{
        params: {
            account_id: account_id
        },
        })
      .then((res) => {
        //   console.log(res);
      })
      .catch((err) => console.log(err));
});

// 팔로워리스트
export const requestFollower = createAsyncThunk("/requestFollower", ({ account_id, dispatch }) => {
  URL.get(`/api/follow/follower`, account_id,{
        params: {
            account_id: account_id
        },
      })
      .then((res) => {
        //   console.log(res);
      })
      .catch((err) => console.log(err));
});

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducer: {},
  extraReducers: (builder) => {
    builder
        .addCase(requestFollow.pending, (state, action) => {
            // console.log("pending");
        })
        .addCase(requestFollow.fulfilled, (state, action) => {
            // console.log("create fulfiled");
        })
        .addCase(requestFollow.rejected, (state, action) => {
            // console.log(action.error.message);
            // console.log("create rejected");
        })
        .addCase(requestFollowing.pending, (state, action) => {
            // console.log("pending");
        })
        .addCase(requestFollowing.fulfilled, (state, action) => {
            // console.log("create fulfiled");
        })
        .addCase(requestFollowing.rejected, (state, action) => {
            // console.log(action.error.message);
            // console.log("create rejected");
        })
      }
});

export default userSlice.reducer;
