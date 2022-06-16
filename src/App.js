import React from 'react';
import Navbar from './pages/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product'
import Booking from './pages/Booking'

import Login from './pages/Login';
import Signin from './pages/Signin';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Product />}/>
       
       <Route path="/Booking" element={<Booking />}/>
       
       <Route path="/Login" element={<Login />}/>
       <Route path="/Signin" element={<Signin />}/>
       <Route path="/Cart" element={<Cart />}/>
     </Routes>
    </div>
  );
};

export default App;