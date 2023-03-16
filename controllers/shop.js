const path=require("path");

const rootdir=require('../util/path')

exports.getShop = (req, res, next)=>{
    res.sendFile(path.join(rootdir,'views','shop.html'));
}