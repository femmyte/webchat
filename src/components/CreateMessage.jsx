import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../action/message";
import sendIcon from "../img/send-icons.png";
const CreateMessage = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(msg));
    setMsg("");
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div
          className="w-full flex justify-between items-center border border-gray-400 py-3 px-7"
          id="name"
        >
          <input
            id="name"
            onChange={(e) => setMsg(e.target.value)}
            required
            placeholder="create New Message"
            value={msg}
            className="w-full"
            autoFocus
          />

          <button className="mt-[15px]" type="submit">
            <img src={sendIcon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMessage;
