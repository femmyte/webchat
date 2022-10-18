import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../action/user";

const UserRegAlert = () => {
  const [id, setId] = useState("");
  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      return alert("Name can't be empty");
    }
    setId(user);
    console.log(user);
  };
  return (
    <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          id="name"
          onChange={(e) => dispatch(addUser(e.target.value.trim()))}
          required
          placeholder="What is your name .."
        />

        <button className="mt-[15px]" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserRegAlert;
