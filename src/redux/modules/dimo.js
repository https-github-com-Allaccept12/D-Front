import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { refreshSlice } from "./temp";
import axios from "axios";
import { URL, token } from "../UrlForAxios";
import { useDispatch as dispatch } from "react-redux";

//
export const CreateNewDimo = createAsyncThunk("post/CreateDimo", async (formData, thunkAPI) => {
    await URL.post("/api/post", formData, {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// /api/post/{post_id}
export const editDimo = createAsyncThunk("/editDimo", ({ post_id, formData }) => {
    for (var key of formData.keys()) {
        // console.log(key);
    }

    for (var value of formData.values()) {
        // console.log(value);
    }
    URL.patch(`/api/post/${post_id}`, formData, {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// ..
export const dimoPageLoad = createAsyncThunk("/dimoPageLoad", ({ dispatch, board, visitor_account_id }) => {
    URL.get(`/api/post/recommend/${board}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            // console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//???????????? ??????(???????????? ????????? ??????????????? ??????????????? ????????? ????????? uiux??? ???????????? ????????? ???????????? ?????? ????????? ????????? Dimo.js)
export const categoryDimo = createAsyncThunk("/categoryDimo", ({ category, dispatch, board, visitor_account_id }) => {
    console.log(category, board);
    URL.get(`/api/post/category/${category}/0/${board}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            console.log(res);
            dispatch(categoryDimos(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//qna ???????????? ??????
export const dimoQnaDetailLoad = createAsyncThunk("/dimoQnaDetailLoad", ({ post_id, dispatch, visitor_account_id }) =>
    URL.get(`/api/post/question/${post_id}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            // console.log(res);
            dispatch(detailDimoQna(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        }),
);

//qna ???????????? ????????? ??????
export const dimoQnaDetailSimilar = createAsyncThunk(
    "/dimoQnaDetailSimilar",
    ({ category, post_id, dispatch, visitor_account_id }) =>
        URL.get(`/api/post/question/similar/${category}/${post_id}`, {
            params: {
                visitor_account_id: visitor_account_id,
            },
        })
            .then((res) => {
                // console.log(res);
                dispatch(dimoQnaDetailSimilars(res.data.data));
            })
            .catch((err) => {
                const access_token = sessionStorage.getItem("access_token");
                const refresh_token = sessionStorage.getItem("refresh_token");
                // console.log(err.response.data.status);
                if (err.response.data.status == 444) {
                    // console.log("here");
                    dispatch(refreshSlice({ access_token, refresh_token }));
                }
            }),
);

// ???????????? ????????? /api/post/like/{post_id} ?????? ??????????????? ?????? ???????????? qna?????? ??????
export const likeDimoInfo = createAsyncThunk("/likeDimoInfo", (post_id) => {
    const data = { id: post_id };
    URL.post(`/api/post/like`, data, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//???????????? ????????????
export const dislikeDimoInfo = createAsyncThunk("/dislikeDimoInfo", (post_id) => {
    const data = { id: post_id };
    URL.patch(`/api/post/like`, data, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//???????????? ????????? ??????
export const bookmarkAdd = createAsyncThunk("/bookmarkAdd", (post_id) => {
    const data = { id: post_id };
    URL.post(`/api/bookmark/post`, data, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

export const bookmarkRemove = createAsyncThunk("/bookmarkRemove", (post_id) => {
    const data = { id: post_id };
    URL.patch(`/api/bookmark/post`, data, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//info ????????????
export const dimoInfoDetailLoad = createAsyncThunk("/dimoInfoDetailLoad", ({ post_id, dispatch, visitor_account_id }) =>
    URL.get(`/api/post/${post_id}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            // console.log(res);

            dispatch(detailDimoInfo(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        }),
);

//  ?????? /api/post/{post_id}?category=???category???&board=???board???
export const deleteDimo = createAsyncThunk("/deleteDimo", ({ post_id, category, board }) => {
    // URL.delete(`/api/post/del/${post_id}?board=${board}`, {
    URL.patch(`/api/post/del/${post_id}`, {
        headers: {
            // "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//????????????
export const deleteAnswerDimo = createAsyncThunk("/deleteAnswerDimo", (answer_id) => {
    URL.patch(`/api/post/del/answer/${answer_id}`, {
        headers: {
            // "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//???????????? api
export const CreateAnswerDimo = createAsyncThunk("/CreateAnswerDimo", async (data, thunkAPI) => {
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
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//????????????
export const editAnswerDimo = createAsyncThunk("/editAnswerDimo", async ({ data }) => {
    await URL.patch(`/api/post/answer`, data, {
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//????????????
export const selectAnswerDimo = createAsyncThunk("/selectAnswerDimo", async ({ answer_id }) => {
    const data = { id: answer_id };
    await URL.patch(`/api/post/answer/select`, data, {
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//??????????????????
export const CreateInfoDimo = createAsyncThunk("/CreateInfoDimo", async (data, thunkAPI) => {
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
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// ??????????????? ??????
export const commentModifyDimo = createAsyncThunk("/commentModifyDimo", ({ comment_id, data }) => {
    URL.patch(`/api/post/comment/${comment_id}`, data, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// ???????????? ??????
export const commentDeleteDimo = createAsyncThunk("/commentDeleteDimo", (comment_id) => {
    URL.patch(`/api/post/comment/del/${comment_id}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            // console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

///api/post/search/{last_post_id}/{keyword} ????????????
export const searchDimo = createAsyncThunk("/searchDimo", ({ keyword, dispatch, board, visitor_account_id }) => {
    URL.get(`/api/post/search/0/${board}/${keyword}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            // console.log(res);
            dispatch(categoryDimos(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            // console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                // console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

///api/post/category/{category}/{last_post_id}/{board} ??????
export const orderByNewDimo = createAsyncThunk(
    "/orderByNewDimo",
    ({ category, dispatch, board, visitor_account_id }) => {
        URL.get(`/api/post/category/${category}/0/${board}`, {
            params: {
                visitor_account_id: visitor_account_id,
            },
        })
            .then((res) => {
                // console.log(res);
                dispatch(categoryDimos(res.data.data));
                sessionStorage.setItem("category", category);
            })
            .catch((err) => {
                const access_token = sessionStorage.getItem("access_token");
                const refresh_token = sessionStorage.getItem("refresh_token");
                // console.log(err.response.data.status);
                if (err.response.data.status == 444) {
                    // console.log("here");
                    dispatch(refreshSlice({ access_token, refresh_token }));
                }
            });
    },
);

// /api/post/category/like/{category}/{board}?start=0 ??????
export const orderByLikeDimo = createAsyncThunk(
    "/orderByNewDimo",
    ({ category, dispatch, board, visitor_account_id }) => {
        URL.get(`/api/post/category/like/${category}/${board}?start=0`)
            .then((res) => {
                // console.log(res);
                dispatch(categoryDimos(res.data.data));
                sessionStorage.setItem("category", category);
            })
            .catch((err) => {
                const access_token = sessionStorage.getItem("access_token");
                const refresh_token = sessionStorage.getItem("refresh_token");
                // console.log(err.response.data.status);
                if (err.response.data.status == 444) {
                    // console.log("here");
                    dispatch(refreshSlice({ access_token, refresh_token }));
                }
            });
    },
);

export const dimoSlice = createSlice({
    name: "dimo",
    initialState: { dimos: { postRecommendationFeed: [] } },
    reducers: {
        dimos: (state, action) => {
            // console.log(state);
            // console.log(action);
            state.dimos = action.payload;
        },
        dimoSearch: (state, action) => {
            state.dimos = action.payload;
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
                // console.log("pending");
            })
            .addCase(CreateNewDimo.fulfilled, (state, action) => {
                // console.log("create fulfiled");
            })
            .addCase(CreateNewDimo.rejected, (state, action) => {
                // console.log(action.error.message);
                // console.log("create rejected");
            })

            .addCase(CreateAnswerDimo.pending, (state, action) => {
                // console.log("pending");
            })
            .addCase(CreateAnswerDimo.fulfilled, (state, action) => {
                // console.log("create fulfiled");
            })
            .addCase(CreateAnswerDimo.rejected, (state, action) => {
                // console.log(action.error.message);
                // console.log("create rejected");
            })

            .addCase(CreateInfoDimo.pending, (state, action) => {
                // console.log("pending");
            })
            .addCase(CreateInfoDimo.fulfilled, (state, action) => {
                // console.log("create fulfiled");
            })
            .addCase(CreateInfoDimo.rejected, (state, action) => {
                // console.log(action.error.message);
                // console.log("create rejected");
            })

            .addCase(editDimo.pending, (state, action) => {
                // console.log("pending");
            })
            .addCase(editDimo.fulfilled, (state, action) => {
                // console.log("create fulfiled");
            })
            .addCase(editDimo.rejected, (state, action) => {
                // console.log(action.error.message);
                // console.log("create rejected");
            })

            .addCase(selectAnswerDimo.pending, (state, action) => {
                // console.log("pending");
            })
            .addCase(selectAnswerDimo.fulfilled, (state, action) => {
                // console.log("create fulfiled");
            })
            .addCase(selectAnswerDimo.rejected, (state, action) => {
                // console.log(action.error.message);
                // console.log("create rejected");
            })

            .addCase(orderByLikeDimo.pending, (state, action) => {
                // console.log("pending");
            })
            .addCase(orderByLikeDimo.fulfilled, (state, action) => {
                // console.log("create fulfiled");
            })
            .addCase(orderByLikeDimo.rejected, (state, action) => {
                // console.log(action.error.message);
                // console.log("create rejected");
            });
    },
});

export const { dimos, categoryDimos, dimosSearch, detailDimoQna, dimoQnaDetailSimilars, detailDimoInfo } =
    dimoSlice.actions;
export default dimoSlice.reducer;
