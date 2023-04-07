import Carousel from "react-bootstrap/Carousel";
import photo1 from "../../assets/carousel2.png";
import photo2 from "../../assets/carousel3.png";
import photo3 from "../../assets/carousel4.png";
import "./Home.css";
import Pcard from "../ProductCard/Pcard";

const a = [
  Pcard,
  Pcard,
  Pcard,
  Pcard,
  Pcard,
  Pcard,
  Pcard,
  Pcard,
  Pcard,
  Pcard,
];

function Home() {
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
          {a.map((i) => {
            return <Pcard id="card"></Pcard>;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
