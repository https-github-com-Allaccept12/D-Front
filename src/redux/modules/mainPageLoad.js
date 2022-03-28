import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { artists, artworks } from "./mainPageReducer";
import { preview } from "./image";
import { URL, token, account_id } from "../UrlForAxios";

export const mainPageLoad = createAsyncThunk(
  "/mainPageLoad",
  async ({ account_id, dispatch }) => {
    await axios
      .get(process.env.REACT_APP_URL, {
        params: {
          account_id: account_id,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.data){
          const top_artist = res.data.data.top_artist;
          const artwork = res.data.data.artwork;
          dispatch(artists(top_artist));
          dispatch(artworks(artwork));
        }
      })
      .catch((err) => console.log(err));
  }
);

export const mainPageSlice = createSlice({
  name: "mainPageLoad",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(mainPageLoad.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(mainPageLoad.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(mainPageLoad.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      });
  },
});

export default mainPageSlice.reducer;
