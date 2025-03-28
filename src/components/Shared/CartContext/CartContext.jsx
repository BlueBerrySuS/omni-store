"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.0,
      quantity: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7d2372e49643c2f5f90dc96087ba2300a55a6049?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
    },
    {
      id: 2,
      name: "Red Capsicum",
      price: 14.0,
      quantity: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57e999935ee1b7742ea080be0db1b5858c8b75ba?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, updateQuantity, removeItem, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
