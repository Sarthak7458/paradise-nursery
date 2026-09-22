import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plantCategories } from "../data/plants";
import { addItem, selectCartItems } from "../redux/CartSlice";
import CartItem from "./CartItem";
import { Leaf, ShoppingCart, Check, Tag, Filter, Flower2 } from "lucide-react";

export default function ProductList({ onContinueShopping }) {
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Calculate total quantity of items in cart for badge
  const cartTotalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Track added items by name or id
  const isItemAdded = (plant) => {
    return cartItems.some((item) => item.id === plant.id || item.name === plant.name);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleCartClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    } else {
      setShowCart(false);
    }
  };

  const categories = ["All", ...plantCategories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === "All"
      ? plantCategories
      : plantCategories.filter((c) => c.name === selectedCategory);

  return (
    <div className="product-list-container">
      {/* Top Navbar Header */}
      <nav className="navbar-container">
        <div className="navbar-inner">
          <div
            className="navbar-brand"
            onClick={handleHomeClick}
            style={{ cursor: "pointer" }}
          >
            <div className="brand-icon-wrapper">
              <Leaf size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-title">Paradise Nursery</span>
              <span className="brand-subtitle">Where Green Meets Serenity</span>
            </div>
          </div>

          <div className="navbar-links">
            <button onClick={handleHomeClick} className="nav-link">
              Home
            </button>

            <button
              onClick={handlePlantsClick}
              className={`nav-link ${!showCart ? "nav-link-active" : ""}`}
            >
              Plants
            </button>

            <button
              onClick={handleCartClick}
              className={`nav-link cart-icon-container ${showCart ? "nav-link-active" : ""}`}
              aria-label="View shopping cart"
            >
              <ShoppingCart size={20} />
              <span className="cart-text">Cart</span>
              <span className="cart-badge">{cartTotalCount}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-list-page">
          <div className="product-list-header">
            <div className="header-pill">
              <Flower2 size={16} /> Premium Botanical Collection
            </div>
            <h1 className="catalog-title">Explore Paradise Plants</h1>
            <p className="catalog-subtitle">
              Hand-picked, healthy plants delivered directly from our greenhouses to your doorstep.
            </p>

            {/* Category Filter Pills */}
            <div className="category-filter-bar">
              <div className="filter-label">
                <Filter size={16} /> Filter by Category:
              </div>
              <div className="filter-buttons">
                {categories.map((catName) => (
                  <button
                    key={catName}
                    onClick={() => setSelectedCategory(catName)}
                    className={`filter-btn ${
                      selectedCategory === catName ? "active-filter" : ""
                    }`}
                  >
                    {catName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="categories-container">
            {displayedCategories.map((category) => (
              <section key={category.name} className="category-section">
                <div className="category-header">
                  <h2 className="category-title">{category.name}</h2>
                  <p className="category-desc">{category.description}</p>
                  <div className="category-divider"></div>
                </div>

                <div className="product-grid">
                  {category.plants.map((plant) => {
                    const added = isItemAdded(plant);

                    return (
                      <div key={plant.id || plant.name} className="product-card">
                        <div className="product-image-wrapper">
                          <img
                            src={plant.image || plant.thumbnail}
                            alt={plant.name}
                            className="product-image"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80";
                            }}
                          />
                          <span className="category-badge">{plant.category}</span>
                        </div>

                        <div className="product-info">
                          <h3 className="product-name">{plant.name}</h3>
                          <p className="product-description">{plant.description}</p>

                          <div className="product-bottom-row">
                            <div className="product-price">
                              <Tag size={16} className="price-tag-icon" />
                              <span>{plant.cost || `₹${plant.price}`}</span>
                            </div>

                            <button
                              onClick={() => handleAddToCart(plant)}
                              disabled={added}
                              className={`add-to-cart-btn ${added ? "btn-added" : ""}`}
                              aria-label={
                                added
                                  ? `${plant.name} added to cart`
                                  : `Add ${plant.name} to cart`
                              }
                            >
                              {added ? (
                                <>
                                  <Check size={18} />
                                  <span>Added to Cart</span>
                                </>
                              ) : (
                                <>
                                  <ShoppingCart size={18} />
                                  <span>Add to Cart</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
