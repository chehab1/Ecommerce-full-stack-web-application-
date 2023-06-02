import { useEffect } from "react";
import axios from "../apis/axios";

const useRegister = (submit, userDetails, setSubmit) => {
  async function register() {
    try {
      const response = await axios.post("/register", userDetails);
      console.log(userDetails);
      if (response.status === 200) {
        alert("Register Success!");
        window.location.href = "/login";
      } else {
        alert("Registeration Failed!\nPlease try again later");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmit(false);
    }
  }
  useEffect(() => {
    if (submit) {
      register();
    }
    // eslint-disable-next-line
  }, [submit]);
};
export default useRegister;
