import React from 'react';
import { FiShoppingBag, FiSearch, FiChevronDown } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from '../../assets/Images/Main-logo/logo.png'

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-8">
      {/* Logo */}
      <div className="nav_logo max-w-48">
        <img src={logo} alt="" />
      </div>

      {/* Navigation Menu */}
      <ul className="nav_menu flex items-center gap-x-6">
        <li className="group">
          <a href="#" className="flex items-center gap-1 text-primary">
            Home <FiChevronDown className="nav_menu_icon" />
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center gap-1">
            Courses <FiChevronDown className="nav_menu_icon" />
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center gap-1">
            Blog <FiChevronDown className="nav_menu_icon" />
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center gap-1">
            Shop <FiChevronDown className="nav_menu_icon" />
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center gap-1">
            Pages <FiChevronDown className="nav_menu_icon" />
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center gap-1">
            Events <FiChevronDown className="nav_menu_icon" />
          </a>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="nav_search text-2xl flex items-center gap-x-7">
        <FiShoppingBag className="icon" />
        <FaRegCircleUser className="icon" />
        <FiSearch className="icon" />
      </div>

      {/* Buttons Section */}
      <div className="nav_btn capitalize font-medium font-saira text-xl flex items-center">
        <button className="login py-5 px-9">login</button>
        <button className="signup py-5 px-9 bg-linear-to-br from-[#083f9b] to-[#7f56d9] text-white rounded-lg">
          signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;