import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cakes from "../pages/Cakes";
import Category from "../pages/Category";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/category/:categoryPath" element={<Category />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
