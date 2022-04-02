import React from "react";
import { configureStore } from "@reduxjs/toolkit";

// import userSlice from "./modules/user";
import imageSlice from "./modules/image";
import postSlice from "./modules/artWork";
import checkNicknameSlice from "./modules/checkNickname";
import profileSlice from "./modules/createProfile";
import tendencySlice from "./modules/tendency";
import interestsSlice from "./modules/interests";
import mainPageSlice from "./modules/mainPageLoad";
import myPageSlice from "./modules/myPage";
import mainPageArtistsSlice from "./modules/mainPageReducer";
import artworkSlice from "./modules/artWork";
import userSlice from "./modules/userState";
import dimoSlice from "./modules/dimo";

export default configureStore({
    reducer: {
        // user: userSlice,
        image: imageSlice,
        post: postSlice,
        checknickname: checkNicknameSlice,
        profile: profileSlice,
        tendency: tendencySlice,
        interests: interestsSlice,
        mainPageLoad: mainPageSlice,
        mainPage: mainPageArtistsSlice,
        artwork: artworkSlice,
        myPage: myPageSlice,
        user: userSlice,
        dimo: dimoSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
