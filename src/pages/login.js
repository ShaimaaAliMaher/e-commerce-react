import '../component/New folder/register.css'
import React, { useRef, useState } from "react";
 import Home from './Home';
import image from '../component/images/beatsnoop.png'

function Login() {
    const emailg = useRef()
    const passwordg = useRef()
     const [home , setHome] =useState('true')
     const handleClick = (e) => {
        //  console.log( emailg.current.value, passwordg.current.value);
        e.preventDefault()
        let email = localStorage.getItem('email')
        let password =localStorage.getItem('password')
        // console.log(email , password);
        
        if ( passwordg.current.value && emailg.current.value) {
            console.log(email, password);
            console.log(emailg.current.value, passwordg.current.value);
             alert("login successfully!!")
            setHome(!home)
            
        }
        else {
            alert('please fill All data')
        }
      }
    return (<>
       {home?( <div className="Register login">
            <div className='img'>
                <img src={image} alt="register" />
            </div>
            <div className='form'>
                <h2>Log in to Exclusive</h2>
                <h6>Enter your details bellow</h6>
                <input type='email' placeholder='Email or Phone Number' ref={emailg} />
                <input type='Password' placeholder='Password' ref={passwordg} />
                <button className='log' onClick={handleClick}>Login</button> 
                <span className='log2'>Forget Password? </span>

            </div>
       

        </div>):(<Home/>)}</>
    );
}

export default Login;