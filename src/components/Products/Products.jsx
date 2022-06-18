import React from "react";
import Product from "./Product/Product";
import axios from "axios";
import { useEffect, useState } from "react";


const Products = () => {
  const [data, setData] = useState([]);
  
     useEffect(() => {
      axios({
        url: `http://localhost:8080/products`,
        method: "GET",
      })
        .then((res) => {
          setData(res.data);
        })
      
    }, []);
  return (
  <div>
   
      {   data.map((item)=>{
          return(
          <div key={item.id}>
          <Product  data={item}/>
          </div>)
          })
        }
 </div>)

      
};

export default Products;
