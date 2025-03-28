import React from "react";
import { useNavigate } from "react-router";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:block w-60 bg-white shadow-md fixed h-full">
      <div className="p-4 font-bold text-xl">Menu</div>
      <ul className="space-y-2 p-4">
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/dashboard")}>
          Dashboard
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/dashboard")}>
          Users
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/about-us")}>
          About Us
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/profile")}>
          Creator
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
