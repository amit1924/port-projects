/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Hero from "./Hero";
import Portfolio from "../assets/logo.png";
import "./Navbar.css";
const Navbar = ({ AiOutlineArrowUp }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    <AiOutlineArrowUp size={0} />;
  };

  return (
    <div className="bg-stone-900 text-yellow-500  flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
      {/* <h1 className="animate-ball">HTML CSS JS REACT JS NEXT JS MONGODB PYTHON DJANGO FLASK</h1> */}
      <img
        src={Portfolio}
        alt="logo"
        className="rounded-2xl w-[50px] h-[50px] border-[3px] border-black shadow-[0_4px_15px_rgba(0,0,255,0.6)] transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,128,255,0.8)] hover:border-[#f3f3f3] "
      />

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
        <img
          src={Portfolio}
          alt="logo"
          className="rounded-2xl w-[50px] h-[50px] border-[3px] ml-6 mt-3  border-[#08f] shadow-[0_4px_15px_rgba(0,0,255,0.6)] transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,128,255,0.8)] hover:border-[#f3f3f3]"
        />
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
