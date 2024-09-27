import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./functions/auth/login/Login";
import Register from "./functions/auth/register/Register";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
