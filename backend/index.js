const express = require('express');
const app = express();
require('./db/config.js');
const users = require("./db/user.js");

app.use(express.json());


app.get(('/'), async(req,res)=>{
    let result = await users.find();
    console.log(result);
    res.send(result);
})

app.post('/register',async(req,res)=>{
    const data = new users(req.body);
    const result = data.save();
    res.send(result);
    console.log(data);
})
app.listen(5000);