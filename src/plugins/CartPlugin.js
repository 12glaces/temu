import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(loadCartFromLocalStorage());
  }, []);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const newCart = [...prevCart, item];
      saveCartToLocalStorage(newCart);
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== itemId);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  return { cartItems, addToCart, removeFromCart };
};

export const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cartItems');
  return storedCart ? JSON.parse(storedCart) : [];
};