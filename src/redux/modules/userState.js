import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
      user: (state, action) => {
      state.user = action.payload;
      },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(kakaoSlice.pending, (state, action) => {
    //       console.log("pending");
    //     })
    //     .addCase(kakaoSlice.fulfilled, (state, action) => {
    //       console.log("create fulfiled");
    //     })
    //     .addCase(kakaoSlice.rejected, (state, action) => {
    //       console.log(action.error.message);
    //       console.log("create rejected");
    //     })
    //     .addCase(refreshSlice.pending, (state, action) => {
    //       console.log("pending");
    //     })
    //     .addCase(refreshSlice.fulfilled, (state, action) => {
    //       console.log("create fulfiled");
    //     })
    //     .addCase(refreshSlice.rejected, (state, action) => {
    //       console.log(action.error.message);
    //       console.log("create rejected");
    //     });
    // },
  });
  
  export const { user } = userSlice.actions;
  export default userSlice.reducer;