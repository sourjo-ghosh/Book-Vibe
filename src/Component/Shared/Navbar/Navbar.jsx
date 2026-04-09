import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `btn btn-ghost p-5${
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]  hover:bg-white"
                        : "hover:border hover:border-[#23BE0A] hover:bg-white"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/books"}
                  className={({ isActive }) =>
                    `btn btn-ghost p-5${
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]  hover:bg-white"
                        : "hover:border hover:border-[#23BE0A] hover:bg-white"
                    }`
                  }
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/ddd"}
                  className={({ isActive }) =>
                    `btn btn-ghost p-5${
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]  hover:bg-white"
                        : "hover:border hover:border-[#23BE0A] hover:bg-white"
                    }`
                  }
                >
                  Pages to Read
                </NavLink>
              </li>
            </ul>
          </div>
          <h2 className="text-[22px] md:text-3xl lg:text-3xl font-bold text-[#131313]">
            Book Vibe
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `btn btn-ghost p-5${
                    isActive
                      ? "text-[#23BE0A] border border-[#23BE0A]  hover:bg-white"
                      : "hover:border hover:border-[#23BE0A] hover:bg-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/books"}
                className={({ isActive }) =>
                  `btn btn-ghost p-5${
                    isActive
                      ? "text-[#23BE0A] border border-[#23BE0A]  hover:bg-white"
                      : "hover:border hover:border-[#23BE0A] hover:bg-white"
                  }`
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/ddd"}
                className={({ isActive }) =>
                  `btn btn-ghost p-5${
                    isActive
                      ? "text-[#23BE0A] border border-[#23BE0A]  hover:bg-white"
                      : "hover:border hover:border-[#23BE0A] hover:bg-white"
                  }`
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn bg-[#23BE0A] text-[#FFFFFF] p-5">Sign In</a>
          <a className="btn bg-[#59C6D2] text-[#FFFFFF] p-5">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
