import "./ProductView.css";
import Carousel from "react-bootstrap/Carousel";
import { Rating } from "react-simple-star-rating";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { BsCheck2Circle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import useProduct from "../../shared/useProduct";
import UserContext from "../../contexts/userContext";
import useAddToCart from "../../shared/useAddToCart";

const ProductView = () => {
  const [disable, setDisable] = useState(false);
  const [adding, setAdding] = useState("Add to");
  const [tickIcon, setIcon] = useState(false);
  const [product, setProduct] = useState({});
  const id = useParams().id;
  const { user } = useContext(UserContext);
  useProduct(id, setProduct);
  useAddToCart(disable, id, user ? user.userid : -1);
  const handleClick = () => {
    setIcon((prev) => !prev);
    setDisable(true);
    setAdding("Added");
    const toCartBtn = document.getElementById("goToCartBtn");
    toCartBtn.style.visibility = "visible";
  };
  return (
    <>
      <div className="container Pcontainer">
        <div className="row">
          <div className="col-md-4 col-12 col-sm-12">
            <Carousel id="Pcarousel">
              <Carousel.Item className="carouselImage">
                <img
                  className="d-block carouselImage w-100"
                  src={product.imagepath}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="Pdetails" className="col-md-8 col-12">
            <h1>{product.pname}</h1>
            <span id="descriptionSpan">{product.psdesc}</span>
            <div>
              <Rating
                id="rating"
                transition
                initialValue={product.rating}
                allowFraction
                readonly
                size={20}
                fillColor={product.rating < 3 ? "red" : "orange"}
              ></Rating>{" "}
            </div>
            <span>Price: ${product.price}</span>
            <div>
              {user && (
                <Button
                  variant="primary"
                  id="addBtn"
                  onClick={handleClick}
                  disabled={disable}
                >
                  {adding}
                  {tickIcon && <BsCheck2Circle id="cart-icon" />}
                  {!tickIcon && <AiOutlineShoppingCart id="cart-icon" />}
                </Button>
              )}
              {user && (
                <Link to="/Cart">
                  <Button id="goToCartBtn">Checkout</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container" id="pDesc">
        <h1>Product description</h1>
        <div className="descText">{product.pfdesc}</div>
      </div>
    </>
  );
};
export default ProductView;
