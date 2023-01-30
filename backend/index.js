const express = require('express');
const app = express();
const cors = require('cors');
require('./db/config.js');
const user = require("./db/user.js");
const product = require('./db/product.js');

app.use(express.json());
app.use(cors()); 


app.post('/register',async(req,res)=>{
    const data = new user(req.body);
    let result =await data.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
    console.log(data);
});


app.post('/login', async(req,res)=>{
    if(req.body.password && req.body.email){
    let result = await user.findOne(req.body).select("-password");
    // console.log(result);
    if(result){
        res.send(result);
    }else{
        res.send(false);
    }
}else{
    res.send(false);
}
});


app.post('/add-product',async(req,res)=>{
    let newProduct =new product(req.body);
    let result = await newProduct.save();
    res.send(result);
});


app.get('/products',async(req,res)=>{
    let result =await product.find(req.body);
    if(result.length){
    res.send(result);
    }else{
        res.send({result:"No product found"});
    }
});

app.delete('/product/:id',async(req,res)=>{
    const result = await product.deleteOne({_id:req.params.id});
    res.send(req.params.id);
    // console.log(result.deletedCount)
});

app.get('/product/:id', async(req,res)=>{
    const result = await product.findOne({_id:req.params.id})
    if(result){
    res.send(result)
    }else{
        res.send({result:"No record find"})
    }
})

app.put('/product/:id', async(req,res)=>{
    const result = await product.updateOne(
    {_id:req.params.id},
    {$set : req.body}
    );

    res.send(result);
})

app.get('/search/:key', async (req,res)=>{
    const result = await product.find({
       $or : [{name:{$regex : new RegExp(req.params.key,'i')}},   //for case insensitive method
              {price:{$regex : req.params.key}},                  //for case sensitive
              {category:{$regex : new RegExp(req.params.key,'i')}},
              {company:{$regex : new RegExp(req.params.key,'i')}}
            ]
    })
    res.send(result)
})

app.listen(5000);