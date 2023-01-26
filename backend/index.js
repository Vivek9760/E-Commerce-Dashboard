const express = require('express');
const app = express();
const cors = require('cors');
require('./db/config.js');
const user = require("./db/user.js");

app.use(express.json());
app.use(cors());

app.get(('/'), async(req,res)=>{
    let result = await user.find();
    console.log(result);
    res.send(result);
})

app.post('/register',async(req,res)=>{
    const data = new user(req.body);
    const result =await data.save();
    res.send(result);
    console.log(data);
})
app.listen(5000);