import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/main">
          <li>Frontend Projects</li>
        </Link>
        <Link to="/home">
          <li>Backend Projects</li>
        </Link>
        <Link to="/about">
          <li>About me</li>
        </Link>
        <Link to="/team">
          <li>Skills</li>
        </Link>
        <Link to="/event">
          <li>Events</li>
        </Link>
        <Link to="/certificate">
          <li>Achievements</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar
