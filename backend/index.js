const express = require('express');
const app =express();
// const mongoose = require('mongoose');

app.get(('/'),(req,res)=>{
    res.send("It's Working")
})

app.listen(5000)