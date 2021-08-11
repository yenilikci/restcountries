import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-info navbar-dark my-3 shadow rounded">
      <ul className="navbar-nav">
        <li className="nav-item m-1 btn btn-light">Home</li>
        <li className="nav-item m-1 btn btn-light">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
