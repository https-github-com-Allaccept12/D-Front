import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL, token } from "../UrlForAxios";

export const CreateNewArtWork = createAsyncThunk(
  "post/CreateNewArtWork",
  async (formData, thunkAPI) => {
    await URL.post("/api/artwork", formData, {
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

export const artworkSlice = createSlice({
  name: "artwork",
  initialState: {},
  reducers: {
    artworks: (state, action) => {
      state.artworks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateNewArtWork.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(CreateNewArtWork.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(CreateNewArtWork.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      });
  },
});

export const { artworks } = artworkSlice.actions;
export default artworkSlice.reducer;
