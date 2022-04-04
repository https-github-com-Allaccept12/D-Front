import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { artists, artworks } from "./mainPageReducer";
import { preview } from "./image";
import { URL, token, account_id } from "../UrlForAxios";

export const myPageLoad = createAsyncThunk(
  "/myPageLoad",
  async ({ visitor_account_id, owner_account_id, dispatch }) => {
    await axios
      .get(process.env.REACT_APP_MYPAGE, {
        params: {
          visitor_account_id: visitor_account_id,
          owner_account_id: owner_account_id
        },
      })
      .then((res) => {
        console.log(res);
        const mypage_data = res.data.data;
        dispatch(myPage(mypage_data));
        return mypage_data;
      })
      .catch((err) => console.log(err));
  }
);

export const historyLoad = createAsyncThunk(
  "/historyLoad",
  async ({ owner_account_id, dispatch }) => {
    await axios
      .get(process.env.REACT_APP_MYPAGE+'/history', {
        params: {
          owner_account_id: owner_account_id
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(history(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

export const careerFeed = createAsyncThunk(
  "/careerFeed",
  async ({ owner_account_id, dispatch }) => {
    await axios
      .get(process.env.REACT_APP_MYPAGE+'/career-feed', {
        params: {
          owner_account_id: owner_account_id
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(feed(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

// 북마크한 작업물
export const bookmarkList = createAsyncThunk(
  "/bookmarkList",
  async ({ visitor_account_id, dispatch }) => {
    console.log(visitor_account_id),
    await axios
      .get(process.env.REACT_APP_MYPAGE+`/bookmark/0?visitor_account_id=${visitor_account_id}`)
      .then((res) => {
        console.log(res);
        dispatch(bookmarked(res.data.data));
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
    history: (state, action) => {
      state.history = action.payload;
    },
    feed: (state, action) => {
      state.careerFeed = action.payload;
    },
    bookmarked: (state, action) => {
      state.bookmarked = action.payload;
    }
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
      })
      .addCase(historyLoad.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(historyLoad.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(historyLoad.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      })
      .addCase(careerFeed.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(careerFeed.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(careerFeed.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      })
      .addCase(bookmarkList.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(bookmarkList.fulfilled, (state, action) => {
        console.log("create fulfiled");
      })
      .addCase(bookmarkList.rejected, (state, action) => {
        console.log(action.error.message);
        console.log("create rejected");
      });
  },
});

export const { myPage, history, feed, bookmarked } = myPageSlice.actions;
export default myPageSlice.reducer;
