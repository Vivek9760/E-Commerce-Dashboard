
const AddProduct = () =>{

    return(
        <div className="add-product">
            <h1>Add Product</h1>
            <input type="text" className="input-box"  placeholder="Enter product name" />
            <input type="text" className="input-box" placeholder="Enter product price" />
            <input type="text" className="input-box" placeholder="Enter product category" />
            <input type="text" className="input-box" placeholder="Enter product company" />
            <input type="button" className="app-btn" value="Add Product" />
        </div>
    )
}

export default AddProduct;