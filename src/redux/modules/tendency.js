import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { URL } from "../UrlForAxios";


export const CreateTendency = createAsyncThunk(
  "post/tendency",
  ({tendency, token},thunkAPI) => {
    URL.post("/api/tendency", tendency, {
      headers: {
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

export const tendencySlice = createSlice({
  name: "tendency",
  initialState: {},
  reducers: {
    tendency: (state, action) => {
      state.tendency = action.payload;
    },
  },
});

export const { tendency } = tendencySlice.actions;
export default tendencySlice.reducer;
