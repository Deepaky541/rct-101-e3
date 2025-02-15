import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import RequiredAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products"
import Login from "./pages/Login"



function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={
            <RequiredAuth>
            <Home>
             <Route
            path="/products"
            element={<Products />} />
            </Home>
          </RequiredAuth>}>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
