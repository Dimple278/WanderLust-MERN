// import React from "react";

import { Link } from "react-router-dom";
import navlogo from "../assets/navlogo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-rose-600">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <img
            className="h-10 w-auto mr-2"
            src={navlogo}
            alt="WanderLust"
            style={{ width: "120px" }}
          />
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-rose-600 border-rose-600 hover:text-rose-600 hover:border-rose-600"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-rose-600 lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-rose-600 mr-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-rose-600 mr-2"
          >
            About
          </Link>
          <Link
            to="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-rose-600 mr-2"
          >
            Menu 3
          </Link>
        </div>
        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 ml-3
                 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="block text-md px-4 py-2 rounded text-rose-600 ml-2 font-bold hover:text-white mt-4 hover:bg-rose-600 lg:mt-0">
                {" "}
                Sign in
              </li>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
