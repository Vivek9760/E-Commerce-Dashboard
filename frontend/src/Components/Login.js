import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async() =>{
    let result = await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json()
    if(result.name){
     localStorage.setItem('user',JSON.stringify(result));
        navigate('/')
    }
    else{
        alert('Enter correct details')
    }
   }
   
   useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
    navigate('/');
    }
})

    return(
        <div className="login" >
            <h1>Login Page</h1>
            <input type="email" className="input-box" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
            <input type="password" className="input-box" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" />
            <input type="button" onClick={handleLogin} className="app-btn" value="Login" />
        </div>
    )
}

export default Login;