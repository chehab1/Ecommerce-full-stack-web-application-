const env = require("dotenv");
const { Pool } = require("pg");

env.config();

const { user, password, dbname, host, port, dbdriver } = process.env;

const config = {
  user: user,
  password: password,
  database: dbname,
  host: host,
  port: port,
  driver: dbdriver,
};

const client = new Pool(config);
module.exports = { client, config };
