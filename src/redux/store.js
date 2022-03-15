import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './modules/user';


export default configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});