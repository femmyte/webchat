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
  item.message.map((it) => console.log(it.m));
  // console.log(item.message);
  return (
    <div className="flex flex-col h-full overflow-auto no-scrollbar relative">
      {item &&
        item.message.map((it) => (
          <div key={item.id} className="block md:flex my-4 w-4/5 md:w-3/5">
            <p className="bg-[#D9D9D9] py-2 px-4 rounded-3xl">{it.m}</p>
            <p className="t text-xs mt-2">{it.time} </p>
          </div>
        ))}
      {}
      {/* {user && <p>{user.user[0]}</p>} */}
      {/* {user && user.user.map((it) => <p key={user.userId}>{it}</p>)} */}
      <div className="sticky bg-white bottom-2 w-full ">
        <CreateMessage />
      </div>
    </div>
  );
};

export default Message;
