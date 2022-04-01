import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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

export const artworkPageLoad = createAsyncThunk(
  "/artworkPageLoad",
  (artworkID) => {
    URL.get(`/api/artwork/${artworkID}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
);

export const artworkDetailLoad = createAsyncThunk(
  "/artworkDetailLoad",
  (artworkID) => {
    URL.get(`/api/artwork/detail/${artworkID}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
)

export const PortfolioLoad = createAsyncThunk(
  "/PortfolioLoad",
  async ({ owner_account_id, dispatch }) => {
    console.log('owner: ', owner_account_id);
    await axios
      .get(process.env.REACT_APP_PORTFOLIO+`?owner_account_id=${owner_account_id}`)
      .then((res) => {
        console.log(res);
        const porfolio_data = res.data.data;
        dispatch(portfolios(porfolio_data));
        return porfolio_data
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
    portfolios: (state, action) => {
      state.portfolios = action.payload;
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
  },
});

export const { artworks, portfolios } = artworkSlice.actions;
export default artworkSlice.reducer;
