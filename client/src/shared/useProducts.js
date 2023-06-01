import { useEffect } from "react";
import axios from "../apis/axios";

const useProducts = (setProducts) => {
  async function getProducts() {
    try {
      const response = await axios.get("/products");
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
};

export default useProducts;
