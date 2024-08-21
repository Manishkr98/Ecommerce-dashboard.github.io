import styles from "./ProductList.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch('http://localhost:3000/products')
    result = await result.json();
    setProducts(result);
  };
 
  const deleteProduct=async (id)=>{
    let result =await fetch(`http://localhost:3000/product/${id}`,{
      method:"Delete"
    });
    result =await result.json()
    if(result){
      alert("Record is deleted")
      getProducts();
    }
  }

  const searchHandle = async (event)=>{
    // console.log(event.target.value)
    let key = event.target.value;
    let result = await fetch(`http://localhost:3000/search/${key}`)
    result = await result.json();
    if(result){
      setProducts(result);
    }
  }

  return (
    <div className={`${styles.ProductList}`}>
      <h1>Product list</h1>
      <input type="text" placeholder="Search Product..." autoFocus  onChange={searchHandle}/>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      {
      products.map((items, index) =>
        <ul key={items._id}>
          <li>{index+1}</li>
          <li>{items.name}</li>
          <li>${items.price}</li>
          <li>{items.category}</li>
          <li><button onClick={()=>deleteProduct(items._id)}>Delete</button>
          <Link to={"/Update/"+items._id}>Update</Link>
          </li>
        </ul>
      )
      }
    </div>
  );
}

export default ProductList;
