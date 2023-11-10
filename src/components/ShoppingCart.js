import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const groupedCartItems = groupCartItems(cartItems);

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {groupedCartItems.map((groupedItem) => (
          <li key={groupedItem.id}>
            <div>
              {groupedItem.name} - ${groupedItem.price} x {groupedItem.quantity}
            </div>
            <button onClick={() => removeFromCart(groupedItem.id)}>Retirer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;

const groupCartItems = (cartItems) => {
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((groupedItem) => groupedItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }

    return acc;
  }, []);

  return groupedItems;
};