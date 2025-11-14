const express = require("express");

const pool = require("../db/db");

const router = express.Router();

app.post('/reviews', (req, res) => {
    const {movie_id,review,rating,user_id}= req.body
    sql=`insert into reviews (movie_id,review,rating,user_id) values(?,?,?,?,now())`
    pool.query(sql,[movie_id,review,rating,user_id],(error, data) => {
      if (data) {
        res.send({ status: "success", data: data });
      } else {
        res.send({ status: "error", error: error });
      }
    })
});

router.get("/myreview", (req, res) => {
    const {uid}=req.body;
  sql = `select * form reviews where user_id=?`;
  pool.query(sql, [uid],(error, data) => {
    if (data) {
      res.send({ status: "success", data: user });
    } else {
      res.send({ status: "error", error: error });
    }
  });
});

router.delete('/myreview',(req, res) => {
    const {id}=req.body;
  sql = `delete from reviews where id=?`;
  pool.query(sql, [id],(error, data) => {
    if (data) {
      res.send({ status: "success", data: user });
    } else {
      res.send({ status: "error", error: error });
    }
  })
})



router.post('/myreview:id',(req, res) => {

    const {review,rating,id}=req.body;
  sql = `update reviews set review=? rating=? where id=?`;
  pool.query(sql, [review,rating ,id],(error, data) => {
    if (data) {
      res.send({ status: "success", data: user });
    } else {
      res.send({ status: "error", error: error });
    }
  });
})




module.exports = router;
