import React from "react";
import { useState } from "react";
import "./Product.css"
import { useEffect } from "react";
import axios from "axios";



const Product = ({data}) => {
    const [count, setcount] = useState(1);
    const [visible, setvisible] = useState(1);


   
useEffect(() => {  
 axios
   .patch(`http://localhost:8080/cartItems/${data.id}`, {
     count: count,
   })
   .catch((error) => console.log(error)); 
}, [count,data.id])


      useEffect(() => {
          axios({
          url: `http://localhost:8080/cartItems/${data.id}`,
        })
          .then((res) => {
            setcount(res.data.count);
            if(res.data.count>=1)
            {
              setvisible(0);
            }
          }).catch((err)=>{console.log("ignore")})
  },[data.id])
      

 const addcart=()=>{
     fetch("http://localhost:8080/cartItems", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify({
         id: data.id,
         count: count,
       }),
     })
       .then((r) => r.json())
       .then((d) => {
         setvisible(0);
       });
 }

 
  const Ondelete = (id) => {
    fetch(`http://localhost:8080/cartItems/${id}`, {
      method: "DELETE",
    });
    setvisible(1);
  };

 
  return (
    <div data-cy={`product-${data.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <div className={visible === 0 ? "product" : ""}>
        <button data-cy="product-add-item-to-cart-button" onClick={addcart}>
          add to cart
        </button>
      </div>
      <div className={visible === 1 ? "product" : ""}>
        
        <button
          data-cy="product-increment-cart-item-count-button"
          onClick={() => {
            setcount(count + 1);
          }}
        >
          +
        </button>
        <span data-cy="product-count">{count}</span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          onClick={() => {
            setcount(count - 1);
            if(count<=1)
            {
              setvisible(1)
              setcount(1);
              Ondelete(data.id);
            }
          }}
        >
          -
        </button>
        <button
          data-cy="product-remove-cart-item-button"
          onClick={()=>(Ondelete(data.id))}
        >
          remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;
