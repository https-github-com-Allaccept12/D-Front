import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './modules/user';
import imageSlice from './modules/image';


export default configureStore({
  reducer: {
    user: userSlice,
    image: imageSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});