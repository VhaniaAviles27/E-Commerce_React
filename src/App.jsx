import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./functions/auth/login/Login";
import Register from "./functions/auth/register/Register";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";
import Personalize from "./pages/Personalize";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/personalize" element={<Personalize/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
