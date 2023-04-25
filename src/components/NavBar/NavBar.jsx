import React from "react";
import "./NavBar.css";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar() {
  const userName = "Chehab";

  return (
    <div className="header">
      <div className="container">
        <Link to="/" id="Link">
          <h1 id="websiteName">My Website</h1>
        </Link>
        <div className="links">
          <span>
            <Link to="/Cart">
              <BsFillCartFill className="cart-logo"></BsFillCartFill>
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
