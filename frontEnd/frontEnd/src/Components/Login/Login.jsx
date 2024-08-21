import React, { useEffect, useState } from 'react'
import styles from './Login.module.css';
import {useNavigate} from 'react-router-dom'

function Login() {

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    },[])

    const userDataCollect=async()=>{
        // console.log(email, password);
        let result=await fetch('http://localhost:3000/login', {
            method:'post',
            body:JSON.stringify({email, password}),
            headers:{
                'Content-Type': 'application/json'
            }
        } );
        result= await result.json();
        // console.log(result);
        // if(result.name){
          localStorage.setItem("user", JSON.stringify(result))
          navigate("/")
        // }else{
        //     alert("please enter correct data...");
        // }
    }

  return (
    <div className={`${styles.SignUpContainer}`}>
      <h1>Login</h1>

      <div className={`${styles.inputBox}`}>
     
      <input type="Email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>

      <input type="Password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} />

      </div>
      <button type='button' onClick={userDataCollect}>Sign In</button>
    </div>
  )
}

export default Login
