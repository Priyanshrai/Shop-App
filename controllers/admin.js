const path = require("path");
const rootdir = require("../util/path");


exports.getAdmin = (req, res, next) => {
    res.sendFile(path.join(rootdir, "views", "add-product.html"));
  };

exports.postAdmin = (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  }