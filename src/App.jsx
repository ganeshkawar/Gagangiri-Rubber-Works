import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Products from "./Component/Products";
import ContactUs from "./Component/ContactUs";
import LoginForm from "./Component/LoginForm";
import CardComponent from "./Component/CardComponent";
import MoreDetails from "./Component/MoreDetails";
import AdminDashboard from "./Component/AdminDashboard";
import ProductForm from "./Component/ProductForm";
import UpdateProduct from "./Component/UpdateProduct";
import UserInfo from "./Component/UserInfo";
import Footer from "./Component/Footer";

import "./index.css";

function App() {
  return (
    <>
      <div className="route">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/" element={<CardComponent />} />
          <Route path="/moredetails" element={<MoreDetails />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
