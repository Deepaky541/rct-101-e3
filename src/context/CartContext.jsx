import React, { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {


const [cartcount, setcartcount] = useState([])
const [count, setcount] = useState(0)

         useEffect(() => {
           axios({
             url: `http://localhost:8080/cartItems`,
             method: "GET",
           })
             .then((res) => {
              setcartcount(res.data);
              setcount(res.data.length);
             })
             .catch((err) => {});
         }, []);
        
         

  return <CartContext.Provider value={{count}}>{children}</CartContext.Provider>;
};
