
import { useState } from "react";

const AddProduct = () =>{
     
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');

   const addProduct = async() =>{
    let userId = localStorage.getItem('user');
    userId = JSON.parse(userId)._id;
    console.log(userId);

    const result = await fetch("http://localhost:5000/add-product",{
    method:"post",
    body:JSON.stringify({name,price,category,company,userId}),
    headers:{
        "Content-Type":"application/json"
    }
   });

   console.log(await result.json());
   setName('');
   setCategory('');
   setCompany('');
   setPrice('');
   }
    
    return(
        <div className="add-product">
            <h1>Add Product</h1>
            <input type="text" className="input-box" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter product name" />
            <input type="text" className="input-box" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter product price" />
            <input type="text" className="input-box" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter product category" />
            <input type="text" className="input-box" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter product company" />
            <input type="button" className="app-btn" onClick={addProduct} value="Add Product" />
        </div>
    )
}

export default AddProduct;