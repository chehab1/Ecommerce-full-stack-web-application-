import "./Cart.css";
import Card from "../Cart/ProductCardInCart/ProductCardInCart";

const Cart = () => {
  const cards = [Card, Card, Card, Card];
  const itemsCounter = cards.length;
  return (
    <div className="container myContainer">
      <div>
        <span>
          <span className="cartSpan">Cart </span>({itemsCounter}
          {itemsCounter > 1 ? " items" : " item"})
        </span>
      </div>
      <div className="cartSpace">
        {cards.map((i, index) => {
          return <Card key={index}></Card>;
        })}
      </div>
      <div className="checkout">
        <input type="button" value="CHECKOUT" />
      </div>
    </div>
  );
};
export default Cart;
