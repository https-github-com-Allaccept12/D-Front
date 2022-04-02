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
            });
    },
});

export const { dimos } = dimoSlice.actions;
export default dimoSlice.reducer;
