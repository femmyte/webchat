import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./action/user";
import messageSlice from "./action/message";
export const store = configureStore({
  reducer: {
    users: userSlice,
    message: messageSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
