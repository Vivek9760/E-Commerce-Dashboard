const express = require('express');
const app = express();
const cors = require('cors');
require('./db/config.js');
const user = require("./db/user.js");

app.use(express.json());
app.use(cors()); 


app.post('/register',async(req,res)=>{
    const data = new user(req.body);
    let result =await data.save();
    result = result.toObject();
    delete result.password

    res.send(result);
    console.log(data);
})

app.post(('/login'), async(req,res)=>{
    if(req.body.password && req.body.email){
    let result = await user.findOne(req.body).select("-password");
    // console.log(result);
    if(result){
        res.send(result);
    }else{
        res.send("no user found")
    }
}else{
    res.send("no user found")
}
})

app.listen(5000);