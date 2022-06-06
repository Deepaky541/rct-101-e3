import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const Product = ({data}) => {
    const params = useParams();
    console.log(data.id)
    const [count, setcount] = useState(0);
   





     
 const addcart=()=>{
     fetch("http://localhost:8080/cartItems", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify({
         productId: data.id,
         count: count,
         id: params.id,
       }),
     })
       .then((r) => r.json())
       .then((d) => {
         setcount(count);
       });
 }
  const Ondelete = (id) => {
    fetch(`http://localhost:8080/cartItems/${data.id}`, {
      method: "DELETE",
    });
  };

 
  
  const product = { id: params.id };
  return (
    <div data-cy={`product-${data.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      
      <button data-cy="product-add-item-to-cart-button" onClick={addcart}>add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>(setcount(count+1))}>+</button>
        <span data-cy="product-count">
          {
          count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>(setcount(count-1))}>-</button>
        <button data-cy="product-remove-cart-item-button" disabled={count==0} onClick={Ondelete}>remove from cart</button>
      </div>

    </div>
  );
};

export default Product;
