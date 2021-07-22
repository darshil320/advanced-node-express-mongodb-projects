
const express = require("express");
const app = express();
const route = require("./router");
const bodyParser = require("body-parser")
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',route);

//home route
app.get('/',(req,res)=>{
    res.end("Routing app");
})



app.listen(port,()=>{
    console.log(`Express server running on http://localhost:${port}`);
})

