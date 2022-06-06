import React, { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {


const [cartcount, setcartcount] = useState(1)

         useEffect(() => {
           axios({
             url: `http://localhost:8080/cartItems`,
             method: "GET",
           })
             .then((res) => {
               console.log(res);
              setcartcount(res.data);
             })
             .catch((err) => {});
         }, []);
         console.log(cartcount)

  return <CartContext.Provider>{children}</CartContext.Provider>;
};
