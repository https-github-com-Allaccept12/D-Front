import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL, token } from "../UrlForAxios";
import axios from "axios";

const initialState = {
}

export const CreateNewArtWork = createAsyncThunk(
    'post/CreateNewArtWork',
    async (formData, thunkAPI) => {
      await URL.post('/api/artwork', formData, {
        headers: {
            "content-type": "multipart/form-data",
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

  export const Test = createAsyncThunk(
    'post/Test',
    async (data, thunkAPI) => {
      await URL.post('/api/artwork', data, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer "+token,
        },
        withCredentials: true,})
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    },
  );

//   export const CreateNewArtWork = createAsyncThunk(
//     'post/CreateNewArtWork',
//     async (data, thunkAPI) => {
//       await URL.post('/api/profile/nickname/aaaaaaa', data, {
//         headers: {
//             // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarynHlbq58vtkmKcQMl",
//             // "content-type": "multipart/form-data",
//             "Authorization": "Bearer " + token,
//         },
//         })
//         .then(res => {
//             console.log(res);
//         })
//         .catch(err => console.log(err));
//     },
//   );


//   export const CreateNewArtWork = createAsyncThunk(
//     "post/CreateNewArtWork",
//     async (data) => {
//       const resp = await postArticle(data);
//       console.log(resp);
//       // return resp;
//     },
//   );


// export 

//   async postArticle(data) {
//     const postArticleConfig = {
//       method: "POST",
//       url: `${URL}/api/artwork`,
//       headers: {
//         "Content-Type": "application/json",
//         "X-AUTH-TOKEN": token,
//       },
//       data: JSON.stringify(data),
//     };
//     return axios(postArticleConfig)
//       .then(res => {
//         return res;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }









export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducer: {
        // setThumbnail: (state, action) => {
        // state.project.thumbNailNum = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
        .addCase(CreateNewArtWork.pending, (state, action) => {
            console.log('pending');
        })
        .addCase(CreateNewArtWork.fulfilled, (state, action) => {
            console.log('create fulfiled');
        })
        .addCase(CreateNewArtWork.rejected, (state, action) => {
            console.log(action.error.message);
            console.log('create rejected');
        })
        .addCase(Test.rejected, (state, action) => {
            console.log(action.error.message);
            console.log('create rejected');
        })
    },
});

export default postSlice.reducer;