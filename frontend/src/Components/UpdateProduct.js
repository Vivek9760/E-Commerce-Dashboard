
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () =>{
     
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const params = useParams();
    const navigate = useNavigate();
    
    const id = params.id;

   const updateProduct = async() =>{

    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:'put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json',
             authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });

    // result = await result.json();    
    // console.log(result)
    
    navigate('/')
   }
   
   
   const getProduct = async() =>{
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:'get',
        headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
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