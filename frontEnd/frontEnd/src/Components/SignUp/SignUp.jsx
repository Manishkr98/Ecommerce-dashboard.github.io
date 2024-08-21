import React, { useEffect, useState } from 'react'
import styles from './SignUp.module.css'
import {useNavigate} from 'react-router-dom'

function SignUp() {

  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate = useNavigate();

 useEffect(()=>{
  
  let auth = localStorage.getItem("user");
  if(auth){
    navigate("/");
  }

  })



  
  const userDataCollect= async()=>{
    // console.log(name,email, password);
    let result =await fetch('http://localhost:3000/SignUp',{
      method:'post',
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type': 'application/json'
      },

    });
    result =await result.json()
    console.log(result)
    if(result){
      localStorage.setItem("user",JSON.stringify(result));
      navigate('/');
    }
  }

  return (
    <div className={`${styles.SignUpContainer}`}>
      <h1>SignUp</h1>

      <div className={`${styles.inputBox}`}>
      <input type="text" placeholder='Enter Name'  autoFocus onChange={(e)=>setName(e.target.value)} value={name}/>

      <input type="Email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>

      <input type="Password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} />

      </div>
      <button type='button' onClick={userDataCollect}>Sign In</button>
    </div>
  )
}

export default SignUp
