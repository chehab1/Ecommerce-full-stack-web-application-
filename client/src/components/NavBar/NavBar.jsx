import { React, useContext } from "react";
import "./NavBar.css";
import { BiCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";

function NavBar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="container">
        <Link to="/" id="Link">
          <h1 id="websiteName">My Website</h1>
        </Link>
        {user && (
          <span id="welcome">
            Logged in as: <span id="username">{user.fname}</span>
          </span>
        )}
        <div className="links">
          <span>
            {user && (
              <Link to="/Cart">
                <BiCart className="cart-logo"></BiCart>
              </Link>
            )}
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
            {!user && (
              <li>
                <Link to="/Login">Login</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/Register">Register</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/Settings">My account</Link>
              </li>
            )}
            {user && (
              <li>
                <Link
                  onClick={() => {
                    sessionStorage.removeItem("user");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
