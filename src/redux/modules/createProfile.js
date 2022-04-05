import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { refreshSlice } from "./temp";
import { URL, token } from "../UrlForAxios";
import { useDispatch } from "react-redux";

const initialState = {};

export const createProfile = createAsyncThunk(
  "post/createProfile",
  // async (formData, thunkAPI) => {
  async ({formData, dispatch}) => {
    //   await URL.post('/api/profile', formData, {
    await URL.post("/api/profile", formData, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        const access_token = sessionStorage.getItem("access_token");
        const refresh_token = sessionStorage.getItem("refresh_token");
        console.log(err.response.data.status);
        if (err.response.data.status == 444){
            console.log('here');
            dispatch(refreshSlice({access_token, refresh_token}));
        }
      });
  }
);

export const profileSlice = createSlice({
  name: "createProfile",
  initialState,
  reducer: {
    // setThumbnail: (state, action) => {
    // state.project.thumbNailNum = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(createProfile.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      });
  },
});

export default profileSlice.reducer;
