import "./Cart.css";
import { useState, useContext } from "react";
import Card from "../Cart/ProductCardInCart/ProductCardInCart";
import useCart from "../../shared/useCart";
import UserContext from "../../contexts/userContext";

const Cart = () => {
  const [cards, setCards] = useState([]);
  const itemsCounter = cards.length;
  const { user } = useContext(UserContext);
  useCart(setCards, user ? user.userid : -1);

  return (
    <div className="container myContainer">
      {itemsCounter !== 0 && (
        <div>
          <span>
            <span className="cartSpan">Cart </span>({itemsCounter}
            {itemsCounter > 1 ? " items" : " item"})
          </span>
        </div>
      )}
      {itemsCounter !== 0 && (
        <div className="cartSpace">
          {cards.map((card, index) => {
            return <Card key={index} {...{ card }}></Card>;
          })}
        </div>
      )}
      {itemsCounter !== 0 && (
        <div className="checkout">
          <input type="button" value="Checkout" />
        </div>
      )}
      {itemsCounter === 0 && (
        <div>
          <h1 id="empty">Cart is empty</h1>
        </div>
      )}
    </div>
  );
};
export default Cart;
