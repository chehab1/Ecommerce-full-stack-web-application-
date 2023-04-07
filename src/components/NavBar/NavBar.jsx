import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const userName = "Chehab";

  return (
    // <div>
    //   <nav>
    //     <Link className="navItemsContainer Link" id="websiteName" to="/">
    //       <h2>Chéhab</h2>
    //     </Link>
    //     <div className="navItemsContainer">
    //       <Link to="/" id="home" className="Link">
    //         Home
    //       </Link>
    //       <Link to="/Login" id="Login" className="Link">
    //         Login
    //       </Link>
    //       <Link to="/Register" id="Register" className="Link">
    //         Register
    //       </Link>
    //       <Dropdown>
    //         <Dropdown.Toggle variant="success" id="dropdown-basic-button">
    //           {userName}
    //         </Dropdown.Toggle>
    //         <Dropdown.Menu>
    //           <Link to="/Settings" id="dropdown-item">
    //             My account
    //           </Link>
    //           {/* <Dropdown.Item id="dropdown-item" to="/Settings">
    //             My account
    //           </Dropdown.Item> */}
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </div>
    //   </nav>
    // </div>

    <div class="header">
      <div class="container">
        <Link to="/" id="Link">
          <h1 id="websiteName">Chéhab</h1>
        </Link>
        <div class="links">
          <span class="icon">
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
