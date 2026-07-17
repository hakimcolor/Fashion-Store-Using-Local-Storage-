import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  // remove any item click remove button
  const handleRemove = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
  };
  //after deleate or again all calculation or total cost
  const totalCost = cart.reduce((total, item) =>  item.totalAmount,0);

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
                    <p>size:{item.selectedSize}</p>
                    <p>Quantity:{item.quantity}</p>
                    
                  </div>
                </div>

                {/* rightsite */}
                <div>
                  <p>Price: {item.price}</p>
                  <p>{item.totalAmout}</p> {item.quantity * item.price}<br/>
                  <button
                    onClick={() => {
                    handleRemove(item.id)
                    }}
                    
                  >Remove</button>
                </div>
              </div>
            ))}
            </div>
            
            {/* the cart ....total cost */}
            <div>
              <h1>Total Cost</h1>
              <h2>{totalCost }</h2>
            </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
