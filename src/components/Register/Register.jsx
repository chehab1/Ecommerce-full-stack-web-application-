import "./Register.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Register() {
  const [visible, setVisible] = useState(true);
  const passwordVisibility = () => {
    setVisible((prev) => !prev);
    var x = document.getElementById("passWord");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <div id="RegisterContainer">
      <form>
        <h3>Create Account</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="passWord"
          />
          {visible && (
            <FaEyeSlash
              className="eye-icon"
              id="eyeIconReg"
              onClick={passwordVisibility}
            />
          )}
          {!visible && (
            <FaEye
              className="eye-icon"
              id="eyeIconReg"
              onClick={passwordVisibility}
            />
          )}
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" id="submitBtn">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/Login">sign in?</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
