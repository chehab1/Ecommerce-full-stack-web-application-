const { Router } = require("express");
const cartRoute = Router();
const { client } = require("../config");

cartRoute.get("/cart/:userid", async (req, res) => {
  const connection = await client.connect();
  try {
    const query = `
    SELECT * FROM (SELECT * FROM cart WHERE userid = ${req.params.userid}) as subquery, products as pd where subquery.pid = pd.pid;`;
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

cartRoute.delete("/cart?", async (req, res) => {
  const connection = await client.connect();
  try {
    const query = `DELETE FROM cart WHERE pid = ${req.query.productId} AND userid = ${req.query.userId};`;
    const result = await connection.query(query);
    if (result.rows.length) {
      res.status(200).send();
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
