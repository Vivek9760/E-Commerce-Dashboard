const signup = ()=>{
    return(
        <div className="register">
            <h2>Register</h2>
                <input className="input-box" type="text" placeholder="Enter Your Name" />
                <input className="input-box" type="email" placeholder="Enter Your E-mail" />
                <input className="input-box" type="text" placeholder="Enter Password" />
                <input className="app-btn" type="button" value="Sign Up" />
        </div>
    )
}

export default signup;