import "./Pcard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import useAddToCart from "../../shared/useAddToCart";
import UserContext from "../../contexts/userContext";

export default function Pcard({ product: p1 }) {
  const [tickIcon, setIcon] = useState(false);
  const [disable, setDisable] = useState(false);
  const [adding, setAdding] = useState("Add to");
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useAddToCart(disable, p1.pid, user ? user.userid : -1);
  const handleClick = () => {
    setIcon((prev) => !prev);
    setDisable(true);
    setAdding("Added");
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={p1.imagepath}
        onClick={() => navigate(`/product/${p1.pid}`)}
      />
      <Card.Body>
        <Card.Title>{p1.pname}</Card.Title>
        <Card.Text>{p1.psdesc}</Card.Text>
        <div id="price-rating-container">
          <Card.Text>
            Price: <span>${p1.price}</span>
          </Card.Text>
          <Rating
            id="rating"
            transition
            initialValue={p1.rating}
            allowFraction
            readonly
            size={20}
            fillColor={p1.rating < 3 ? "red" : "orange"}
          ></Rating>
        </div>
        {user && (
          <Button
            variant="primary"
            id="add-to-cart-btn"
            onClick={handleClick}
            disabled={disable}
          >
            {adding}
            {tickIcon && <BsCheck2Circle id="cart-icon" />}
            {!tickIcon && <AiOutlineShoppingCart id="cart-icon" />}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
