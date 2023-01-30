import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
            getProducts(); 
    },[])


    const getProducts = async() =>{

        let result =await fetch("http://localhost:5000/products");
        result =await result.json();
        setProducts(result)
    }

    const deleteProduct = async(id) => {

        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"delete"
        });
        // console.log(result)
        if(result){
        getProducts();
        }
      
    }

    return(
        <div className="list-container">
    <table  className="product-list">
        <caption><h1>Product List</h1></caption>
        <thead>
        <tr className="list-heading">
                <td className="list-data">S.No.</td>
                <td className="list-data">Name</td>
                <td className="list-data">Price</td>
                <td className="list-data">Category</td>
                <td className="list-data">Operation</td>
        </tr>
        </thead>

        <tbody>
        { 
            products.map((item,index)=>{
                return (
                <tr key={item._id}>
                <td className="list-data">{index+1}</td>
                <td className="list-data">{item.name}</td>
                <td className="list-data">{item.price}</td>
                <td className="list-data">{item.category}</td>
                <td className="list-data">
                    <span title="delete" className="delete-btn" onClick={()=>{deleteProduct(item._id)}}>💥</span>
                    <Link title="update" to={`/update/${item._id}`}>♻</Link>
                </td>
                </tr>
                )
            })
        }
        </tbody>
    </table>
    </div>
    )
}

export default ProductList;