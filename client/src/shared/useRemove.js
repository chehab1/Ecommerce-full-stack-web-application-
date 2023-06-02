import { useEffect } from "react";
import axios from "../apis/axios";

const useRemove = (Remove, pid, userid) => {
  async function remove() {
    try {
      console.log(Remove);
      const response = await axios.delete(
        `/cart?productId=${pid}&userId=${userid}`
      );
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (Remove) {
      remove();
    }
    // eslint-disable-next-line
  }, [Remove]);
};

export default useRemove;
