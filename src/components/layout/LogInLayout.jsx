import React from "react";
import NavBar from "../pages/shared/navBar/NavBar";
import { Outlet } from "react-router-dom";

const LogInLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default LogInLayout;
