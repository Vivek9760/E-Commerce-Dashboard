
import { useState } from "react";

const AddProduct = () =>{
     
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false);

   const addProduct = async() =>{
    console.warn(!name)

    if(!name || !price || !category || !company)
    {
        setError(true);
    return false;
    }

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
   setError(false);
   }
    
    return(
        <div className="add-product">
            <h1>Add Product</h1>
            <input type="text" className="input-box" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter product name" />
            {error && !name && <span className="invalid-input">Enter valid name</span>}
            
            <input type="text" className="input-box" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter product price" />
            {error && !price && <span className="invalid-input">Enter valid price</span>}
            
            <input type="text" className="input-box" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter product category" />
            {error && !category && <span className="invalid-input">Enter valid category</span>}
            
            <input type="text" className="input-box" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter product company" />
            {error && !company && <span className="invalid-input">Enter valid company</span>}
            
            <input type="button" className="app-btn" onClick={addProduct} value="Add Product" />
        </div>
    )
}

export default AddProduct;