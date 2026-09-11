import React from "react";
import { Leaf, ShieldCheck, HeartHandshake, Sparkles, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-hero">
        <span className="about-tag">
          <Sparkles size={16} /> Our Story & Mission
        </span>
        <h1 className="about-title">Welcome to Paradise Nursery</h1>
        <p className="about-lead">
          Bringing Nature, Air Purity, and Vibrant Botanicals into Every Corner of Your Life.
        </p>
      </div>

      <div className="about-content-grid">
        <div className="about-card main-intro-card">
          <div className="card-icon-box">
            <Leaf size={32} />
          </div>
          <h2>Company Introduction</h2>
          <p>
            Paradise Nursery is a premier botanical nursery and online plant haven dedicated to helping people introduce nature into their homes, apartments, and workspaces. Founded with a deep passion for horticulture, we cultivate a wide spectrum of indoor greenery, outdoor garden specimens, and drought-resistant succulents that transform everyday rooms into refreshing living sanctuaries.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon-box">
            <Award size={32} />
          </div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to foster healthier, happier, and greener environments by connecting individuals with high-quality, sustainably grown plants. We strive to make plant parenting rewarding and effortless for gardeners of all experience levels through curated collections and expert care guidance.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon-box">
            <ShieldCheck size={32} />
          </div>
          <h2>Plant Quality Statement</h2>
          <p>
            Every plant at Paradise Nursery undergoes rigorous health inspections before dispatch. We nurture our saplings in optimal organic soil mixes, ensuring robust root systems, pest-free vibrant foliage, and strong vitality so your plants arrive ready to thrive from day one.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon-box">
            <HeartHandshake size={32} />
          </div>
          <h2>Customer-Focused Care</h2>
          <p>
            Your satisfaction and plant journey matter most to us. We back every order with safe eco-friendly packaging, door-step delivery guarantees, and lifelong customer care support to ensure your indoor forest grows flourishingly year-round.
          </p>
        </div>
      </div>
    </div>
  );
}
