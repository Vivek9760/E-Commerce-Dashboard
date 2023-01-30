
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () =>{
     
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const params = useParams()


   const updateProduct = async() =>{
    console.warn(name,price,category,company);
   }
   
   const id = params.id;
   const getProduct = async() =>{
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:'get'
    })
    result = await result.json();
    if(result){
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

   }

   useEffect(()=>{
    getProduct();
   },[])
    
    return(
        <div className="add-product">
            <h1>Update Product</h1>
            <input type="text" className="input-box" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter product name" />

            <input type="text" className="input-box" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter product price" />
              
            <input type="text" className="input-box" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter product category" />
                    
            <input type="text" className="input-box" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter product company" />
                  
            <input type="button" className="app-btn" onClick={updateProduct} value="Update Product" />
        </div>
    )
}

export default UpdateProduct;