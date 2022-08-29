import { configureStore } from '@reduxjs/toolkit';
import cardlistReducer from './features/cardList/cardListSlice';

export default configureStore({
  reducer: {
    cardList: cardlistReducer,
  },
});
