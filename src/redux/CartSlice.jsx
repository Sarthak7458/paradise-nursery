import { createSlice } from "@reduxjs/toolkit";

const parsePrice = (priceVal, costVal) => {
  if (typeof priceVal === "number") return priceVal;
  if (typeof costVal === "number") return costVal;
  const str = String(costVal || priceVal || "0");
  const parsed = parseFloat(str.replace(/[^0-9.]/g, ""));
  return isNaN(parsed) ? 0 : parsed;
};

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const calculateTotals = (state) => {
  let quantity = 0;
  let amount = 0;

  state.items.forEach((item) => {
    quantity += item.quantity;
    amount += (item.price || parsePrice(item.price, item.cost)) * item.quantity;
  });

  state.totalQuantity = quantity;
  state.totalAmount = amount;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) =>
          (item.id !== undefined && i.id === item.id) ||
          (item.name !== undefined && i.name === item.name)
      );

      const numPrice = parsePrice(item.price, item.cost);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: item.id || Date.now(),
          name: item.name,
          price: numPrice,
          cost: item.cost || `₹${numPrice}`,
          image: item.image || item.thumbnail,
          category: item.category || "Plants",
          description: item.description || "",
          quantity: 1,
        });
      }

      calculateTotals(state);
    },
    removeItem: (state, action) => {
      const payload = action.payload;
      state.items = state.items.filter((item) => {
        if (typeof payload === "object" && payload !== null) {
          return item.id !== payload.id && item.name !== payload.name;
        }
        return item.id !== payload && item.name !== payload;
      });
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { id, name, quantity } = action.payload;
      const existingItem = state.items.find(
        (i) =>
          (id !== undefined && i.id === id) ||
          (name !== undefined && i.name === name) ||
          (id !== undefined && i.name === id)
      );

      if (existingItem) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i !== existingItem);
        } else {
          existingItem.quantity = quantity;
        }
      }

      calculateTotals(state);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalAmount = (state) => state.cart.totalAmount;

export default cartSlice.reducer;
