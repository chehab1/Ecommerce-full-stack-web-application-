const { Router } = require("express");
const registerRoute = Router();
const { client } = require("../config");

registerRoute.post("/register", async (req, res) => {
  const connection = await client.connect();
  try {
    const query = `INSERT INTO users (fname, lname,email,password) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.password}') RETURNING *;`;
    const result = await connection.query(query);
    if (result.rows.length) {
      res.status(200).send(result.rows[0]);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.send({ status: "error", message: "Something went wrong" });
  } finally {
    connection.release();
  }
});

module.exports = registerRoute;
