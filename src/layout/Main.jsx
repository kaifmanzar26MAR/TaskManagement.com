import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className=" font-roboto flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col w-full ">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
