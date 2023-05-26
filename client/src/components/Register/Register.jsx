import "./Register.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useRegister from "../../shared/useRegister";

const userDetails = {}; //Object to be sent to backend

function Register() {
  const [visible, setVisible] = useState(true); //Password visibility state
  const [submit, setSubmit] = useState(false); //Submit state

  useRegister(submit, userDetails, setSubmit); // call custom hook to send data to backend

  //Function to toggle password visibility
  const passwordVisibility = () => {
    setVisible((prev) => !prev);
    var x = document.getElementById("passWord");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  //Function to handle submit button
  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{4,7}$/;
    if (
      emailRegex.test(document.getElementById("email").value) &&
      passwordRegex.test(document.getElementById("passWord").value)
    ) {
      userDetails.firstName = document.getElementById("fName").value;
      userDetails.lastName = document.getElementById("lName").value;
      userDetails.password = document.getElementById("passWord").value;
      userDetails.email = document.getElementById("email").value;
      console.log(userDetails);
      setSubmit(true);
    } else {
      alert("Please fill in all fields correctly");
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
            onClick={(e) => handleClick(e)}
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
