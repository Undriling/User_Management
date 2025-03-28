import React, { useState, useEffect } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center px-4 shadow-sm min-w-screen fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex items-center gap-2">
        <img
          src="/vite.svg"
          alt="logo"
          className="h-10 w-10 md:w-15 md:h-15 cursor-pointer"
          onClick={() =>
            (window.location.href = "/dashboard")
          }
        />
        <h1 className="text-xs md:text-xl font-bold font-serif text-[#8046FD]">
          usermanager.co
        </h1>
      </div>

      <div className="flex items-center gap-2">
        {isMobile ? (
          <Popover>
            <PopoverTrigger>
              <IoReorderThreeOutline className="size-7 md:size-9 cursor-pointer" />
            </PopoverTrigger>

            <PopoverContent className="w-57 mx-2">
              <div className="flex flex-wrap">
                <img
                  src="/vite.svg"
                  alt="user"
                  className="w-8 h-8 md:w-11 md:h-11 rounded-full shadow-xl border-2 border-gray-300 object-cover cursor-pointer"
                />
                <h1 className="text-sm px-2 font-bold font-serif py-1 md:py-2">
                  Cityslicka
                </h1>
              </div>
              <p className="text-xs text-gray-500 font-serif py-2">
                📧 eve.holt@reqres.in
              </p>
              <p className="text-xs text-gray-500 font-serif ">
                Admin
              </p>

              <a href="/dashboard">
                <p className="cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]">
                  Home
                </p>
              </a>
              <a href="/about-us">
                <p className="cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]">
                  About us
                </p>
              </a>
              <a href="/profile">
                <p className="cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]">
                  Creator
                </p>
              </a>

              <p
                onClick={handleLogout}
                className="cursor-pointer font-bold text-sm md:text-lg font-serif hover:text-blue-700 text-[#8046FD]">
                Logout
              </p>
            </PopoverContent>
          </Popover>
        ) : (
          <div className="flex items-center gap-4">
            <img
              src="/vite.svg"
              alt="user"
              className="w-10 h-10 rounded-full shadow-lg border-2 border-gray-300 object-cover"
            />
            <h1 className="text-sm font-bold font-serif">
              Cityslicka (Admin)
            </h1>
            <a href="/dashboard">
              <p className="cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]">
                Home
              </p>
            </a>
            <p
              onClick={handleLogout}
              className="cursor-pointer font-bold text-sm md:text-lg font-serif hover:text-blue-700 text-[#8046FD]">
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
