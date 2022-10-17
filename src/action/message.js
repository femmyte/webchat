import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "",
  },
  reducers: {
    message: (state, action) => {
      state.message += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { message } = messageSlice.actions;

export default messageSlice.reducer;

// export function user() {
//   return {
//     type: "ADD",
//   };
// }
