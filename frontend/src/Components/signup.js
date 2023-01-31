import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Signup = ()=>{

    const[name,setName] = useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate()

    const userData = async ()=>{
        let result = await fetch('http://localhost:5000/register', {
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
               'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.log(result);
        if(result){
            navigate('/');
        }
        localStorage.setItem('user',JSON.stringify(result.user));
        localStorage.setItem('token',JSON.stringify(result.auth));

    };

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

  

    return(
        <div className="register">
            <h2>Register</h2>
                <input className="input-box"
                 value={name} onChange={(e)=>{setName(e.target.value)}}
                  type="text" placeholder="Enter Your Name" />
                
                <input className="input-box"
                 value={email} onChange={(e)=>{setEmail(e.target.value)}}
                 type="email" placeholder="Enter Your E-mail" />
                
                <input className="input-box"
                value={password} onChange={(e)=>{setPassword(e.target.value)}}
                type="password" placeholder="Enter Password" />
                
                <input className="app-btn"
                onClick={userData} type="button" value="Sign Up" />
        </div>
    )
}

export default Signup;