import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    console.log('d');
    name: "user",
    initialState: { value: {name: "", age: 0, email: ""}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
});

export default userSlice.reducer;