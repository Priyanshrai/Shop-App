const path=require("path")
const rootdir=require('../util/path')

exports.postSucess = (req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootdir,'views','sucess.html'))
}