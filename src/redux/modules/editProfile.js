import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL, token } from "../UrlForAxios";

const initialState = {};

// export const editProfile = createAsyncThunk(
//   "editProfile",
//   // async (formData, thunkAPI) => {
//   async (data, thunkAPI) => {
//     //   await URL.post('/api/profile', formData, {
//     await URL.post("/api/profile", data, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//       withCredentials: true,
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }
// );

export const editIntroduce = createAsyncThunk(
    "editIntroduce",
    // async (formData, thunkAPI) => {
    async (data, thunkAPI) => {
      //   await URL.post('/api/profile', formData, {
      await URL.post("/api/my-page/intro", data, {
        headers: {
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

  export const editExp = createAsyncThunk(
    "editExp",
    // async (formData, thunkAPI) => {
    async (data, thunkAPI) => {
      //   await URL.post('/api/profile', formData, {
      await URL.post("/api/my-page/history", data, {
        headers: {
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

  export const editSkills = createAsyncThunk(
    "editExp",
    // async (formData, thunkAPI) => {
    async (data, thunkAPI) => {
      //   await URL.post('/api/profile', formData, {
      await URL.post("/api/my-page/specialty", data, {
        headers: {
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

export const editProfileSlice = createSlice({
  name: "editProfile",
  initialState,
  reducer: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(editIntroduce.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(editIntroduce.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(editIntroduce.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      })
      .addCase(editExp.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(editExp.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(editExp.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      })
      .addCase(editSkills.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(editSkills.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(editSkills.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      })
  },
});

export default editProfileSlice.reducer;