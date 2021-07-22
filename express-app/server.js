


const express= require("express");
const path = require("path")
const PORT = process.env.PORT ||3000;
const app = express();


app.set('views',path.join(__dirname,"views"))
app.set("view engine",'pug')

app.use(express.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{ 
    res.render("index",{title:"Form Handeling"})
})
app.post("/form_submit",(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    res.end(`Your username is ${username} and email is ${email} `)
})

app.listen(PORT,()=>{
    console.log(`Listening to the requests on https://localhost:${PORT}`);
}) 