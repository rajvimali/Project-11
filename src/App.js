import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./r";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Product from "./Components/Product";
import Header from "./Components/Header";
import ProductCart from "./Components/ProductCart";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<ProductCart />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;