import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL, token } from "../UrlForAxios";

export const CreateInterests = createAsyncThunk(
    'post/interests',
    async (interest, thunkAPI) => {
      await URL.post('/api/profile/interest', interest, {
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

export const interestsSlice = createSlice({
    name: 'interests',
    initialState: {},
    reducers: {
        interests: (state, action) => {
            state.interests = action.payload
        },
    },
  });

export const { interests } = interestsSlice.actions;
export default interestsSlice.reducer;