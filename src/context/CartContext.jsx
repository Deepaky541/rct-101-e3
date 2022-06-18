import React, { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {



const [concount, setconcount] = useState(0)

         useEffect(() => {
           axios({
             url: `http://localhost:8080/cartItems`,
             method: "GET",
           })
             .then((res) => {
              setconcount(res.data.length);
             })
             .catch((err) => {});
         }, []);
        
         

  return <CartContext.Provider value={[concount,{setconcount}]}>{children}</CartContext.Provider>;
};
