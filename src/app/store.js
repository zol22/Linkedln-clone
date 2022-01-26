import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

/* 
  Store : We pass it to the top level component which is index.js to give every component under it
  access to any variable stored in redux

   Reducer: Add the reducer to their configure store to make sure it's available to any
   component that wants to use it.
*/
