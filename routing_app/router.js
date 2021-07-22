
const express = require("express");
const route = express.Router();;
const accounts = require('./database.js');



route.get('/accounts',(req,res)=>{  
    res.json({userData:accounts});

})
route.post('/accounts',(req,res)=>{
   const incomingAccounts = req.body;
   accounts.push(incomingAccounts)
   res.json(accounts);
})
route.get('/accounts/:id',(req,res)=>{
        const accountname = Number(req.params.id);
        const getAccount = accounts.find((account) => account.id === accountname)

        if(!getAccount){
            res.status(500).send(" Accounts not find ")
        }
        else{
            res.json({userData:[getAccount]})
        }
    })

module.exports = route;
