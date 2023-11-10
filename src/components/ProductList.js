import React from 'react';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Article 1', price: 10 },
    { id: 2, name: 'Article 2', price: 15 },
  ];

  return (
    <div className="ProductList">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;