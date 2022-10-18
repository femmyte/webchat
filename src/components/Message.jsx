import React, { useStatem, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateMessage from "./CreateMessage";

const Message = () => {
  const user = useSelector((state) => state.users);
  const message = useSelector((state) => state.messages);
  message.message.map((item) => console.log(item));

  return (
    <div>
      <p>{user.value}</p>
      {message.message.map((item) => (
        <p>{item}</p>
      ))}
      <p>create New Message</p>
      <CreateMessage />
    </div>
  );
};

export default Message;
