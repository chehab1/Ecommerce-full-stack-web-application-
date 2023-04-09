import "./ProductView.css";
import photo from "../../assets/product1.jpeg";
import Carousel from "react-bootstrap/Carousel";
import { Rating } from "react-simple-star-rating";

const ProductView = () => {
  return (
    <div className="container" id="productDetails">
      <Carousel id="productCarousel">
        <Carousel.Item>
          <img
            className="d-block carouselImage"
            src={photo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carouselImage"
            src={photo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carouselImage"
            src={photo}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <h1>Product name</h1>
        <div>
          <Rating
            id="rating"
            transition
            initialValue={3}
            allowFraction
            readonly
            size={20}
            fillColor={3}
          ></Rating>
        </div>
        <span>Price: 3000EGP</span>
        <div>
          <input type="button" value="add to cart " />
        </div>
      </div>
    </div>
  );
};
export default ProductView;
