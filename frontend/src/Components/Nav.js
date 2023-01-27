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
            <ul className='nav-ul'>
                <li><Link to="/" >Products</Link></li>
                <li><Link to="/add" >Add Page</Link></li>
                <li><Link to="/update" >Update Page</Link></li>
                <li><Link to="/profile" >Profile Page</Link></li>
                { //ternery operator
                auth ?
                <li> <Link onClick={logout} to="/signup" >Logout</Link></li> 
                : 
                <>
                <li><Link to="/signup" >Signup</Link></li>
                <li><Link to="/login" >Login Page</Link></li>
                </>
                }

            </ul>
        </div>
    )
};

export default Nav;