import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../action/user";

const UserRegAlert = () => {
  // const [id, setId] = useState("");
  // const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [addNewUser, setAddNewUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!user) {
    //   return alert("Name can't be empty");
    // }
    dispatch(addUser(addNewUser));
    setAddNewUser("");
  };
  // dispatch(addUser(e.target.value.trim())
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
