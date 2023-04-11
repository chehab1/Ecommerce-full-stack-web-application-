import "./ProductView.css";
import photo from "../../assets/product1.jpeg";
import Carousel from "react-bootstrap/Carousel";
import { Rating } from "react-simple-star-rating";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const ProductView = () => {
  const [disable, setDisable] = useState(false);
  const [adding, setAdding] = useState("Add");
  const handleClick = () => {
    setDisable(true);
    setAdding("Added");
  };
  const product = {
    price: 3000,
    rating: 4,
    quantity: 5,
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
                  src={photo}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carouselImage w-100"
                  src={photo}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carouselImage w-100"
                  src={photo}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="Pdetails" className="col-md-8 col-12">
            <h1>Product Name</h1>
            <span id="descriptionSpan">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              cumque cum natus ut velit et quo rem est illum, quam veniam
              eveniet molestiae laboriosam assumenda accusamus a, impedit odit
              non?
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
              ></Rating>{" "}
            </div>
            <span>Price: ${product.price}</span>
            <div>
              <Button
                variant="primary"
                id="addBtn"
                onClick={handleClick}
                disabled={disable}
              >
                {adding} to
                <AiOutlineShoppingCart id="cart-icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container" id="pDesc">
        <h1>Product description</h1>
        <div className="descText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          aperiam, aliquid tenetur doloremque quidem odit provident deserunt
          incidunt dicta, dignissimos vitae, culpa id porro? Enim in distinctio
          eveniet velit eos! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. A voluptate dolor quibusdam nam natus iure nostrum, dolore
          dolorem magnam doloribus in quisquam. Perferendis expedita tempora
          animi vel recusandae error veniam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis aperiam, aliquid tenetur
          doloremque quidem odit provident deserunt incidunt dicta, dignissimos
          vitae, culpa id porro? Enim in distinctio eveniet velit eos! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. A voluptate dolor
          quibusdam nam natus iure nostrum, dolore dolorem magnam doloribus in
          quisquam. Perferendis expedita tempora animi vel recusandae error
          veniam.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perferendis aperiam, aliquid tenetur doloremque quidem odit provident
          deserunt incidunt dicta, dignissimos vitae, culpa id porro? Enim in
          distinctio eveniet velit eos! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A voluptate dolor quibusdam nam natus iure nostrum,
          dolore dolorem magnam doloribus in quisquam. Perferendis expedita
          tempora animi vel recusandae error veniam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facere ad beatae quod perferendis Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Quia, omnis? Ipsum
          quae aut laboriosam at, possimus dignissimos libero reprehenderit
          numquam voluptatum expedita doloribus aliquid atque minus, inventore
          nemo maxime omnis.
        </div>
      </div>
    </>
  );
};
export default ProductView;
