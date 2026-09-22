import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import { ArrowRight, Leaf, ShieldCheck, Truck, Sparkles } from "lucide-react";
import "./App.css";

export default function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-main-container">
      {!showProductList ? (
        <div className="landing-page landing-page-container background-image">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} /> Premium Botanical Sanctuary
            </div>

            <h1 className="hero-title">Welcome to Paradise Nursery</h1>
            <div className="divider"></div>
            <h2 className="hero-subtitle">Where Green Meets Serenity</h2>

            <p className="hero-description">
              Transform your living spaces with our sustainably grown, air-purifying indoor plants,
              vibrant outdoor gardens, and rare succulents. Handcrafted greenery delivered with love
              to your doorstep.
            </p>

            <div className="hero-actions">
              <button
                className="get-started-btn"
                onClick={handleGetStartedClick}
                aria-label="Get Started"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <Leaf size={20} className="feature-icon" />
                <span>100% Healthy Plants</span>
              </div>
              <div className="feature-item">
                <Truck size={20} className="feature-icon" />
                <span>Secure Doorstep Delivery</span>
              </div>
              <div className="feature-item">
                <ShieldCheck size={20} className="feature-icon" />
                <span>30-Day Plant Guarantee</span>
              </div>
            </div>

            <div className="landing-about-wrapper" style={{ marginTop: "4rem", width: "100%" }}>
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <div className={`product-list-container ${showProductList ? "visible" : ""}`}>
          <ProductList onContinueShopping={() => setShowProductList(false)} />
        </div>
      )}
    </div>
  );
}
