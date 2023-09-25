import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import Login from './Login';
import "../styles/Auth.css"
import user_icon from '../components/Assets/person.png';
import email_icon from '../components/Assets/email.png';
import password_icon from '../components/Assets/password.png';
import linkedin_icon from '../components/Assets/linkedIn.png';
import gmail_icon from '../components/Assets/email_icon.png';
import github_icon from '../components/Assets/github.png';

function Auth(){
    const [userData, setUserData] = useState("");
    const [action, setAction] = useState("Sign Up")
    // const [click, setClick] = useState("")

    if (userData){
        window.localStorage.setItem("name", userData.name);
        window.localStorage.setItem("email", userData.email);
        window.localStorage.setItem("picture", userData.picture);

        return <Login info={userData} />
    }

    let name = window.localStorage.getItem("name");
    let email = window.localStorage.getItem("email");
    let picture = window.localStorage.getItem("picture");

    if (name && email && picture){
        setUserData({name, email, picture});
    }

    return(
    <>
      <div className='container'>
        <div className='header-sec'>
          <div className='text'>News Website</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action ==="Login"? <div></div>: <div className='input'>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Name' />
          </div>}
          <div className='input'>
            <img src={email_icon} alt='' />
            <input type='email' placeholder='Email' />
          </div>
          <div className='input'>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Password' />
          </div>
        </div>
        {action === "Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click here!</span></div>}
        <div className='submit-container'>
          <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        <div className='footer-sec'>
          <div className='footer-heading'>or Sign Up using</div>
          <img src={linkedin_icon} style={{height: "50px", width: "50px", marginLeft: "165px", marginRight: "10px", borderRadius: "70px"}} />
          <img src={gmail_icon} style={{height: "50px", width: "50px",gap: "50px",margin: "20px 10px 0 0", borderRadius: "50%"}} 
              />
          <img src={github_icon} style={{height: "50px", width: "50px",  borderRadius: "50px"}} />
        </div>
        <div style={{ marginLeft: "100px", borderRadius: "50px"}}>
        <GoogleOAuthProvider clientId="929954503961-vmpg6be87tk589437gl9ht0nqb2leqr8.apps.googleusercontent.com">
        <GoogleLogin 
           onSuccess={credentialResponse => {
            let token = credentialResponse.credential;
            var decoded = jwt_decode(token);
            setUserData(decoded);
           }}
           onError={() => {
            console.log('Login Failed');
           }}>
        </GoogleLogin>
      </GoogleOAuthProvider>
        </div>
        
      </div>
      
    </>
    )
}

export default Auth;