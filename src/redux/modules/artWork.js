import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL, token } from "../UrlForAxios";

// 작품 등록
export const CreateNewArtWork = createAsyncThunk("post/CreateNewArtWork", async (formData, thunkAPI) => {
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
});

// 모아보기 페이지 로드
export const artworkPageLoad = createAsyncThunk("/artworkPageLoad", (dispatch) => {
    URL.get(`/api/artwork/0`)
        .then((res) => {
            console.log(res);
            dispatch(artworks(res.data.data));
        })
        .catch((err) => console.log(err));
});

// 아트워크 상세페이지
export const artworkDetailLoad = createAsyncThunk("/artworkDetailLoad", ({ id, dispatch }) => {
    URL.get(`/api/artwork/detail/${id}`)
        .then((res) => {
            console.log(res);
            dispatch(detailArtwork(res.data.data));
        })
        .catch((err) => console.log(err));
});

// 내 작품 불러오기
export const PortfolioLoad = createAsyncThunk("/PortfolioLoad", async ({ owner_account_id, dispatch }) => {
    console.log("owner: ", owner_account_id);
    await axios
        .get(process.env.REACT_APP_PORTFOLIO + `/0?owner_account_id=${owner_account_id}`)
        .then((res) => {
            console.log(res);
            const porfolio_data = res.data.data;
            dispatch(portfolios(porfolio_data));
            return porfolio_data;
        })
        .catch((err) => console.log(err));
});

// 대표작품 설정
export const getMaster = createAsyncThunk("/getMaster", (artwork_id) => {
    URL.delete(`/api/my-page/masterpiece/${artwork_id}`, {
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

// 대표작품 해제
export const removeMaster = createAsyncThunk("/removeMaster", (artwork_id) => {
    URL.delete(`/api/my-page/masterpiece/${artwork_id}`, {
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

// 공개 비공개 전환
export const updateScope = createAsyncThunk("/updateScope", (artwork_id) => {
    URL.delete(`/api/my-page/hidepiece/${artwork_id}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
        withCredentials: true,
    })
        .then((res) => {
            console.log(token, artwork_id);
            console.log(res);
        })
        .catch((err) => console.log(err));
});

// 작품 삭제
export const deleteArtwork = createAsyncThunk("/deleteArtwork", (artwork_id) => {
    URL.delete(`/api/artwork/${artwork_id}/${category}`, {
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

// 작품 검색
export const searchArtwork = createAsyncThunk("/searchArtwork", ({ keyword, dispatch }) => {
    URL.get(`/api/artwork/search/0/${keyword}`)
        .then((res) => {
            console.log(res);
            dispatch(artworks(res.data.data));
        })
        .catch((err) => console.log(err));
});

// 카테고리로 검색
export const categoryArtwork = createAsyncThunk("/categoryArtwork", ({ category, dispatch }) => {
    URL.get(`/api/artwork/category/${category}/0`)
        .then((res) => {
            console.log(res);
            dispatch(artworks(res.data.data));
        })
        .catch((err) => console.log(err));
});

// 댓글 등록
export const submitComment = createAsyncThunk("/categoryArtwork", ({ artwork_id, data }) => {
    URL.post(`/api/artwork/comment/${artwork_id}`, data, {
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

// 댓글 수정
export const commentModify = createAsyncThunk("/commentModify", ({ comment_id, data }) => {
    URL.patch(`/api/artwork/comment/${comment_id}`, data, {
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

// 댓글 삭제
export const commentDelete = createAsyncThunk("/commentDelete", (comment_id) => {
    URL.delete(`/api/artwork/comment/${comment_id}`, {
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

export const artworkSlice = createSlice({
    name: "artwork",
    initialState: {},
    reducers: {
        artworks: (state, action) => {
            state.artworks = action.payload;
        },
        portfolios: (state, action) => {
            state.portfolios = action.payload;
        },
        detailArtwork: (state, action) => {
            state.detailArtwork = action.payload;
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
            })
            .addCase(PortfolioLoad.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(PortfolioLoad.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(PortfolioLoad.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(getMaster.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(getMaster.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(getMaster.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(removeMaster.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(removeMaster.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(removeMaster.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(updateScope.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(updateScope.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(updateScope.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(deleteArtwork.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(deleteArtwork.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(deleteArtwork.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(searchArtwork.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(searchArtwork.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(searchArtwork.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(categoryArtwork.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(categoryArtwork.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(categoryArtwork.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(commentDelete.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(commentDelete.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(commentDelete.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            })
            .addCase(commentModify.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(commentModify.fulfilled, (state, action) => {
                console.log("create fulfiled");
            })
            .addCase(commentModify.rejected, (state, action) => {
                console.log(action.error.message);
                console.log("create rejected");
            });
    },
});

export const { artworks, portfolios, detailArtwork } = artworkSlice.actions;
export default artworkSlice.reducer;
