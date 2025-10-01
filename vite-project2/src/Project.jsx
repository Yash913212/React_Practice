import React from "react";
import './Project.css';


const Project = () =>{
return(
    <div className="body">
        <div className="glow"></div>
    <div className="login-box">
            <h2>Login</h2>
            <input type="text" placeholder="Enter Your Name"/>
            <input type="password" placeholder="Enter Password"/> 
            <button>Sign-In</button>
        </div>
    </div>
);
}
export default Project;