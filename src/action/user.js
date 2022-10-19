import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: JSON.parse(localStorage.getItem("user")) || {
    user: [],
    userId: 1,
  },
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
      state.userId += 1;
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          user: state.user,
          userId: state.userId,
        })
      );
      window.dispatchEvent(new Event("storage"));
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
