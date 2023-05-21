import "./Settings.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function Settings() {
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

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  const handleChange = (e) => {
    e.preventDefault();
    alert("Account details successfully updated!");
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
            defaultValue={data.firstName}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            id="last-name"
            type="text"
            className="form-control"
            defaultValue={data.lastName}
          />
        </div>
        {/* <div className="mb-3">
          <label>Email address</label>
          <input
            id="email"
            type="email"
            className="form-control"
            defaultValue={data.email}
          />
        </div> */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            defaultValue={data.password}
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
