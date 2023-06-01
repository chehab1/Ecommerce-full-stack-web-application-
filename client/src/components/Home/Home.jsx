import Carousel from "react-bootstrap/Carousel";
import photo1 from "../../assets/carousel2.png";
import photo2 from "../../assets/carousel3.png";
import photo3 from "../../assets/carousel4.png";
import "./Home.css";
import Pcard from "../ProductCard/Pcard";
import useProducts from "../../shared/useProducts";
import { useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  useProducts(setProducts);
  return (
    <>
      <Carousel id="carouselContainer">
        <Carousel.Item>
          <img className="d-block w-100" src={photo1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div id="cards-container">
        <div id="inner-card-container">
          {products.map((product, index) => {
            return (
              <Pcard className="card" key={index} {...{ product }}></Pcard>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
