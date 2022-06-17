import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./Product.css"


const Product = ({data}) => {
    
    const [count, setcount] = useState(1);
    const [visible, setvisible] = useState(1);
 const addcart=()=>{
     fetch("http://localhost:8080/cartItems", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify({
         productId: data.id,
         count: count,
       }),
     })
       .then((r) => r.json())
       .then((d) => {
         setcount(count);
         setvisible(0);
       });
 }

 
  const Ondelete = (id) => {
    fetch(`http://localhost:8080/cartItems/${data.id}`, {
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
          onClick={() => setcount(count + 1)}
        >
          +
        </button>
        <span data-cy="product-count">{count}</span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          onClick={() => {
            setcount(count - 1);
            if(count<2)
            {
              setvisible(1)
              setcount(1);
            }
          }}
        >
          -
        </button>
        <button
          data-cy="product-remove-cart-item-button"
          onClick={Ondelete}
        >
          remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;
