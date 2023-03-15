const express=require("express");

const path=require("path");

const rootdir=require('../util/path')

const router=express.Router();


router.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','contact-us.html'))
  });
  



module.exports=router;