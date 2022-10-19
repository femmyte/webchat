import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: JSON.parse(localStorage.getItem("user")) || {
    user: [],
    // userId: 1,
  },
  reducers: {
    addUser: (state, action) => {
      const { user, userId } = action.payload;
      state.user.push({ user, userId });
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          user: state.user,
        })
      );
      window.dispatchEvent(new Event("storage"));
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
