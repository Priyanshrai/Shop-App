const path=require("path");

const rootdir=require('../util/path')

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','contact-us.html'))
  }