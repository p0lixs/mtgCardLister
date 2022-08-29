import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.value.push(action.payload);
    },
    removeCard: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    setList: (state, action) => {
      state.value = [...action.payload];
    },
  },
});
export const { addCard, removeCard, setList } = cardListSlice.actions;
export default cardListSlice.reducer;
