const express = require('express');
const app = express();
const cors = require('cors');
require('./db/config.js');
const User = require("./db/user.js");
const product = require('./db/product.js');
const jwt = require('jsonwebtoken');
const jwtKey = 'vivek';

app.use(express.json());
app.use(cors()); 


app.post('/register',async(req,res)=>{
    const data = new User(req.body);
    let user =await data.save();
    user = user.toObject();
    delete user.password;
    jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            res.send({user:"something went wrong"});
        }
    res.send({user,auth:token});
    console.log(data);
})
});


app.post('/login', async(req,res)=>{
    if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    // console.log(user);
    if(user){
        jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
            if(err){
                res.send({user:"something went wrong"});
            }
            res.send({user,auth:token});
        })
    }else{
        res.send(false);
    }
}else{
    res.send(false);
}
});


app.post('/add-product',verifyToken,async(req,res)=>{
    let newProduct =new product(req.body);
    let result = await newProduct.save();
    res.send(result);
});


app.get('/products',verifyToken,async(req,res)=>{
    let result =await product.find(req.body);
    if(result.length){
    res.send(result);
    }else{
        res.send({result:"No product found"});
    }
});

app.delete('/product/:id',verifyToken,async(req,res)=>{
    const result = await product.deleteOne({_id:req.params.id});
    res.send(req.params.id);
    // console.log(result.deletedCount)
});

app.get('/product/:id',verifyToken, async(req,res)=>{
    const result = await product.findOne({_id:req.params.id})
    if(result){
    res.send(result)
    }else{
        res.send({result:"No record find"})
    }
})

app.put('/product/:id',verifyToken, async(req,res)=>{
    const result = await product.updateOne(
    {_id:req.params.id},
    {$set : req.body}
    );

    res.send(result);
})

app.get('/search/:key',verifyToken, async (req,res)=>{
    const result = await product.find({
       $or : [{name:{$regex : new RegExp(req.params.key,'i')}},   //for case insensitive method
              {price:{$regex : req.params.key}},                  //for case sensitive
              {category:{$regex : new RegExp(req.params.key,'i')}},
              {company:{$regex : new RegExp(req.params.key,'i')}}
            ]
    })
    res.send(result)
})

function verifyToken(req,res,next){                              //verifyToken function is a middleware here
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        jwt.verify(token,jwtKey,(err,valid)=>{
            if(err){
                res.status(403).send("Enter a valid header");
            }else{
                next();
            }
        })
    }else{
        res.status(404).send("Please provide token to the header");
    }
}

app.listen(5000);