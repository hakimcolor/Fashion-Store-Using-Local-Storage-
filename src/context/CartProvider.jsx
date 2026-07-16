import React, { useEffect, useState } from 'react';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === product.selectedColor &&
        item.selectedSize === product.selectedSize
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
                totalAmount: (item.quantity + product.quantity) * item.price,
              }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
