import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { refreshSlice } from "./temp";
import axios from "axios";
import { URL, token } from "../UrlForAxios";

//디모게시글 생성(어째선지 파일은 등록이 안됨)
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
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// /api/post/{post_id}
export const editDimo = createAsyncThunk("/editDimo", ({ post_id, formData }) => {
    for (var key of formData.keys()) {
        console.log(key);
    }

    for (var value of formData.values()) {
        console.log(value);
    }
    URL.patch(`/api/post/${post_id}`, formData, {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// 슬라이드 받아오는 애... 두개를 하나로합치고 useEffect를 먹여줬으나 그래도....
export const dimoPageLoad = createAsyncThunk("/dimoPageLoad", ({ dispatch, board, visitor_account_id }) => {
    URL.get(`/api/post/recommend/${board}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//카테고리 검색(전체보기 기능이 슬라이드랑 붙어있느라 디모엔 빠져서 uiux가 기본으로 나오게 세팅해둠 역시 페이지 폴더의 Dimo.js)
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
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//qna 상세보기 본문
export const dimoQnaDetailLoad = createAsyncThunk("/dimoQnaDetailLoad", ({ post_id, dispatch, visitor_account_id }) =>
    URL.get(`/api/post/question/${post_id}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            console.log(res);
            dispatch(detailDimoQna(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        }),
);

//qna 상세보기 유사한 질문
export const dimoQnaDetailSimilar = createAsyncThunk(
    "/dimoQnaDetailSimilar",
    ({ category, post_id, dispatch, visitor_account_id }) =>
        URL.get(`/api/post/question/similar/${category}/${post_id}`, {
            params: {
                visitor_account_id: visitor_account_id,
            },
        })
            .then((res) => {
                console.log(res);
                dispatch(dimoQnaDetailSimilars(res.data.data));
            })
            .catch((err) => {
                const access_token = sessionStorage.getItem("access_token");
                const refresh_token = sessionStorage.getItem("refresh_token");
                console.log(err.response.data.status);
                if (err.response.data.status == 444) {
                    console.log("here");
                    dispatch(refreshSlice({ access_token, refresh_token }));
                }
            }),
);

// 게시글에 좋아요 /api/post/like/{post_id} 근데 만들다보니 얘는 공통이라 qna에도 적용
export const likeDimoInfo = createAsyncThunk("/likeDimoInfo", (post_id) => {
    URL.post(`/api/post/like/${post_id}`, post_id, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//게시글에 안좋아요
export const dislikeDimoInfo = createAsyncThunk("/dislikeDimoInfo", (post_id) => {
    URL.delete(`/api/post/like/${post_id}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//북마크랑 북마크 취소
export const bookmarkAdd = createAsyncThunk("/bookmarkAdd", (post_id) => {
    URL.post(`/api/bookmark/post/${post_id}`, post_id, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

export const bookmarkRemove = createAsyncThunk("/bookmarkRemove", (post_id) => {
    URL.delete(`/api/bookmark/post/${post_id}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//info 상세보기
export const dimoInfoDetailLoad = createAsyncThunk("/dimoInfoDetailLoad", ({ post_id, dispatch, visitor_account_id }) =>
    URL.get(`/api/post/${post_id}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            console.log(res);

            dispatch(detailDimoInfo(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        }),
);

//  삭제 /api/post/{post_id}?category=’category’&board=’board’
export const deleteDimo = createAsyncThunk("/deleteDimo", ({ post_id, category, board }) => {
    URL.delete(`/api/post/${post_id}?board=${board}`, {
        headers: {
            // "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//답변삭제
export const deleteAnswerDimo = createAsyncThunk("/deleteAnswerDimo", (answer_id) => {
    URL.delete(`/api/post/answer/${answer_id}`, {
        headers: {
            // "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//답변달기 api
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
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//답변수정
export const editAnswerDimo = createAsyncThunk("/editAnswerDimo", async ({ answer_id, data }) => {
    await URL.patch(`/api/post/answer/${answer_id}`, data, {
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

//인포댓글달기
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
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// 인포에댓글 수정
export const commentModifyDimo = createAsyncThunk("/commentModifyDimo", ({ comment_id, data }) => {
    URL.patch(`/api/post/comment/${comment_id}`, data, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

// 인포댓글 삭제
export const commentDeleteDimo = createAsyncThunk("/commentDeleteDimo", (comment_id) => {
    URL.delete(`/api/post/comment/${comment_id}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

///api/post/search/{last_post_id}/{keyword} 검색기능
export const searchDimo = createAsyncThunk("/searchDimo", ({ keyword, dispatch, board, visitor_account_id }) => {
    URL.get(`/api/post/search/0/${board}/${keyword}`, {
        params: {
            visitor_account_id: visitor_account_id,
        },
    })
        .then((res) => {
            console.log(res);
            dispatch(dimos(res.data.data));
        })
        .catch((err) => {
            const access_token = sessionStorage.getItem("access_token");
            const refresh_token = sessionStorage.getItem("refresh_token");
            console.log(err.response.data.status);
            if (err.response.data.status == 444) {
                console.log("here");
                dispatch(refreshSlice({ access_token, refresh_token }));
            }
        });
});

///api/post/category/{category}/{last_post_id}/{board} 검색
export const orderByNewDimo = createAsyncThunk(
    "/orderByNewDimo",
    ({ category, dispatch, board, visitor_account_id }) => {
        URL.get(`/api/post/category/${category}/0/${board}`, {
            params: {
                visitor_account_id: visitor_account_id,
            },
        })
            .then((res) => {
                console.log(res);
                dispatch(dimos(res.data.data));
                sessionStorage.setItem("category", category);
            })
            .catch((err) => {
                const access_token = sessionStorage.getItem("access_token");
                const refresh_token = sessionStorage.getItem("refresh_token");
                console.log(err.response.data.status);
                if (err.response.data.status == 444) {
                    console.log("here");
                    dispatch(refreshSlice({ access_token, refresh_token }));
                }
            });
    },
);

// /api/post/category/like/{category}/{board}?start=0 검색
export const orderByLikeDimo = createAsyncThunk(
    "/orderByNewDimo",
    ({ category, dispatch, board, visitor_account_id }) => {
        URL.get(`/api/post/category/like/${category}/${board}?start=0`)
            .then((res) => {
                console.log(res);
                dispatch(dimos(res.data.data));
                sessionStorage.setItem("category", category);
            })
            .catch((err) => {
                const access_token = sessionStorage.getItem("access_token");
                const refresh_token = sessionStorage.getItem("refresh_token");
                console.log(err.response.data.status);
                if (err.response.data.status == 444) {
                    console.log("here");
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
            console.log(state);
            console.log(action);
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
            })

            .addCase(editDimo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(editDimo.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(editDimo.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })

            .addCase(orderByLikeDimo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(orderByLikeDimo.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(orderByLikeDimo.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            });
    },
});

export const { dimos, categoryDimos, detailDimoQna, dimoQnaDetailSimilars, detailDimoInfo } = dimoSlice.actions;
export default dimoSlice.reducer;
