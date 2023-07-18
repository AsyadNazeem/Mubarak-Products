import "./styles/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Login from "./Admin/login/Login";
import Signup from "./Admin/signup/Signup";
import AdminPanel from "./Admin/AdminPanel";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup />} />
          <Route path="AdminPanel" element={<AdminPanel />} />
        </Routes>
      </div>
  );
}

export default App;
