import "./styles/App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Login from "./Admin/login/Login";
import Signup from "./Admin/signup/Signup";
import AdminPanel from "./Admin/components/Pages/Dashbord/AdminPanel";
import CuxStructs from "./Admin/components/Pages/Customer/CuxStructs";
import OrderStructs from "./Admin/components/Pages/Order/OrderStructs";
import ProductsStruct from "./Admin/components/Pages/Products/ProductsStruct";
import ReportsStruct from "./Admin/components/Pages/Reports/ReportsStruct";
import AdminStruct from "./Admin/components/Pages/Register/AdminStruct";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="adminPanel" element={<AdminPanel/>}/>
                <Route path="cuxStructs" element={<CuxStructs/>}/>
                <Route path="orderStructs" element={<OrderStructs/>}/>
                <Route path="productsStruct" element={<ProductsStruct/>}/>
                <Route path="reportsStruct" element={<ReportsStruct/>}/>
                <Route path="adminStruct" element={<AdminStruct/>}/>
            </Routes>
        </div>
    );
}

export default App;
