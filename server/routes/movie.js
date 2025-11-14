const express = require("express");

const pool = require("../db/db");

const router = express.Router();

router.get("/AllMovie", (req, res) => {
  sql = `select * form movies`;
  pool.query(sql, (error, data) => {
    if (data) {
      res.send({ status: "success", data: user });
    } else {
      res.send({ status: "error", error: error });
    }
  });
});

module.exports = router;
