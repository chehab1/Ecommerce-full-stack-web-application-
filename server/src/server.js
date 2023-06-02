const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const registerRoute = require("./routes/register.route");
const loginRoute = require("./routes/login.route");
const productsRoute = require("./routes/products.route");
const productRoute = require("./routes/product.route");
const imageRoute = require("./routes/image.route");
const addToCartRoute = require("./routes/addToCart.route");
const cartRoute = require("./routes/cart.route");

app.use(cors());
app.use(bodyparser.json());
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", productsRoute);
app.use("/", productRoute);
app.use("/", imageRoute);
app.use("/", addToCartRoute);
app.use("/", cartRoute);

app.listen(4000, () => {
  console.log("server is running on port 4000...");
});
