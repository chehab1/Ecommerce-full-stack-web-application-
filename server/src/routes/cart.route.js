const { Router } = require("express");
const cartRoute = Router();
const { client } = require("../config");

cartRoute.post("/add-to-cart", async (req, res) => {
  const connection = await client.connect();
  try {
    const query = `INSERT INTO cart values(${req.body.pid},${req.body.userid},${req.body.quantity}) RETURNING *;`;
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

module.exports = cartRoute;
