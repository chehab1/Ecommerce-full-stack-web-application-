import { useEffect } from "react";
import axios from "../apis/axios";

const useAddToCart = (disable, pid, userid = -1) => {
  async function addToCart() {
    try {
      const response = await axios.post("/add-to-cart", {
        pid: pid,
        userid: userid,
        quantity: 1,
      });
      if (response.status === 200) {
        alert("Added to cart!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (disable) {
      addToCart();
    }
  }, [disable]);
};

export default useAddToCart;
