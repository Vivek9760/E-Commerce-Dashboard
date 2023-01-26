import { useState } from "react";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="login" >
            <input type="email" className="input-box" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
            <input type="password" className="input-box" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" />
            <input type="button" onClick={()=>{console.log(email,password)}} className="app-btn" value="Login" />
        </div>
    )
}

export default Login;