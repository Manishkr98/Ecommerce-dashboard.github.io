import React, { useEffect, useState } from 'react'
import Styles  from './UpdateProduct.module.css'
import {useParams, useNavigate} from 'react-router-dom'

function UpdateProduct() {

    const[name, setName]= useState('');
    const[price, setPrice]= useState('');
    const[category, setCategory]= useState('');
    const[company, setCompany]= useState('');
    const params = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
      // console.log(params)
      getProductDetails();
    },[]);


    const getProductDetails= async()=>{
      let result = await fetch(`http://localhost:3000/product/${params.id}`);
      result = await result.json();
      // console.log(result);
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setCompany(result.company);
      
    }

    const UpdateProductfun=async()=>{
       
        let result = await fetch(`http://localhost:3000/product/${params.id}`,{
          method:'put',
          body:JSON.stringify({name, price, category, company}),
          headers:{
          'Content-Type':"application/json"
          }
        });
        result = await result.json();
        console.log(result);
        navigate('/')
         

    }



  return (
    <div className={`${Styles.UpdateProduct}`}>
        <h2>Update_Product</h2>
        <div className={`${Styles.inputBox}`}>
      <input type="text" placeholder='Enter Product Name' onChange={(e)=>{setName(e.target.value)}} value={name}/>
      <input type="text" placeholder='Enter Product Price' onChange={(e)=>{setPrice(e.target.value)}} value={price} />
      <input type="text" placeholder='Enter Product Category' onChange={(e)=>{setCategory(e.target.value)}} value={category} />
      <input type="text" placeholder='Enter Product Company' onChange={(e)=>{setCompany(e.target.value)}}  value={company}/>
      </div>
      <button onClick={UpdateProductfun}>Update Product</button>

    </div>
  )
}

export default UpdateProduct
