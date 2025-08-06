import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
 import { signup } from '../../config/firebase'

const Login = () => {

    const [currState, setCurrState] = useState("Sign Up");
    const [UserName, setUserName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

  return (
    <div className='Login'>
        <img src={assets.logo_big} alt="" className="Logo" />
        <form  className="login-form">
            <h2>{currState}</h2>
            {currState === "Sign Up"?<input onChange={(e)=>setUserName(e.target.value)} value={UserName} type="text" placeholder='UserName' className="form-input" required/> : null}
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="Email"  placeholder='Gmail Address' className="form-input" required/>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password"  placeholder='password' className="form-input" required/>
            <button type='submit'>{currState === "Sign Up"? "Create Account" : "Login now"}</button>
            <div className="login-term">
                <input type='checkBox'/>
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className="login-forgot"></div>
            <p className="login-toggle">
  {currState === "Login" ? (
    <>Create an account <span onClick={() => setCurrState("Sign Up")}>Sign Up</span></>
  ) : (
    <>Already have an account? <span onClick={() => setCurrState("Login")}>Login</span></>
  )}
</p>

        </form>
      
    </div>
  )
}

export default Login
