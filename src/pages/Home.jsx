import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Truck, Sparkles } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/plants");
  };

  return (
    <div className="landing-page-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} /> Premium Botanical Sanctuary
        </div>
        <h1 className="hero-title">Paradise Nursery</h1>
        <h2 className="hero-subtitle">Bring Nature Into Your Home</h2>
        <p className="hero-description">
          Transform your living spaces with our sustainably grown, air-purifying indoor plants, vibrant outdoor gardens, and rare succulents. Handcrafted greenery delivered with love to your doorstep.
        </p>

        <div className="hero-actions">
          <button onClick={handleGetStarted} className="get-started-btn">
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
      </div>
    </div>
  );
}
