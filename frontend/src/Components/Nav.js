// import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ()=>{
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/" >Products</Link></li>
                <li><Link to="/add" >Add Page</Link></li>
                <li><Link to="/update" >Update Page</Link></li>
                <li><Link to="/logout" >Logout Page</Link></li>
                <li><Link to="/profile" >Profile Page</Link></li>
                <li><Link to="/signup" >Signup</Link></li>
            </ul>
        </div>
    )
};

export default Nav;