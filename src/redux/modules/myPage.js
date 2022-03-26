import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { artists, artworks } from "./mainPageReducer";
import { preview } from "./image";
import { URL, token, account_id } from "../UrlForAxios";

export const myPageLoad = createAsyncThunk(
  "/myPageLoad",
  async ({ account_id, owner_account_id, dispatch }) => {
    await axios
      .get(process.env.REACT_APP_MYPAGE, {
        params: {
          account_id: account_id,
          owner_account_id: owner_account_id
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        const mypage_data = res.data.data;
        dispatch(myPage(mypage_data));
      })
      .catch((err) => console.log(err));
  }
);

export const myPageSlice = createSlice({
  name: "myPage",
  initialState: {},
  reducers: {
    myPage: (state, action) => {
      state.myPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(myPageLoad.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(myPageLoad.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(myPageLoad.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      });
  },
});

export const { myPage } = myPageSlice.actions;
export default myPageSlice.reducer;