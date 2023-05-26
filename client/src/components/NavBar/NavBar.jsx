import React from "react";
import "./NavBar.css";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" id="Link">
          <h1 id="websiteName">My Website</h1>
        </Link>
        <div className="links">
          <span>
            <Link to="/Cart">
              <BiCart className="cart-logo"></BiCart>
            </Link>
          </span>
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Settings">My account</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
