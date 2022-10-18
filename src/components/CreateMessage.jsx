import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../action/message";

const CreateMessage = () => {
  const dispatch = useDispatch();
  //   const message = useSelector((state) => state.addMessage.value);
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //   dispatch(messages(e.target.value.trim()));
    dispatch(addMessage(msg));
    setMsg("");
    console.log(msg);
  };
  return (
    <div>
      <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <textarea
            id="name"
            onChange={(e) => setMsg(e.target.value)}
            required
            placeholder=""
            value={msg}
          ></textarea>

          <button className="mt-[15px]" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMessage;
