import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, selectCartItems } from "../redux/CartSlice";
import { Plus, Minus, Trash2, ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";

export default function CartItem({ onContinueShopping }) {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // Helper to get numeric unit price from item
  const getUnitPrice = (item) => {
    if (typeof item.price === "number") return item.price;
    if (typeof item.cost === "number") return item.cost;
    const str = String(item.cost || item.price || "0");
    const parsed = parseFloat(str.replace(/[^0-9.]/g, ""));
    return isNaN(parsed) ? 0 : parsed;
  };

  // Required function to calculate total amount for all cart items
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += getUnitPrice(item) * item.quantity;
    });
    return total;
  };

  // Required function to calculate total cost for a specific item
  const calculateTotalCost = (item) => {
    return getUnitPrice(item) * item.quantity;
  };

  // Increment item quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrement item quantity (removes if quantity reaches 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id || item.name));
    }
  };

  // Remove item completely from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.id || item.name || item));
  };

  // Handle Continue Shopping action
  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Handle Checkout action
  const handleCheckoutShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    alert("Functionality to be added for future reference");
  };

  const totalCartAmount = calculateTotalAmount();

  return (
    <div className="cart-container cart-page-container">
      <div className="cart-header">
        <h2 className="total_cart_amount catalog-title">
          Total Cart Amount: ₹{totalCartAmount.toLocaleString("en-IN")}
        </h2>
        <p className="cart-subtitle">
          {cart.length === 0
            ? "Your cart is currently empty"
            : `Showing ${cart.length} unique plant item${cart.length > 1 ? "s" : ""}`}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-card">
          <ShoppingBag size={56} className="empty-cart-icon" />
          <h2>Your Shopping Cart is Empty</h2>
          <p>Explore our lush collection of plants and add your favorites to bring nature home.</p>
          <button onClick={handleContinueShopping} className="get-started-btn">
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </button>
        </div>
      ) : (
        <div className="cart-content-layout">
          <div className="cart-items-list">
            {cart.map((item) => {
              const unitPrice = getUnitPrice(item);
              const itemTotalCost = calculateTotalCost(item);

              return (
                <div key={item.id || item.name} className="cart-item-card">
                  <div className="cart-item-image-wrapper">
                    <img
                      src={item.image || item.thumbnail}
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
                      <span className="cart-item-category">{item.category || "Plant"}</span>
                    </div>

                    <p className="cart-item-price">
                      Unit Cost: <strong>₹{unitPrice.toLocaleString("en-IN")}</strong>
                    </p>

                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() => handleDecrement(item)}
                          className="qty-btn qty-btn-decrease"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          onClick={() => handleIncrement(item)}
                          className="qty-btn qty-btn-increase"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="cart-item-subtotal">
                        <span className="subtotal-label">Subtotal:</span>
                        <span className="subtotal-amount">
                          ₹{itemTotalCost.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        onClick={() => handleRemove(item)}
                        className="delete-item-btn cart-item-delete"
                        aria-label="Delete item from cart"
                      >
                        <Trash2 size={18} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-summary-card">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-row">
              <span>Total Items</span>
              <strong>{cart.reduce((sum, i) => sum + i.quantity, 0)} items</strong>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₹{totalCartAmount.toLocaleString("en-IN")}</strong>
            </div>
            <div className="summary-row">
              <span>Plant Delivery</span>
              <strong className="text-free">FREE</strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total-row">
              <span>Total Amount</span>
              <span className="summary-total-price">
                ₹{totalCartAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="cart-button-group">
              <button
                onClick={handleContinueShopping}
                className="btn-continue-shopping get-started-btn"
              >
                <ArrowLeft size={18} />
                <span>Continue Shopping</span>
              </button>

              <button
                onClick={handleCheckoutShopping}
                className="btn-checkout add-to-cart-btn"
              >
                <Sparkles size={18} />
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
