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
  const totalCost = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  console.log(cart);

  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="arbutus-slab text-4xl text-center mb-10">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 border rounded-xl shadow">
          <h2 className="arbutus-slab text-3xl">Your Cart is Empty</h2>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row justify-between gap-6"
              >
                {/* leftsite */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-52 h-52 object-cover rounded-xl"
                  />

                  <div className="space-y-3">
                    <h2 className="arbutus-slab text-3xl">{item.name}</h2>

                    <p className="dmsans">
                      <span className="font-bold">Category:</span>{' '}
                      {item.category}
                    </p>

                    <p className="dmsans">
                      <span className="font-bold">Color:</span>{' '}
                      {item.selectedColor}
                    </p>

                    <p className="dmsans">
                      <span className="font-bold">Size:</span>{' '}
                      {item.selectedSize}
                    </p>

                    <p className="dmsans">
                      <span className="font-bold">Quantity:</span>{' '}
                      {item.quantity}
                    </p>
                  </div>
                </div>

                {/* rightsite */}
                <div className="flex flex-col justify-between items-start lg:items-end gap-5">
                  <div className="space-y-3">
                    <p className="dmsans font-semibold text-xl">
                      Price : ৳ {item.price}
                    </p>

                    <div className="bg-gray-100 border rounded-xl px-6 py-4 shadow text-center">
                      <p className="dmsans text-lg">
                        {item.quantity} × ৳{item.price}
                      </p>

                      <h2 className="arbutus-slab text-2xl mt-2">
                        ৳ {item.quantity * item.price}
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg dmsans transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* the cart ....total cost */}
          <div className="flex justify-end">
            <div className="border shadow-xl rounded-2xl p-8 w-full sm:w-[350px] bg-white">
              <h1 className="arbutus-slab text-3xl mb-5 text-center">
                Total Cost
              </h1>

              <h2 className="text-center text-4xl font-bold text-green-600 dmsans">
                ৳ {totalCost}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
