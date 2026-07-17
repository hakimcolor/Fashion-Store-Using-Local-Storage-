import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      <h1>Shopping cart</h1>
      {cart.length === 0 ? (
        <div>
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <div>
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                {/* leftsite */}
                <div>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h2>{item.name}</h2>
                    <p>Cattgory:{item.category}</p>
                    <p>Color:{item.selectedColor}</p>
                    <p>size:{item.selectedSize }</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
