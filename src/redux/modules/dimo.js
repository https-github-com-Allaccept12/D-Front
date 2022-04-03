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

export const dimoPageLoadQna = createAsyncThunk("/dimoPageLoad", (dispatch) => {
    URL.get(`/api/post/0/qna`)
        .then((res) => {
            console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => console.log(err));
});

export const dimoPageLoadInfo = createAsyncThunk("/dimoPageLoad", (dispatch) => {
    URL.get(`/api/post/0/info`)
        .then((res) => {
            console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => console.log(err));
});

export const searchDimo = createAsyncThunk("/searchDimo", ({ keyword, dispatch }) => {
    URL.get(`/api/post/search/0/${keyword}`)
        .then((res) => {
            console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => console.log(err));
});

// 없음...?
export const categoryDimo = createAsyncThunk("/categoryDimo", ({ category, dispatch }) => {
    URL.get(`/api/post/category/${category}/0`)
        .then((res) => {
            console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => console.log(err));
});

export const dimoSlice = createSlice({
    name: "dimo",
    initialState: {},
    reducers: {
        dimo: (state, action) => {
            state.dimos = action.payload;
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
            .addCase(searchDimo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(searchDimo.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(searchDimo.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(categoryDimo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(categoryDimo.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(categoryDimo.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            });
    },
});

export const { dimos } = dimoSlice.actions;
export default dimoSlice.reducer;
