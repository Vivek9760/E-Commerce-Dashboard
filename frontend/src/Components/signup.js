import { useState } from "react";


const Signup = ()=>{

    const[name,setName] = useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword] = useState("");

    const handleChange = (e)=>{setName(e.target.value)};

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
                onClick={()=>{
                    console.log(name,email,password)
                }} type="button" value="Sign Up" />
        </div>
    )
}

export default Signup;