import React, { useState } from "react";
import './login.css'
/*
login page notes
start with a div
create header, then the username and password feilds
*/

//this is using props
const Loginform = () => {
  return(
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <div className="login-btn">Login</div>
    </div>
  )
}

export default Loginform;