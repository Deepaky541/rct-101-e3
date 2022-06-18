import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const Navbar = () => {
   const [state,dispatch] = useContext(AuthContext);
   const [count] = useContext(CartContext);
   const navigate=useNavigate();

   const handletoggle=()=>{
     if(!state.isAuth){
      navigate("/login");
     }
     else{
        dispatch({
          type: "LOGOUT_SUCCESS"
        });
     }
   }

  
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">
        home
      </Link>
      <Link to="/login">login</Link>
      <span data-cy="navbar-cart-items-count">cart:{count}</span>
      <button onClick={handletoggle} data-cy="navbar-login-logout-button">
        {state.isAuth ? "logout" : "login"}
      </button>
    </div>
  ); 
};

export default Navbar;
