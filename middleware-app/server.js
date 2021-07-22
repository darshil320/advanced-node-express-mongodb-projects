
const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express();
const morgan = require("morgan")
const {v4:uuidv4} = require("uuid")

const port = 3000;


let accessLogStream = fs.createWriteStream(path.join(__dirname,'accesss.log'),{flags:'a'} )
morgan.token('param',function(req,res,param){
    return "userToken";
});
app.use(morgan(":id:param:method:status:url 'HTTP/:http-version' "))
morgan.token('id',function getid(req){
    return req.id;
});
app.use(morgan(":id:param:method:status:url 'HTTP/:http-version'",{stream :accessLogStream}))

app.use(assignid);


 
app.get('/',(req,res)=>{
    res.end("Blogger morgan Logger")
})

function assignid(req,res,next){
    req.id = uuidv4();
    next();
}

app.listen(port ,()=>{
    console.log(`LIstening on http://localhost:${port}`);
})