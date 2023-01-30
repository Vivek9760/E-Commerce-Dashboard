// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ()=>{
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');

    const logout = () =>{
        localStorage.clear();
        navigate('/signup')
    }

    return(
        <div>
            <img src="data:image/png;base64,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"
            className='logo'  alt="logo" />
     
            { 
            auth ? //ternery operator
            <ul className='nav-ul'>
                <li id="nav-product"><Link to="/" >Products</Link></li>
                <li><Link to="/add" >Add Product</Link></li>
                {/* <li><Link to="/update/" >Update Product</Link></li> */}
                <li><Link to="/profile" >Profile</Link></li> 
                <li> <Link onClick={logout} to="/signup" >Logout ({JSON.parse(auth).name})</Link></li> 
            </ul>
            :
            <ul className='nav-ul2'>
                <li><Link to="/signup" >Signup</Link></li>
                <li><Link to="/login" >Login Page</Link></li>
            </ul>
            }
        </div>
    )
};

export default Nav;