import { useState } from "react";
import "./ProductCardInCart.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";

const ProductCardInCart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuatity = (index) => {
    if (index === 1) setQuantity(quantity + 1);
    else {
      if (quantity > 1) setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container productContainerInCart">
      <div className="row">
        <div className="col-11">
          <div>
            <h4>Product name</h4>
            <span className="freeShipping">Eligible for free shipping</span>
          </div>
          <div>
            <AiOutlinePlusCircle
              className="quantityLogo"
              onClick={() => handleQuatity(1)}
            ></AiOutlinePlusCircle>
            <span> {quantity} </span>
            <AiOutlineMinusCircle
              className="quantityLogo"
              onClick={() => handleQuatity(2)}
            ></AiOutlineMinusCircle>
          </div>
        </div>
        <div className="col-1">
          <div className="trashContainer">
            <BsTrash3></BsTrash3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCardInCart;
