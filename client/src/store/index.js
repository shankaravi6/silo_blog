import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light"
};

export const modeSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    setMode: (state,action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
