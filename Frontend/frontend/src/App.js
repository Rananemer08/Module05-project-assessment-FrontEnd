import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "../src/Pages/products/products"
import Registration from './Pages/Register/Register';
import Login from '../src/Pages/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path="/registration" element={<Registration />}/>
<Route path="/login" element={<Login />}/>
<Route path="/products" element={<Products />}/>
</Routes>
    </BrowserRouter>  
    </div>
    
  );
}

export default App;