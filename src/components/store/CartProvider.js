import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.map((i) => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat(item);
      }

      return updatedItems;
    });

    setTotalAmount((prevTotal) => prevTotal + item.price * item.amount);
  };

  const removeItem = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.map((i) => i.id === id);
      const existingItem = prevItems[existingItemIndex];
      if (!existingItem) return prevItems;

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = prevItems.filter((i) => i.id !== id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }

      return updatedItems;
    });

    setTotalAmount(
      (prevTotal) => prevTotal - items.find((i) => i.id === id).price
    );
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: totalAmount,
        addItem: addItem,
        removeItem: removeItem,
        showCartHandler :showCartHandler,
        hideCartHandler:hideCartHandler,
        cartVisible:cartVisible
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
