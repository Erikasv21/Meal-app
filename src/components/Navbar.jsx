import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>
            <Link to="/">Meals.com</Link>
          </h2>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
