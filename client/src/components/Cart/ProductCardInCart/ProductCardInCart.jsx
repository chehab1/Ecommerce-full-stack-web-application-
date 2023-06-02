import { useState, useContext } from "react";
import "./ProductCardInCart.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import UserContext from "../../../contexts/userContext";
import useRemove from "../../../shared/useRemove";

const ProductCardInCart = ({ card: productInfo }) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuatity = (index) => {
    if (index === 1) setQuantity(quantity + 1);
    else {
      if (quantity > 1) setQuantity(quantity - 1);
    }
  };
  const { user } = useContext(UserContext);
  const [remove, setRemove] = useState(false);
  useRemove(remove, productInfo.pid, user.userid);
  return (
    <div className="container productContainerInCart">
      <div className="row">
        <div className="col-11">
          <div>
            <h4>{productInfo.pname}</h4>
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
            <BsTrash3 onClick={() => setRemove(true)}></BsTrash3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCardInCart;
