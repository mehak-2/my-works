import React from "react";

import { NavLink } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar mt-0">
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "active-links" : " ")}
          to="/"
        >
          <li>
            <AiOutlineHome />
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-links" : " ")}
          to="/frontend"
        >
          <li>Frontend Projects</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-links" : " ")}
          to="/backend"
        >
          <li>Backend Projects</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-links" : " ")}
          to="/about"
        >
          <li>About me</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-links" : " ")}
          to="/skills"
        >
          <li>Skills</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-links" : " ")}
          to="/event"
        >
          <li>Events</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-links" : " ")}
          to="/certificate"
        >
          <li>Achievements</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
