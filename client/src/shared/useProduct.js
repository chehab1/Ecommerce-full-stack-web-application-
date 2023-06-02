import { useEffect } from "react";
import axios from "../apis/axios";

const useProduct = (id, setProduct) => {
  async function getProduct() {
    try {
      const response = await axios.get(`/product/${id}`);
      if (response.status === 200) {
        setProduct(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);
};

export default useProduct;
