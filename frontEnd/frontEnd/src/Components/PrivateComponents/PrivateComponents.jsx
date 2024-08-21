import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'


function PrivateComponents() {
  let auth = localStorage.getItem("user");
  return (
   
      auth?<Outlet/>:<Navigate to='/SignUp'/>
   
  )
}

export default PrivateComponents;
