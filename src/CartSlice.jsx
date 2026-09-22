import cartReducer, {
  addItem,
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
} from "./redux/CartSlice";

export {
  addItem,
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
};
export default cartReducer;
