const express = require("express");

const pool = require("../db/db");

const router = express.Router();


app.post('/reviews', (req, res) => {
    const {movie_id,review,rating,user_id}= req.body
    sql=`insert into reviews (movie_id,review,rating,user_id) values(?,?,?,?)`
    pool.query(sql,[movie_id,review,rating,user_id],(error,data)=>{
      
    })
});

module.exports=router