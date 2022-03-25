import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL, token } from "../UrlForAxios";

export const CreateTendency = createAsyncThunk(
    'post/tendency',
    async (tendency, thunkAPI) => {
      await URL.post('/api/tendency', tendency, {
        headers: {
            "Authorization": "Bearer " + token,
        },
        withCredentials: true,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    },
  );


export const tendencySlice = createSlice({
    name: 'tendency',
    initialState: {},
    reducers: {
        tendency: (state, action) => {
            state.tendency = action.payload
        },
    },
  });

export const { tendency } = tendencySlice.actions;
export default tendencySlice.reducer;