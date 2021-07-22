

const express= require("express");
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;

// const publicpath = path.resolve(__dirname,'public')
     
// app.use(express.static('public'))
// app.use(express.static('Javascript'))
// app.use(express.static('Images'))
// app.use(express.static('CSS3'))
const data = {
    id:"darshil",
    college:"scet"
}
app.get('/',(req,res)=>{
    res.end("Welcome to my home page")

})
app.get('/about',(req,res)=>{
    res.json(data)

})
app.get('/contact',(req,res)=>{
    res.sendFile('/static/index.html')
})





app.listen(port,()=>{
    console.log('server is created on port:',port);
}) 