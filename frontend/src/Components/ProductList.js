import { useEffect, useState } from "react";


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
 console.log(products)

    return(
        <div className="list-container">
    <table  className="product-list">
        <caption><h1>Product List</h1></caption>
        <tr className="list-heading">
                <td className="list-data">S.No.</td>
                <td className="list-data">Name</td>
                <td className="list-data">Price</td>
                <td className="list-data">Category</td>
        </tr>
 
        { 
            products.map((item,index)=>{
                return (
                <tr>
                <td className="list-data">{index+1}</td>
                <td className="list-data">{item.name}</td>
                <td className="list-data">{item.price}</td>
                <td className="list-data">{item.category}</td>
                </tr>
                )
            })
        }
    </table>
    </div>
    )
}

export default ProductList;