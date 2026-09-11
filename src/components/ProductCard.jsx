import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "../redux/CartSlice";
import { ShoppingCart, Check, Tag } from "lucide-react";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={plant.image}
          alt={plant.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80";
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
            <span>₹{plant.price.toLocaleString("en-IN")}</span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`add-to-cart-btn ${isInCart ? "btn-added" : ""}`}
            aria-label={isInCart ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}
          >
            {isInCart ? (
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
}
