import { useEffect } from "react";
import axios from "../apis/axios";

const useRegister = (submit, useDetails, setSubmit) => {
  async function register() {
    try {
      const response = await axios.post("/register", useDetails);
      console.log(useDetails);
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
