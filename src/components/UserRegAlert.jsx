import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../action/user";
import { addUserId } from "../action/message";

const UserRegAlert = () => {
  const dispatch = useDispatch();
  const [addNewUser, setAddNewUser] = useState("");
  let userId = new Date().getTime().toString();
  let userid = [];
  const handleFetch = () => {
    window.localStorage.setItem("userId", JSON.stringify(userId));
    window.dispatchEvent(new Event("storage"));
  };
  let user = [];
  const handleSubmit = (e) => {
    // e.preventDefault();

    dispatch(addUser({ user: addNewUser, userId: userId }));
    dispatch(addUserId());
    handleFetch();
    setAddNewUser("");
  };
  // console.log();
  return (
    <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          id="name"
          onChange={(e) => setAddNewUser(e.target.value)}
          required
          placeholder="What is your name .."
          value={addNewUser}
        />

        <button className="mt-[15px]" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserRegAlert;
