// import React from "react";

// const Router = () => {
//   return <div>Router</div>;
// };

// export default Router;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home1 from "../pages/Home1";
import Cart from "../pages/Cart1";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import ProductDetails1 from "../pages/ProductDetails1";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />}></Route>
      <Route path="home" element={<Home1 />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails1 />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="sign" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
