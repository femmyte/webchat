import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./action/user";
import messageSlice from "./action/message";
export const store = configureStore({
  reducer: {
    users: userSlice,
    messages: messageSlice,
  },
  devTools: true,
});
