import { createSlice } from "@reduxjs/toolkit";
import dateFormat, { masks } from "dateformat";
const now = new Date();
let id = now.getTime().toString();
const userMessageSlice = createSlice({
  name: "messages",
  initialState: JSON.parse(localStorage.getItem("item")) || {
    message: [],
    id: 1,
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload, dateFormat(now, "longTime"));
      state.id += id;
      localStorage.setItem(
        "item",
        JSON.stringify({
          message: state.message,
          id: state.id,
        })
      );
    },
  },
});
export const { addMessage } = userMessageSlice.actions;

export default userMessageSlice.reducer;
