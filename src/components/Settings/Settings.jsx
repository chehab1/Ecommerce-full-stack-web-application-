import "./Settings.css";
import { FaEye } from "react-icons/fa";

function Settings() {
  const showPassword = () => {
    var x = document.getElementById("passWord");
    if (x.type === "password") x.type = "text";
    else x.type = "password";
  };

  //dummy data
  const fName = "chehab";
  const lName = "yakoot";
  const Email = "chehab@gmail.com";
  const pass = "1234";
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
            defaultValue={fName}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            id="last-name"
            type="text"
            className="form-control"
            defaultValue={lName}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            id="email"
            type="email"
            className="form-control"
            defaultValue={Email}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            defaultValue={pass}
            id="passWord"
          />
          <FaEye className="eye-icon" id="eyeIconReg" onClick={showPassword} />
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
