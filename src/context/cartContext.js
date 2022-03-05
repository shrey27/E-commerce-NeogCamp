import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    const index = items.findIndex((e) => e.id === item.id);
    if (index < 0) {
      setItems([...items, item]);
    }
  };

  const incQty = (id) => {
    const index = items.findIndex((e) => e.id === id);
    let arr = [...items];
    arr[index].count++;
    setItems(arr);
  };

  const decQty = (id) => {
    const index = items.findIndex((e) => e.id === id);
    let arr = [...items];
    arr[index].count--;
    if (arr[index].count < 1) {
      arr = arr.filter((elem) => elem.id !== id);
    }
    setItems(arr);
  };

  return (
    <CartContext.Provider
      value={{ items, totalItems: items.length, incQty, decQty, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartCtx = () => useContext(CartContext);

export { CartProvider, useCartCtx };
