const { Router } = require("express");
const loginRoute = Router();
const { client } = require("../config");

loginRoute.post("/login", async (req, res) => {
  const connection = await client.connect();
  try {
    const query = `SELECT * FROM users WHERE email='${req.body.email}' AND password='${req.body.password}';`;
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

module.exports = loginRoute;
