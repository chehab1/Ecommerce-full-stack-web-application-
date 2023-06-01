const { Router } = require("express");
const imageRoute = Router();
const { client } = require("../config");
const fs = require("fs");
const { resolve } = require("path");
const dir = "./products";

imageRoute.get("/product-image?", (req, res) => {
  const id = req.query.id;
  const fileabs = resolve(`${dir}/${id}`);
  const file = fs.readdirSync(fileabs);
  let flag = false;
  file.forEach((image) => {
    if (image == id + ".jpg" || image == id + ".png") {
      res.sendFile(resolve(`${dir}/${id}/${image}`));
      flag = true;
    }
  });
  if (!flag) res.status(404).send("Image not found");
});

module.exports = imageRoute;
