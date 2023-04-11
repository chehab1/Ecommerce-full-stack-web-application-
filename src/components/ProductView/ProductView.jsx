import "./ProductView.css";
import photo from "../../assets/product1.jpeg";
import Carousel from "react-bootstrap/Carousel";
import { Rating } from "react-simple-star-rating";

const ProductView = () => {
  const product = {
    rating: 4,
  };
  return (
    <div className="container" id="productDetails">
      <div className="row">
        <div className="col-md-4 col-12">
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
        </div>
        <div id="details" className="col-md-8 col-12">
          <h1>Product name</h1>
          <span id="descriptionSpan">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            cumque cum natus ut velit et quo rem est illum, quam veniam eveniet
            molestiae laboriosam assumenda accusamus a, impedit odit non?
          </span>
          <div>
            <Rating
              id="rating"
              transition
              initialValue={product.rating}
              allowFraction
              readonly
              size={20}
              fillColor={product.rating < 3 ? "red" : "orange"}
            ></Rating>
          </div>
          <span>Price: 3000EGP</span>
          <div>
            <input id="addButton" type="button" value="Add to cart " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductView;
