const express = require("express");
const sucessController=require('../controllers/sucess')
const router = express.Router();

router.post("/sucess",sucessController.postSucess)


module.exports = router;