import "./Login.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import useLogin from "../../shared/useLogin";

const userDetails = {}; //Object to be sent to backend

function Login() {
  const [visible, setVisible] = useState(true); //Password visibility state
  const [login, setLogin] = useState(false); //Login state

  useLogin(login, userDetails, setLogin); // call custom hook to send data to backend

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

  //Function to handle login button
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      document.getElementById("userEmail").value === "" ||
      document.getElementById("passWord").value === ""
    ) {
      alert("Please fill all the fields");
    } else {
      userDetails["email"] = document.getElementById("userEmail").value;
      userDetails["password"] = document.getElementById("passWord").value;
      setLogin(true);
      window.location.href = "/Home";
    }
  };

  return (
    <div id="loginContainer">
      <Form>
        <div id="imgContainer"></div>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control id="userEmail" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id="passWord" />
          {visible && (
            <FaEyeSlash
              className="eye-icon"
              id="eyeIconLog"
              onClick={passwordVisibility}
            />
          )}
          {!visible && (
            <FaEye
              className="eye-icon"
              id="eyeIconLog"
              onClick={passwordVisibility}
            />
          )}
        </Form.Group>
        <div className="d-grid">
          <button
            className="btn btn-primary"
            id="loginBtn"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </div>
        <div>
          <Link id="redirectToReg" to="/Register">
            Don't have an account?
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
