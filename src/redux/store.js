import { configureStore } from '@reduxjs/toolkit';
import cardReducer from "../redux/features/card/cardslice"

export const store = configureStore({
  reducer: {
    card: cardReducer, // Add your reducer here
  },
});
