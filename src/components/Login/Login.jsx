import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaEyeSlash } from "react-icons/fa";

function Login() {
  const showPassword = () => {
    var y = document.createElement("div");
    console.log(y);
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
          <FaEyeSlash
            className="eye-icon"
            id="eyeIconLog"
            onClick={showPassword}
          />
        </Form.Group>
        <Button id="loginBtn" variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <Link id="redirectToReg" to="/Register">
          Don't have an account?
        </Link>
      </Form>
    </div>
  );
}

export default Login;
