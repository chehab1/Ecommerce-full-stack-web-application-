import "./Cart.css";

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
    </div>
  );
};
export default Cart;
