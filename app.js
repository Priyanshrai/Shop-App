const path=require('path');
const express=require('express');
const bodyParser = require('body-parser');
const app=express();

const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop")
const contactusRoutes=require("./routes/contactus")
const sucessRoutes=require("./routes/sucess")


app.use(bodyParser.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname,'public')));


app.use("/admin",adminRoutes);
app.use(shopRoutes);
app.use("/admin",contactusRoutes);
app.use("/admin",sucessRoutes)




app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);