import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const onRouteClick = (e, { name, route }) => {
    const anchor = document.querySelector(route);
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-10 text-white items-center">
            <a
              className="hover:text-blue-300"
              href="#Platform"
              onClick={onRouteClick}
            >
              Platform
            </a>
            <a
              className="hover:text-blue-300"
              href="#Developers"
              onClick={onRouteClick}
            >
              Developers
            </a>
            <a
              className="hover:text-blue-300"
              href="#Communtiy"
              onClick={onRouteClick}
            >
              Communtiy
            </a>
            <a
              className="hover:text-blue-300"
              href="#About"
              onClick={onRouteClick}
            >
              About
            </a>
            <button className="ml-4 hover:text-black ">Use Defi</button>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center "
              : "absolute left-[-100%] "
          }
        >
          <ul>
            <a href="#Platform" onClick={onRouteClick} className="text-2xl">
              Platform
            </a>
            <a href="#Developers" onClick={onRouteClick} className="text-2xl">
              Developers
            </a>
            <a href="#Communtiy" onClick={onRouteClick} className="text-2xl">
              Communtiy
            </a>
            <a href="#About" onClick={onRouteClick} className="text-2xl">
              About
            </a>
            <button className="m-8 hover:text-black ">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
