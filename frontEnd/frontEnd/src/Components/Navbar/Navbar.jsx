import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './Navbar.module.css'
import AddProduct from '../AddProduct/AddProduct';

function Navbar() {
  
  let auth = localStorage.getItem("user");
  const navigate = useNavigate();
  let logOut=()=>{
    localStorage.clear();
    navigate("/SignUp");
  }

  return (
    <div className={`${styles.NavContainer}`}>
      <div className={`${styles.logo}`}>M<span>24</span></div>
      {auth?   <ul>
      <li><Link to='/'>Product</Link></li>
      <li><Link to='/Add'>Add Product</Link></li>
      <li><Link to='/Update'>Update Product</Link></li>
      <li><Link to='/Profile'>Profile</Link></li>
      <li><Link onClick={logOut} to='/SignUp'  >Logout {JSON.parse(auth).name} </Link></li>
     

     </ul>
     :
     <ul className={`${styles.right}`}>
       <li><Link to='/SignUp'>SignUp</Link></li>
        <li><Link to='/Login'>Login</Link></li>
        
     </ul>
}
    </div>
  )
}

export default Navbar
