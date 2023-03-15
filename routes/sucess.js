const express = require("express");
const path=require("path")
const rootdir=require('../util/path')
const router = express.Router();

router.post("/sucess",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootdir,'views','sucess.html'))
})


module.exports = router;