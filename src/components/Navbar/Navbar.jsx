import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const Navbar = () => {
   const [state, dispatch] = useContext(AuthContext);

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">home</Link>
      <span data-cy="navbar-cart-items-count">cart:0</span>
      <button data-cy="navbar-login-logout-button" >{state.isAuth ? "logout" : "login"}</button>
    </div>
  ); 
};

export default Navbar;
