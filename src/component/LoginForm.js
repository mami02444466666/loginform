import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
      const [popupstyle, showpopup] =useState("hide")
      const popup = () =>{
          showpopup('login-popup')
          setTimeout(()=> showpopup("hide"),3000)
      } 
    return (
        <div className="cover">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTss6uim5KkiLMz7_cSHgTDHmdjUFT4L9_ZSQ&usqp=CAU"/>
           <h1>Login</h1>
           <input type="text"placeholder="username" />
           <input type="text"placeholder="user EMAIL" />
           <input type="password"placeholder="password" />
           <input type="password"placeholder="confirmspassword" />

           <button className="Login-btn" onClick={popup}>Login</button>
        

        <div className={popupstyle}>
            <h2>welcome</h2>
            <p>are you a student or lecturer?</p>
        </div>

           

          
        </div>
    )
}

export default LoginForm;