const express= require("express");
const path = require("path");
const PORT = process.env.PORT ||3000;
const app = express();
const cookies = require("cookie-parser")
const session = require("express-session");


app.use(cookies());

let users ={
    name:"darshil",
    age:"18"
}

app.use(session({
    secret:"Your secret key is secure and secrest ",
    resave : true,
    saveUninitialized:true
})) 


app.get('/',(req,res) =>{
    req.session.name = "darshil"; 
    return res.send("session set");

})

app.get('/session',(req,res)=>{
    var name =req.session.name;
    console.log(req.session);
    return res.send(name);

})

app.get('/setuser*',(req,res)=>{
    res.cookie("userData",users);
    res.send("User data added to cookies");

})

app.get("/getuser",(req,res)=>{
    res.send(req.cookies)
})

app.get('/logout',(req,res)=>{
    res.clearCookie('userData')
    res.send("User logout Succesfully")
})

app.listen(PORT,()=>{
    console.log(`Listening to the requests on https://localhost:${PORT}`);
}) 