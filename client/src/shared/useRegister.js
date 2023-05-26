import { useEffect } from "react";
import axios from "../apis/axios";

const useRegister = (submit, useDetails, setSubmit) => {
  async function register() {
    try {
      const response = await axios.post("/register", useDetails);
      console.log(useDetails);
      if (response.status == 200) {
        alert("Register Success!");
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
  }, [submit]);
};
export default useRegister;
