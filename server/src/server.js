const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const registerRoute = require("./routes/register.route");
const loginRoute = require("./routes/login.route");
app.use(cors());
app.use(bodyparser.json());
app.use("/", registerRoute);
app.use("/", loginRoute);

app.listen(4000, () => {
  console.log("server is running on port 4000...");
});
