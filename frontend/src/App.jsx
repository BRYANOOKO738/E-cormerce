import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import SingleProduct from './Pages/SingleProduct';
import Login from './Pages/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './Pages/Register';
import Cart from './Components/Cart';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';








function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App
