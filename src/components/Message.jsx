import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateMessage from "./CreateMessage";
import { addMessage } from "../action/message";

const Message = () => {
  // const user = useSelector((state) => state.users);
  let message = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const handleFetch = () => {
    return JSON.parse(localStorage.getItem("item"));
  };
  let item = handleFetch();
  const handleFetchUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  window.addEventListener("storage", handleFetchUser);
  let user = handleFetchUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(msg));
    setMsg("");
  };

  document.addEventListener("visibilitychange", () => {
    console.log("changed");
    window.location.reload();
  });

  return (
    <div>
      {item && item.message.map((it) => <p key={item.id}>{it}</p>)}
      {}
      {/* {user && <p>{user.user[0]}</p>} */}
      {/* {user && user.user.map((it) => <p key={user.userId}>{it}</p>)} */}
      <p>create New Message</p>
      <CreateMessage />
    </div>
  );
};

export default Message;
