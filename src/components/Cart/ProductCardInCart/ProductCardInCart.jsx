import { useState } from "react";
import "./ProductCardInCart.css";

const ProductCardInCart = () => {
  const [quantity, setQuantity] = useState(0);
  const handleQuatity = (index) => {
    if (index === 1) setQuantity(quantity + 1);
    else {
      if (quantity >= 1) setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container">
      <div>
        <h3>Product name</h3>
        <span>Eligible for free shipping</span>
      </div>
      <div>
        <button onClick={() => handleQuatity(1)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuatity(2)}>-</button>
      </div>
    </div>
  );
};
export default ProductCardInCart;
