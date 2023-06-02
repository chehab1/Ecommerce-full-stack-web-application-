import { useEffect } from "react";
import axios from "../apis/axios";

const useAddToCart = (disable, pid, userid = -1) => {
  async function addToCart() {
    try {
      await axios.post("/add-to-cart", {
        pid: pid,
        userid: userid,
        quantity: 1,
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (disable) {
      addToCart();
    }
    // eslint-disable-next-line
  }, [disable]);
};

export default useAddToCart;
