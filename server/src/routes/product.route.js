const { Router } = require("express");
const productRoute = Router();
const { client } = require("../config");

productRoute.get("/product/:id", async (req, res) => {
  const connection = await client.connect();
  let id = req.params.id;
  try {
    const query = `SELECT * FROM products WHERE pid =${id};`;
    const result = await connection.query(query);
    if (result.rows.length) {
      res.status(200).send(result.rows[0]);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(404);
  } finally {
    connection.release();
  }
});

module.exports = productRoute;
