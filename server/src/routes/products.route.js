const { Router } = require("express");
const productsRoute = Router();
const { client } = require("../config");

productsRoute.get("/products", async (req, res) => {
  const connection = await client.connect();
  try {
    const query = `SELECT * FROM products;`;
    const result = await connection.query(query);
    if (result.rows.length) {
      res.status(200).send(result.rows);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(404);
  } finally {
    connection.release();
  }
});

module.exports = productsRoute;
