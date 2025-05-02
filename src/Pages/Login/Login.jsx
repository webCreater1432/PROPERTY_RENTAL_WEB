import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div id='login'>
        <div className="title">
            <span id='loginTitle'>
                Login Page
            </span>
        </div>
        <form action="#">

           <div className="list">
           <label htmlFor="email">Email</label>
           <input type="email" name="email" id="email" />
           </div>
           <div className="list">
           <label htmlFor="password">Password</label>
           <input type="password" name="password" id="password" />
           </div>
           <button id="loginBtn">LogIn</button>
        </form>
    </div>
  )
}

export default Login