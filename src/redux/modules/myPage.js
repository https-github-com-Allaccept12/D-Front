import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import skillList from "../../components/ArtWorks/skillList_code";

export const myPageLoad = createAsyncThunk(
  "/myPageLoad",
  async ({  owner_account_id, visitor_account_id, dispatch }) => {
    console.log(owner_account_id, visitor_account_id);
    await axios
      .get(process.env.REACT_APP_MYPAGE, {
        params: {
          owner_account_id: owner_account_id,
          visitor_account_id: visitor_account_id
        },
      })
      .then((res) => {
        console.log(res);
        const mypage_data = res.data.data;
        let temp = []
        let subspecialty = []
        if(res.data.data.specialty != null){
          temp = res.data.data.specialty.split('/');
          subspecialty = res.data.data.other_specialty.split('/');
        }
        const specialty = []
        temp.map((value) => {
            for(var item of skillList){
              if(item.label == value){
                specialty.push(item.value);
              }
            }
        })
        dispatch(myPage(mypage_data));
        dispatch(mySpecialty(specialty));
        dispatch(subSpecialty(subspecialty));
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
        // console.log(res);
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
        // console.log(res);
        dispatch(feed(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

// 북마크한 작업물
export const bookmarkList = createAsyncThunk(
  "/bookmarkList",
  async ({ visitor_account_id, dispatch }) => {
    // console.log(visitor_account_id),
    await axios
      .get(process.env.REACT_APP_MYPAGE+`/bookmark/0?visitor_account_id=${visitor_account_id}`)
      .then((res) => {
        // console.log(res);
        dispatch(bookmarked(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

// 내 게시글
export const myPostList = createAsyncThunk(
  "/myPostList",
  async ({ visitor_account_id, dispatch }) => {
    // console.log(visitor_account_id),
    await axios
      .get(process.env.REACT_APP_MYPAGE+`/community/myPost/INFO?start=0&visitor_account_id=${visitor_account_id}`)
      .then((res) => {
        // console.log(res);
        dispatch(myposts(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

// 북마크한 게시글
export const myBookMarkList = createAsyncThunk(
  "/myBookMarkList",
  async ({ visitor_account_id, dispatch }) => {
    // console.log(visitor_account_id),
    await axios
      .get(process.env.REACT_APP_MYPAGE+`/community/post/bookmark/INFO?start=0&visitor_account_id=${visitor_account_id}`)
      .then((res) => {
        // console.log(res);
        dispatch(mymarks(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

// 내 댓글
export const myCommentList = createAsyncThunk(
  "/myCommentList",
  async ({ visitor_account_id, dispatch }) => {
    // console.log(visitor_account_id),
    await axios
      .get(process.env.REACT_APP_MYPAGE+`/community/mycomment?start=0&visitor_account_id=${visitor_account_id}`)
      .then((res) => {
        // console.log(res);
        dispatch(mycomments(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

// 내 QNA
export const myQNAList = createAsyncThunk(
  "/myQNAList",
  async ({ visitor_account_id, dispatch }) => {
    // console.log(visitor_account_id),
    await axios
      .get(process.env.REACT_APP_MYPAGE+`/community/myPost/QNA?start=0&visitor_account_id=${visitor_account_id}`)
      .then((res) => {
        // console.log(res);
        dispatch(myqnas(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

// 내 답글
export const myAnswerList = createAsyncThunk(
  "/myAnswerList",
  async ({ visitor_account_id, dispatch }) => {
    // console.log(visitor_account_id),
    await axios
      .get(process.env.REACT_APP_MYPAGE+`/community/myanswer?start=0&visitor_account_id=${visitor_account_id}`)
      .then((res) => {
        // console.log(res);
        dispatch(myanswers(res.data.data));
      })
      .catch((err) => console.log(err));
  }
);

export const myPageSlice = createSlice({
  name: "myPage",
  initialState: {myPage:{specialty: '', mySpecialty:[], subSpecialty:[], lengthSpecialty:'',}},
  // initialState: {},
  reducers: {
    myPage: (state, action) => {
      state.myPage = action.payload;
    },
    mySpecialty: (state, action) => {
      state.mySpecialty = action.payload;
    },
    subSpecialty: (state, action) => {
      state.subSpecialty = action.payload;
    },
    history: (state, action) => {
      state.history = action.payload;
    },
    feed: (state, action) => {
      state.careerFeed = action.payload;
    },
    bookmarked: (state, action) => {
      state.bookmarked = action.payload;
    },
    myposts: (state, action) => {
      state.myposts = action.payload;
    },
    mymarks: (state, action) => {
      state.mymarks = action.payload;
    },
    mycomments: (state, action) => {
      state.mycomments = action.payload;
    },
    myqnas: (state, action) => {
      state.myqnas = action.payload;
    },
    myanswers: (state, action) => {
      state.myanswers = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(myPageLoad.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(myPageLoad.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(myPageLoad.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(historyLoad.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(historyLoad.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(historyLoad.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(careerFeed.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(careerFeed.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(careerFeed.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(bookmarkList.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(bookmarkList.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(bookmarkList.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(myPostList.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(myPostList.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(myPostList.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(myBookMarkList.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(myBookMarkList.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(myBookMarkList.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(myCommentList.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(myCommentList.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(myCommentList.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(myQNAList.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(myQNAList.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(myQNAList.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      })
      .addCase(myAnswerList.pending, (state, action) => {
        // console.log("pending");
      })
      .addCase(myAnswerList.fulfilled, (state, action) => {
        // console.log("create fulfiled");
      })
      .addCase(myAnswerList.rejected, (state, action) => {
        // console.log(action.error.message);
        // console.log("create rejected");
      });
  },
});

export const { myPage, mySpecialty, subSpecialty, history, feed, bookmarked, myposts, mymarks, mycomments, myqnas, myanswers } = myPageSlice.actions;
export default myPageSlice.reducer;
