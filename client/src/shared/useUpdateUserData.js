import { useEffect } from "react";
import axios from "../apis/axios";

const useUpdateUserData = (clicked, userid, fname, lname, password) => {
  const updateUserData = async () => {
    try {
      console.log(userid, fname, lname, password);
      const response = await axios.patch("/settings", {
        userid,
        fname,
        lname,
        password,
      });
      if (response.status === 200) {
        alert("Updated Successfully!");
        sessionStorage.removeItem("user");
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (clicked) {
      updateUserData();
    }
    // eslint-disable-next-line
  }, [clicked]);
};

export default useUpdateUserData;
