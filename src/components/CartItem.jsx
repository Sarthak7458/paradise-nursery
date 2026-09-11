import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      // If quantity is 1 and decrease is clicked, remove item
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  const itemSubtotal = item.price * item.quantity;

  return (
    <div className="cart-item-card">
      <div className="cart-item-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="cart-item-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80";
          }}
        />
      </div>

      <div className="cart-item-details">
        <div className="cart-item-header">
          <h3 className="cart-item-title">{item.name}</h3>
          <span className="cart-item-category">{item.category}</span>
        </div>

        <p className="cart-item-price">
          Unit Price: <strong>₹{item.price.toLocaleString("en-IN")}</strong>
        </p>

        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button
              onClick={handleDecrease}
              className="qty-btn qty-btn-decrease"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="qty-value">{item.quantity}</span>
            <button
              onClick={handleIncrease}
              className="qty-btn qty-btn-increase"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="cart-item-subtotal">
            <span className="subtotal-label">Subtotal:</span>
            <span className="subtotal-amount">
              ₹{itemSubtotal.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            onClick={handleDelete}
            className="delete-item-btn"
            aria-label="Delete item from cart"
          >
            <Trash2 size={18} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
