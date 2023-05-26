import "./Settings.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const userDetails = {};

function Settings() {
  const [visible, setVisible] = useState(true); //password visibility state
  //password visibility function
  const passwordVisibility = () => {
    setVisible((prev) => !prev);
    var x = document.getElementById("passWord");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  //handle change function
  const handleChange = (e) => {
    e.preventDefault();
    userDetails.firstName = document.getElementById("first-name").value;
    userDetails.lastName = document.getElementById("last-name").value;
    userDetails.password = document.getElementById("passWord").value;
    console.log(userDetails);
  };

  return (
    <div id="RegisterContainer">
      <form>
        <h3>Update Your Info.</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            id="first-name"
            type="text"
            className="form-control"
            defaultValue=""
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            id="last-name"
            type="text"
            className="form-control"
            defaultValue=""
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            defaultValue=""
            id="passWord"
          />
          {visible && (
            <FaEye
              className="eye-icon"
              id="eyeIconReg"
              onClick={passwordVisibility}
            />
          )}
          {!visible && (
            <FaEyeSlash
              className="eye-icon"
              id="eyeIconReg"
              onClick={passwordVisibility}
            />
          )}
        </div>
        <div className="d-grid">
          <button
            className="btn btn-primary"
            id="updateBtn"
            onClick={handleChange}
          >
            Update
          </button>
          <p id="note">
            *Note: if you don't want to update your password, do not adjust
            password field.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Settings;
