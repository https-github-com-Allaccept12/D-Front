import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL, token } from "../UrlForAxios";

const initialState = {
}

export const kakaoSlice = createAsyncThunk(
    'post/kakao',
    async ({code, history}) => {
      await URL.get(`/user/kakao/callback?code=${code}`)
        .then(res => {
            console.log(res);
            if (res.data.result === 'success') {
                let access_token = res.data.data.access_token;
                let refresh_token = res.data.data.refresh_token;
                let id = res.data.data.id;
                let have_to_signup = res.data.data.isSignUp;
                sessionStorage.setItem("access_token", access_token);
                sessionStorage.setItem("refresh_token", refresh_token);
                sessionStorage.setItem("acount_id", id);
                if (have_to_signup) {
                    history.push("/TendencyTest");
                } else{
                    refreshSlice({access_token, refresh_token});
                    window.location.href = "/";
                }
            }

        })
        .catch(err => console.log(err));
    },
  );

export const refreshSlice = createAsyncThunk(
    'post/refresh',
    async ({access_token, refresh_token}) => {
        await URL.post(`/user/refresh`, {
            headers: {
                "AccessAuthorization": "Bearer " + access_token,
                "RefreshAuthorization": "Bearer " + refresh_token,
            },
            withCredentials: true,
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }
)


export const postSlice = createSlice({
    name: 'kakao',
    initialState,
    reducer: {
        // setThumbnail: (state, action) => {
        // state.project.thumbNailNum = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
        .addCase(kakaoSlice.pending, (state, action) => {
            console.log('pending');
        })
        .addCase(kakaoSlice.fulfilled, (state, action) => {
            console.log('create fulfiled');
        })
        .addCase(kakaoSlice.rejected, (state, action) => {
            console.log(action.error.message);
            console.log('create rejected');
        })
        .addCase(refreshSlice.pending, (state, action) => {
            console.log('pending');
        })
        .addCase(refreshSlice.fulfilled, (state, action) => {
            console.log('create fulfiled');
        })
        .addCase(refreshSlice.rejected, (state, action) => {
            console.log(action.error.message);
            console.log('create rejected');
        })
        
    },
});

export default kakaoSlice.reducer;