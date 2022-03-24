import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './modules/user';
import imageSlice from './modules/image';
import postSlice from "./modules/artWork";
import checkNicknameSlice from "./modules/checkNickname";
import profileSlice from "./modules/createProfile";
import tendencySlice from './modules/tendency';
import interestsSlice from './modules/interests';


export default configureStore({
  reducer: {
    user: userSlice,
    image: imageSlice,
    post: postSlice,
    checknickname: checkNicknameSlice,
    profile: profileSlice,
    tendency: tendencySlice,
    interests: interestsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});