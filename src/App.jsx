import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}
