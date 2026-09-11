import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";
import "./App.css";

export default function App() {
  return (
    <div className="app-main-layout">
      <Navbar />
      <main className="app-content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
