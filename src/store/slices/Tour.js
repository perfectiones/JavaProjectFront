import { createSlice } from '@reduxjs/toolkit';

const changeSlice = createSlice({
  name: 'change',
  initialState: {
    value: "edy",
  },
  reducers: {
    edy: state => {
      state.value = "edu";
    },
    neEdy: state => {
      state.value = "neEdy";
    },
  },
});

export const { edy, neEdy } = changeSlice.actions;
export default changeSlice.reducer;