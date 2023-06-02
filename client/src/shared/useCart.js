import { useEffect } from "react";
import axios from "../apis/axios";

const useCart = (setCard, userid) => {
  async function cart() {
    try {
      const response = await axios.get(`/cart/${userid}`);
      if (response.status === 200) {
        setCard(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (userid) {
      cart();
    }
  }, [userid]);
};

export default useCart;
