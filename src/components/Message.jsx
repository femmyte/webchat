import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateMessage from "./CreateMessage";

const Message = ({ user, item, userId }) => {
  let message = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  // console.log("user >>", user);
  // console.log("userId >>", userId);
  // console.log("message >>", item);
  document.addEventListener("visibilitychange", () => {
    window.location.reload();
  });

  return (
    <div className="flex flex-col h-full overflow-auto no-scrollbar relative">
      {item &&
        item.message.map((it) => {
          if (it.userId === userId) {
            console.log(it.m);
            return (
              <div key={item.id} className="block md:flex my-4 w-4/5 md:w-3/5">
                <p className="bg-[#D9D9D9] py-2 px-4 rounded-3xl">{it.m}</p>
                <p className="t text-xs mt-2">{it.time} </p>
              </div>
            );
          } else {
            return (
              <div key={item.id} className="block md:flex my-4 w-4/5 md:w-3/5">
                <p className="bg-[#CBF49E] py-2 px-4 rounded-3xl">{it.m}</p>
                <p className="t text-xs mt-2">{it.time} </p>
              </div>
            );
          }
        })}
      {}
      {user && user.user.map((it) => <p key={user.userId}>{it.user}</p>)}
      <div className="sticky top-[90%] bg-white bottom-2 w-full ">
        <CreateMessage />
      </div>
    </div>
  );
};

export default Message;
