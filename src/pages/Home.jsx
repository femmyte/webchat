import React, { useState } from "react";
import { useSelector } from "react-redux";
import Message from "../components/Message";
import UserRegAlert from "../components/UserRegAlert";
const Home = () => {
  // const user = useSelector((state) => state.message);
  // console.log(user);
  const handleFetchUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  window.addEventListener("storage", handleFetchUser);
  let user = handleFetchUser();
  const handleFetch = () => {
    return JSON.parse(localStorage.getItem("item"));
  };
  window.addEventListener("storage", handleFetch);
  if (user)
    return (
      <div className="w-4/5 md:w-3/5 mx-auto rounded-sm shadow border border-gray-200 p-[20px] overflow-hidden h-[95vh]">
        <Message />
      </div>
    );

  return <UserRegAlert />;
};

export default Home;
