import { useEffect } from "react";
import axios from "../apis/axios";

const useLogin = (userLogin, userDetails, setLogin) => {
  async function login() {
    try {
      const response = await axios.post("/login", userDetails);
      console.log(userDetails);
      console.log(response.status);
    } catch (error) {
      console.log(error);
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
