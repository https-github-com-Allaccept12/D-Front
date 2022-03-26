import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL, token } from "../UrlForAxios";

const initialState = {};

export const createProfile = createAsyncThunk(
  "post/createProfile",
  // async (formData, thunkAPI) => {
  async (data, thunkAPI) => {
    //   await URL.post('/api/profile', formData, {
    await URL.post("/api/profile", data, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
