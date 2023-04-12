import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [visible, setVisible] = useState(true);

  const passwordVisibility = () => {
    setVisible((prev) => !prev);
    var y = document.createElement("div");
    var x = document.getElementById("passWord");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const handleLogin = () => {
    let user = document.getElementById("userEmail");
    let pass = document.getElementById("passWord");
    if (user.value === "chehab" && pass.value === "1234") {
      alert("Login Successfull");
    } else {
      alert("Invalid email or password");
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
            onClick={handleLogin}
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
