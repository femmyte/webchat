import React, { useState } from "react";
import Message from "../components/Message";
import UserRegAlert from "../components/UserRegAlert";
const Home = () => {
  // const user = useSelector((state) => state.message);
  const [show, setShow] = useState(false);
  // const [userId, setUserId] = useState(0)
  const handleFetch = () => {
    return JSON.parse(localStorage.getItem("item"));
  };
  let item = handleFetch();
  const handleFetchUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  window.addEventListener("storage", handleFetchUser);
  let user = handleFetchUser();
  let userId = 0;
  const handleFetchUserId = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  window.addEventListener("storage", handleFetchUserId);
  user = handleFetchUserId();

  user && user.user.map((id) => (userId = id.userId));

  if (window.onfocus) {
    setShow(true);
    window.location.reload();
  }
  console.log(user);
  if (!show && userId !== 0)
    return (
      <div className="w-4/5 md:w-3/5 mx-auto rounded-sm shadow border border-gray-200 p-[20px] overflow-hidden h-[95vh]">
        <Message item={item} user={user} userId={userId} />
      </div>
    );

  return <UserRegAlert />;
};

export default Home;
