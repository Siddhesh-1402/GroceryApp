import React, { createContext, useContext, useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: any) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);

      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
