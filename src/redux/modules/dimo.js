import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL, token } from "../UrlForAxios";

export const CreateNewDimo = createAsyncThunk("post/CreateDimo", async (formData, thunkAPI) => {
    await URL.post("/api/post", formData, {
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
});

export const dimoPageLoadQna = createAsyncThunk("/dimoPageLoad", (dispatch, board) => {
    URL.get(`/api/post/recommend/QNA`)
        .then((res) => {
            console.log(res);
            dispatch(dimosQNA(res.data.data));
        })
        .catch((err) => console.log(err));
});

export const dimoPageLoadInfo = createAsyncThunk("/dimoPageLoad", (dispatch, board) => {
    URL.get(`/api/post/recommend/INFO`)
        .then((res) => {
            console.log(res);
            dispatch(dimosINFO(res.data.data));
        })
        .catch((err) => console.log(err));
});

//카테고리
export const categoryDimo = createAsyncThunk("/categoryDimo", ({ category, dispatch, board }) => {
    console.log(category, board);
    URL.get(`/api/post/category/${category}/0/${board}`)
        .then((res) => {
            console.log(res);
            dispatch(categoryDimos(res.data.data));
        })
        .catch((err) => console.log(err));
});

//qna 상세보기
export const dimoQnaDetailSimilar = createAsyncThunk("/dimoQnaDetailSimilar", ({ category, post_id, dispatch }) =>
    URL.get(`/api/post/question/similar/${category}/${post_id}`)
        .then((res) => {
            console.log(res);
            dispatch(dimoQnaDetailSimilars(res.data.data));
        })
        .catch((err) => console.log(err)),
);

export const dimoQnaDetailLoad = createAsyncThunk("/dimoQnaDetailLoad", ({ post_id, dispatch }) =>
    URL.get(`/api/post/question/${post_id}`)
        .then((res) => {
            console.log(res);
            dispatch(detailDimoQna(res.data.data));
        })
        .catch((err) => console.log(err)),
);

//info 상세보기
export const dimoInfoDetailLoad = createAsyncThunk("/dimoInfoDetailLoad", ({ post_id, dispatch }) =>
    URL.get(`/api/post/${post_id}`)
        .then((res) => {
            console.log(res);
            dispatch(detailDimoInfo(res.data.data));
        })
        .catch((err) => console.log(err)),
);

export const searchDimo = createAsyncThunk("/searchDimo", ({ keyword, dispatch }) => {
    URL.get(`/api/post/search/0/${keyword}`)
        .then((res) => {
            console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => console.log(err));
});

// 삭제 /api/post/{post_id}?category=’category’&board=’board’
export const deleteDimo = createAsyncThunk("/deleteDimo", (post_id, category, board) => {
    URL.delete(`/api/post/${post_id}?category=${category}&board=${board}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
});

export const CreateAnswerDimo = createAsyncThunk("post/CreateAnswerDimo", async (data, thunkAPI) => {
    const { content, post_id } = data;
    // console.log(content);
    await URL.post(`/api/post/answer/${post_id}`, data, {
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
});

export const CreateInfoDimo = createAsyncThunk("post/CreateInfoDimo", async (data, thunkAPI) => {
    const { content, post_id } = data;
    // console.log(content);
    await URL.post(`/api/post/comment/${post_id}`, data, {
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
});

export const dimoSlice = createSlice({
    name: "dimo",
    initialState: {},
    reducers: {
        dimos: (state, action) => {
            state.dimos = action.payload;
        },
        dimosQNA: (state, action) => {
            state.dimosQNA = action.payload;
        },
        dimosINFO: (state, action) => {
            state.dimosINFO = action.payload;
        },
        detailDimoQna: (state, action) => {
            state.detaildimoQna = action.payload;
        },
        dimoQnaDetailSimilars: (state, action) => {
            state.dimoQnaDetailSimilars = action.payload;
        },

        detailDimoInfo: (state, action) => {
            state.detailDimoInfo = action.payload;
        },
        categoryDimos: (state, action) => {
            state.categoryDimos = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(CreateNewDimo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(CreateNewDimo.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(CreateNewDimo.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })

            .addCase(CreateAnswerDimo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(CreateAnswerDimo.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(CreateAnswerDimo.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })

            .addCase(CreateInfoDimo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(CreateInfoDimo.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(CreateInfoDimo.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            });
    },
});

export const { dimos, dimosQNA, dimosINFO, categoryDimos, detailDimoQna, dimoQnaDetailSimilars, detailDimoInfo } =
    dimoSlice.actions;
export default dimoSlice.reducer;
