import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../redux/CartSlice";
import { ShoppingBag, Leaf, Info, Home, Store } from "lucide-react";

export default function Navbar() {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Leaf className="brand-icon" size={26} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Where Greenery Meets Home</span>
          </div>
        </Link>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/plants"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            <Store size={18} />
            <span>Plants</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            <Info size={18} />
            <span>About Us</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `nav-link cart-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            <div className="cart-icon-container">
              <ShoppingBag size={20} />
              <span className="cart-badge">{totalQuantity}</span>
            </div>
            <span>Cart 🛒 ({totalQuantity})</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
