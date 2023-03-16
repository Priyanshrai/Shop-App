const express = require("express");

const router = express.Router();

const adminController=require('../controllers/admin')

router.get("/add-product",adminController.getAdmin );

router.post("/add-product",adminController.postAdmin );

module.exports = router;
