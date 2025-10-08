import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                    : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Installation"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "
                    : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-1">
          <img className="w-10 h-10" src="/logo.png" alt="" />{" "}
          <span className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2] pb-0.5 rounded-none"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2] pb-0.5 rounded-none"
                  : ""
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Installation"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2] pb-0.5 rounded-none"
                  : ""
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={`https://github.com/sohelrana07`}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"
        >
          <FaGithub size={`60%`} />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
