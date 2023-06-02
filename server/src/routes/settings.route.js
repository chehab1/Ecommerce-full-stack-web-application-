const { Router } = require("express");
const settingsRoute = Router();
const { client } = require("../config");

settingsRoute.patch("/settings", async (req, res) => {
  const { userid, fname, lname, password } = req.body;
  const connection = await client.connect();
  try {
    const query = `UPDATE users SET fname='${fname}', lname='${lname}', password='${password}' WHERE userid=${userid} RETURNING *;`;
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

module.exports = settingsRoute;
