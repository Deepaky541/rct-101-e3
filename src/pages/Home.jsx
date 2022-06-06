import React from "react";
import { Routes,Route } from "react-router-dom";
import Products from "../components/Products/Products"
import Login from "./Login";
import RequiredAuth from "../hoc/RequiredAuth";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
     <Navbar />
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Products />
              </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </div>
  );
};

export default Home;
