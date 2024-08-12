/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Hero from "./Hero";

const Navbar = ({ AiOutlineArrowUp }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    <AiOutlineArrowUp size={0} />;
  };

  return (
    <div className="bg-stone-900 text-yellow-500  flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
      <h1 className="text-3xl font-bold primary-color ml-4">@mit</h1>
      <ul className="hidden md:flex">
        <li className="p-2">
          <a href="#hero">Home</a>
        </li>
        <li className="p-2">
          <a href="#about">About</a>
        </li>
        <li className="p-2">
          <a href="#work">Work</a>
        </li>
        <li className="p-2">
          <a href="#techstacks">Tech Stacks</a>
        </li>
        <li className="p-2">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-stone-900 text-yellow-500 ease-in-out duration-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] z-40"
            : "fixed left-[-100%] top-0 w-[60%] h-full bg-stone-900 text-yellow-500 ease-in-out duration-500"
        }
        onClick={() =>
          setTimeout(() => {
            setNav(false);
          }, 1000)
        }
      >
        <h1 className="text-3xl font-bold primary-color m-4">@mit</h1>
        <ul className="flex flex-col p-4">
          <li className="p-2">
            <a href="#hero">Home</a>
          </li>
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#techstacks">Tech Stacks</a>
          </li>
          <li className="p-2">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
