const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "D2_92865_Rohit",
  password: "manager",
  database: "moviereview",
});
module.exports = pool;
