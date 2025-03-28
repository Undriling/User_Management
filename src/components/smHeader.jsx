import React from "react";

const SMHeader = () => {
  return (
    <div className="flex justify-between items-center px-4 min-w-screen fixed top-0 h-20 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center gap-2 mx-5">
        <img
          src="/vite.svg"
          alt="logo"
          className="h-10 w-10 md:w-15 md:h-15 cursor-pointer"
          onClick={() => (window.location.href = "/login")}
        />
        <h1 className="text-xs md:text-xl font-bold font-serif text-[#8046FD]">
          usermanager.co
        </h1>
      </div>
    </div>
  );
};

export default SMHeader;
