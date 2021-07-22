
const express = require("express");

const app =express();

const Logger = function(req,res,next){
    console.log("LOGGED IN");
    next();
     

}
const reqesttime = function(req,res,next){
    req.reqesttime = Date.now();
    next();
}

app.use(Logger)
app.use(reqesttime)

app.get('/',(req,res)=>{
    res.send(`Current Time ${req.reqesttime}`)
})

app.listen(3000,()=>{
    console.log("server started on port 3000");
})