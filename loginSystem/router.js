

var express = require("express")
var router = express.Router();

const crendential ={
    email:'lashkaridarshil@gmail.com',
    password:'2003'
}

//Login user

router.post('/login',(req,res)=>{
    if(req.body.email == crendential.email && req.body.password == crendential.password ){
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
        // res.end('Login Successfull');
    }else{
        res.end("Invalid username or password")
    }
});

// route for dashboard
router.get("/dashboard",(req,res) =>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("You are not Authorized Go to HEll man")
    }
})

//route for logout
router.get('/logout',(req,res) =>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title:"Express",logout:"Logout Successfuly"})
        }

    })
})

module.exports = router;