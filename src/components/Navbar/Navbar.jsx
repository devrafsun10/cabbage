import React, { useState } from "react";
import logo from "../../assets/logo.png";
import pepole from "../../assets/pepole.png";
import heart from "../../assets/heart.png";
import cart from "../../assets/cart.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show)
  }
  
  return (
    <div className="bg-[#FFFFFF] py-6.5">
      <div className=" hidden container md:flex md:justify-between md:items-center">
        <div>
          <img src={logo} alt="#logo" />
        </div>

        <div>
          <ul className=" flex items-center gap-x-5 font-secondary font-bold text-[17px] text-[#0A2C3D] cursor-pointer">
            <li className="hover:text-[#80B500] transition-all duration-300">
              Home
            </li>
            <li className="hover:text-[#80B500] transition-all duration-300">
              About
            </li>
            <li className="hover:text-[#80B500] transition-all duration-300">
              Shop
            </li>
            <li className="hover:text-[#80B500] transition-all duration-300">
              Pages
            </li>
            <li className="hover:text-[#80B500] transition-all duration-300">
              Blog
            </li>
            <li className="hover:text-[#80B500] transition-all duration-300">
              Contact
            </li>
          </ul>
        </div>

        <div className=" flex items-center">
          <img src={heart} alt="#heart" />
          <img className="mt-2" src={pepole} alt="#pepole" />
          <img src={cart} alt="#cart" />
        </div>

        <div>
          <button className="py-4 px-7.5 bg-[#80B500] font-secondary font-bold text-[14px] text-[#FFFFFF]">
            GET A QUATE
          </button>
        </div>
      </div>

      {/* //mobile view */}

      <div className=" md:hidden  container flex justify-between items-center pr-2 pl-2 ">
        <div>
          <img src={logo} alt="#logo" />
        </div>

        {show ? (
          <div className="absolute top-41 left-0 p-5 w-full z-10 bg-[#F5F7FA]">
            <div>
              <ul className=" text-center gap-x-5 font-secondary font-bold text-[17px] text-[#0A2C3D] cursor-pointer">
                <li className="hover:text-[#80B500] transition-all duration-300">
                  Home
                </li>
                <li className="hover:text-[#80B500] transition-all duration-300">
                  About
                </li>
                <li className="hover:text-[#80B500] transition-all duration-300">
                  Shop
                </li>
                <li className="hover:text-[#80B500] transition-all duration-300">
                  Pages
                </li>
                <li className="hover:text-[#80B500] transition-all duration-300">
                  Blog
                </li>
                <li className="hover:text-[#80B500] transition-all duration-300">
                  Contact
                </li>
              </ul>
            </div>

            <div className=" flex items-center justify-center cursor-pointer">
              <img src={heart} alt="#heart" />
              <img className="mt-2" src={pepole} alt="#pepole" />
              <img src={cart} alt="#cart" />
            </div>

            <div className="flex justify-center">
              <button className="py-2 px-6 bg-[#80B500] font-secondary font-bold text-[14px] text-[#FFFFFF] cursor-pointer">
                GET A QUATE
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {
            show ? 
            <ImCross className="cursor-pointer text-2xl" onClick={handleClick}/>
            :
            <FaBars className="cursor-pointer text-2xl" onClick={handleClick} /> 
        }
      </div>
    </div>
  );
};

export default Navbar;
