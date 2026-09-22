import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/plants");
  };

  return <CartItem onContinueShopping={handleContinueShopping} />;
}
