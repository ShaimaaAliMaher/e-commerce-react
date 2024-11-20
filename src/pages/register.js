import '../component/New folder/register.css'
import image from '../component/images/beatsnoop.png'
import icon from '../component/images/google-icon.png'
import React, {  useRef, useState } from "react";
import Login from './login';
function Register() {
    const fname = useRef()
    const lname = useRef()
    const email = useRef()
    const password = useRef()
    const [login , setLogin ] =useState('true')
    const handleClick = (e) => {
        // console.log(fname.current.value, lname.current.value, email.current.value, password.current.value);
        e.preventDefault()
        if (fname.current.value && email.current.value && password.current.value && lname.current.value) {
            localStorage.setItem("fname", fname.current.value)
            localStorage.setItem("lname", lname.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
             localStorage.setItem("signUp", email.current.value)
             alert("Account created successfully!!")
            setLogin(!login)
        }
        else{
            alert('please fill All data')
        }
    }
    return (<>
       {login ? ( <div className="Register">
            <div className='img'>
              <img src={image} alt="register"/>
            </div>
            
            <div className='form'>
                <h2>Create an account</h2>
                <h6>Enter your details bellow</h6>
                <input type='text' placeholder='first name' ref={fname} />
                <input type='text' placeholder='last namename' ref={lname} />
                <input type='email' placeholder='Email or Phone Number' ref={email} />
                <input type='Password' placeholder='Password' ref={password} />
                <button className='create' onClick={handleClick}>Create Account</button> <br></br>
                <button className='icon-b'> <img src={icon} alt='icon'/>Sign up with google</button>
                <p onClick={()=>setLogin(!login)}>Already have Account? Login</p>
            </div>
    
        </div>): ( <Login/>)}
        </>
    );
}

export default Register;