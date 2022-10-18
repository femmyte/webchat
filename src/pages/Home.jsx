import React, { useState } from "react";
import { useSelector } from "react-redux";
import Message from "../components/Message";
import UserRegAlert from "../components/UserRegAlert";
const Home = () => {
  //   const [id, setId] = useState("");
  //   const [nameInput, setNameInput] = useState("");
  const user = useSelector((state) => state.users);
  return user.value !== "" ? (
    <div>
      <Message />
    </div>
  ) : (
    <UserRegAlert />
  );
};

export default Home;
