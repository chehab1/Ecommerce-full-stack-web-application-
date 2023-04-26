import "./Cart.css";
import Card from "../Cart/ProductCardInCart/ProductCardInCart";

const cards = [Card, Card, Card];

const Cart = () => {
  const itemsCounter = 1;
  return (
    <div className="container myContainer">
      <div>
        <span>
          <span className="cartSpan">Cart </span>({itemsCounter}
          {itemsCounter > 1 ? " items" : " item"})
        </span>
      </div>
      <div>
        {cards.map((i, index) => {
          return <Card key={index}></Card>;
        })}
      </div>
    </div>
  );
};
export default Cart;
