import "./Pcard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product1 from "../../assets/product1.jpeg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";

export default function Pcard() {
  const [tickIcon, setIcon] = useState(false);
  const p1 = {
    id: 1234,
    title: "Smart watch",
    desc: "The brand new smart watch with whole new design and features.",
    price: 100,
    rating: 2.4,
    color: "red",
  };
  const [disable, setDisable] = useState(false);
  const [adding, setAdding] = useState("Add to");
  const handleClick = () => {
    setIcon((prev) => !prev);
    setDisable(true);
    setAdding("Added");
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Link to="/Product">
        <Card.Img variant="top" src={product1} />
      </Link>
      <Card.Body>
        <Card.Title>{p1.title}</Card.Title>
        <Card.Text>{p1.desc}</Card.Text>
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
            fillColor={p1.color}
          ></Rating>
        </div>
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
      </Card.Body>
    </Card>
  );
}
