const express = require("express");

const contactController = require("../controllers/contact");

const router = express.Router();

router.get("/contact-us", contactController.getContact);

module.exports = router;
