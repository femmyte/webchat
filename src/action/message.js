import { createSlice, nanoid } from "@reduxjs/toolkit";
import dateFormat, { masks } from "dateformat";
const now = new Date();
let id = now.getTime().toString();

const userMessageSlice = createSlice({
  name: "messages",
  initialState: JSON.parse(localStorage.getItem("item")) || {
    message: [],
    id: JSON.parse(localStorage.getItem("userId")),
  },
  reducers: {
    addUserId: (state, action) => {
      state.id = action.payload;
    },
    addMessage: (state, action) => {
      state.message.push({
        m: action.payload,
        time: dateFormat(now, "longTime"),
        userId: state.id,
      });
      window.localStorage.setItem(
        "item",
        JSON.stringify({
          message: state.message,
        })
      );
      window.dispatchEvent(new Event("storage"));
    },
  },
});
export const { addMessage, addUserId } = userMessageSlice.actions;

export default userMessageSlice.reducer;
