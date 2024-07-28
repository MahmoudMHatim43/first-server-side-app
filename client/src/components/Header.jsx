import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-between items-center mx-auto mb-5 px-10 pb-1 w-[90%] text-white border-b-2">
      <NavLink to={"/"}>
        <h1 className="text-2xl first-letter:text-4xl">Full Stack App</h1>
      </NavLink>
      <ul className="flex w-[20%] justify-around text-lg font-bold">
        <NavLink to={"/"}>
          <li className="hover:text-gray-800 transition-colors duration-300">
            Home
          </li>
        </NavLink>
        <NavLink to={"/add"}>
          <li className="hover:text-gray-800 transition-colors duration-300">
            +Add
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export { Header };
