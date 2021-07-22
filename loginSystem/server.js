

const express = require("express")
const app = express()
const session = require("express-session")
const path = require("path");
const {v4:uuidv4} = require("uuid");
const bodyParser = require("body-parser")
const router = require("./router")

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

// load static assets
app.use("/static",express.static(path.join(__dirname,'public')));
app.use("/assets",express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));
app.use('/route',router);

 app.get('/',(req,res) =>{
     res.render('base',{title:"Login engine"})

 })
app.listen(PORT,()=>{
    console.log(`Listening to the server on http://localhost:${PORT}`);
})