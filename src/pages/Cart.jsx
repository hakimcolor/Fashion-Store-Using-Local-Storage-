import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return <div>it's cart page ............

    
  </div>;
};

export default Cart;
