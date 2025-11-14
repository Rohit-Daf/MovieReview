const express = require("express");
const pool = require("../db/db");

const router = express.Router();

router.put("/changePassword", (req, res) => {
  const { uid, newpassword } = req.body;

  const sql = `update users set password=? where id=?`;
  pool.query(sql, [newpassword, uid], (error, data) => {
    if (data) {
      res.send({ status: "success", data: data });
    } else {
      res.send({ status: "error", error: error });
    }
  });
});

router.put("/edit", (req, res) => {
  const { first_name, last_name, email, mobile, birth, uid } = req.body;
  sql = `update users set first_name =? last_name=? email=? mobile=? birth=? where id=?`;
  pool.query(
    sql,
    [first_name, last_name, email, mobile, birth, uid],
    (error, data) => {
      if (data) {
        res.send({ status: "success", data: data });
      } else {
        res.send({ status: "error", error: error });
      }
    }
  );
});

router.post("/register", (req, res) => {
  const { first_name, last_name, email, password, mobile, birth } = req.body;
  sql = `insert into users (first_name,last_name,email,password,mobile,birth) values(?,?,?,?,?,?)`;
  pool.query(
    sql,
    [first_name, last_name, email, password, mobile, birth],
    (error, data) => {
      if (data) {
        res.send({ status: "success", data: data });
      } else {
        res.send({ status: "error", error: error });
      }
    }
  );
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `select password from users where email=?`;
  pool.query(sql, [email], (error, data) => {
    if (data != "") {
      const pass = data[0];
      if (pass.password == password) {
        res.send({ status: "success", data: data });
      } else {
        res.send({ status: "error", error: "Enter valid password" });
      }
    } else {
      res.send({ status: "error", error: "Enter valid Email" });
    }
  });
});

// router.get("/:acc_no", (req, res) => {
//   const { acc_no } = req.params;
//   const sql = `select acc_no,name,email,password,phone,date,typeofAccount from Ebank_TB where acc_no=?`;
//   pool.query(sql, [acc_no], (error, data) => {
//     if (data != "") {
//       const user = data[0];
//       res.send({ status: "success", data: user });
//     } else {
//       res.send({ status: "error", error: error });
//     }
//   });
// });

module.exports = router;
