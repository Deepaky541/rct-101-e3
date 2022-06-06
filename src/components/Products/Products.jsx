import React from "react";
import Product from "./Product/Product";
import axios from "axios";
import { useEffect, useState } from "react";


const Products = () => {
  const [data, setData] = useState([]);
   const [pid, setpid] = useState([]);




     useEffect(() => {
      axios({
        url: `http://localhost:8080/products`,
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {});                      
      
    }, []);
  return (
  <div>
   
      {
        data.map((item,i)=>(<div>
          <Product data={item}/>
        </div>))
        }
 </div>)

      
};

export default Products;
