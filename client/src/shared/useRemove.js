import { useEffect } from "react";
import axios from "../apis/axios";

const useRemove = (remove, pid, userid) => {
  async function remove() {
    try {
      const response = await axios.delete(
        `/cart?productId=${pid}&userId=${userid}`
      );
      if (response.status === 200) {
        alert("Removed from cart!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (remove) {
      remove();
    }
  }, [remove]);
};

export default useRemove;
