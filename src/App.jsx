import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./functions/auth/login/Login";
import Register from "./functions/auth/register/Register";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import PersonalizeFlower from "./pages/PersonalizeFlower";
import PersonalizeTeddy from "./pages/PersonalizeTeddy";
import PersonalizeDedication from "./pages/PersonalizeDedication";
import SuccessRegister from "./pages/RegisterSuccess";
import SuccessPay from "./pages/PaySuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/personalizeFlower" element={<PersonalizeFlower/>}/>
        <Route path="/personalizeTeddy" element={<PersonalizeTeddy/>}/>
        <Route path="/personalizeDedication" element={<PersonalizeDedication/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/successRegister" element = {<SuccessRegister/>}/>
        <Route path="/successPay" element = {<SuccessPay/>}/>
      </Routes>
    </Router>
  );
}

export default App;
