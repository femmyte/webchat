import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("item")) || {
  value: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("user", JSON.stringify(state.value));
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
