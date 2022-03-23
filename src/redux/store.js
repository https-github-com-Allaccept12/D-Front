import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './modules/user';
import imageSlice from './modules/image';
import postSlice from "./modules/artWork";


export default configureStore({
  reducer: {
    user: userSlice,
    image: imageSlice,
    post: postSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});