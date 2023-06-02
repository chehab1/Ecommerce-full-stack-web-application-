import "./Settings.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useContext } from "react";
import UserContext from "../../contexts/userContext";
import useUpdateUserData from "../../shared/useUpdateUserData";

function Settings() {
  const [visible, setVisible] = useState(true); //password visibility state
  const { user } = useContext(UserContext);
  const [clicked, setClicked] = useState(false);

  const fname = document.getElementById("first-name")?.value;
  const lname = document.getElementById("last-name")?.value;
  const password = document.getElementById("passWord")?.value;

  useUpdateUserData(clicked, user ? user.userid : null, fname, lname, password);
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
    setClicked(true);
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
            defaultValue={user?.fname}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            id="last-name"
            type="text"
            className="form-control"
            defaultValue={user?.lname}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            defaultValue={user?.password}
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
