import React from "react";
import CommunityChatComponent from "./CommunityChatComponent";
import { Outlet } from "react-router-dom";

const CommunityChatContainer = () => {
  return (
    <div>
      <CommunityChatComponent />
      <Outlet />
    </div>
  );
};

export default CommunityChatContainer;
