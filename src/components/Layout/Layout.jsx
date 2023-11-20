import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Outlet } from 'react-router-dom'
import Routers from "../../routers/Routers";
const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};
// Layout.js

export default Layout;
