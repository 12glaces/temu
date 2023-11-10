import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { useCart } from './plugins/CartPlugin';

const App = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div className="App">
      <h1>TEMU Shopping Site</h1>
      <ProductList addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;