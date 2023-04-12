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
  const handleClick = () => {
    const nameRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    const emailRegex = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const password = document.getElementById("passWord").value;
    const email = document.getElementById("email").value;
    if (
      nameRegex.test(firstName) &&
      nameRegex.test(lastName) &&
      passwordRegex.test(password) &&
      emailRegex.test(email)
    ) {
      alert("Account created");
    } else {
      alert("invalid format");
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
            id="fName"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="lName"
          />
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
          <button
            className="btn btn-primary"
            id="submitBtn"
            onClick={handleClick}
          >
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
