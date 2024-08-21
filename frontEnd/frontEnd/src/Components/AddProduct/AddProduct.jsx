import React, { useState } from 'react'
import Styles  from './AddProduct.module.css'
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const[name, setName]= useState('');
    const[price, setPrice]= useState('');
    const[category, setCategory]= useState('');
    const[company, setCompany]= useState('');
    const navigate = useNavigate()
    

    const AddProductfun=async()=>{
       
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:3000/add-product",{
          method:'post',
          body:JSON.stringify({name, price, category, company, userId}),
          headers:{

            "Content-Type":"application/json"
          }
        });
        result = await result.json();
        console.log(result);
        navigate("/")

    }



  return (
    <div className={`${Styles.AddProduct}`}>
        <h2>Add to Cart</h2>
        <div className={`${Styles.inputBox}`}>
      <input type="text" placeholder='Enter Product Name' onChange={(e)=>{setName(e.target.value)}} value={name}/>
      <input type="text" placeholder='Enter Product Price' onChange={(e)=>{setPrice(e.target.value)}} value={price} />
      <input type="text" placeholder='Enter Product Category' onChange={(e)=>{setCategory(e.target.value)}} value={category} />
      <input type="text" placeholder='Enter Product Company' onChange={(e)=>{setCompany(e.target.value)}}  value={company}/>
      </div>
      <button onClick={AddProductfun}>Add Product</button>

    </div>
  )
}

export default AddProduct
