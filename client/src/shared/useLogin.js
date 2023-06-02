import { useEffect } from "react";
import axios from "../apis/axios";

const useLogin = (userLogin, userDetails, setLogin, setUser, navigate) => {
  async function login() {
    try {
      const response = await axios.post("/login", userDetails);
      if (response.status === 200) {
        const msg =
          "Login Successful!\nWelcome " +
          response.data.fname +
          " " +
          response.data.lname;
        alert(msg);
        setUser(response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid email or password!");
    } finally {
      setLogin(false);
    }
  }
  useEffect(() => {
    if (userLogin) {
      login();
    }
  }, [userLogin]);
};

export default useLogin;
