

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  // remove the cart
  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success('Your cart Remove successfully');
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // calculation
  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const shipping = cart.length > 0 ? 120 : 0;
  const total = subtotal + shipping;

  //if no data in the cart
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 gap-4 py-16">
        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
          <FiShoppingCart className="text-3xl text-[#155dfc]" />
        </div>
        <h2 className="arbutus-slab text-xl text-gray-500">
          Your Cart is Empty
        </h2>
        <p className="dmsans text-sm text-gray-400">
          Add some products and come back!
        </p>
      </div>
    );
  }

  // dropdown
  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
     
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          >
        
            <div
              className="absolute left-0 top-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"
              style={{
                background: 'linear-gradient(to bottom, #155dfc, #3b82f6)',
              }}
            />

         
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded-xl shadow ring-1 ring-black/5 shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h3 className="arbutus-slab text-sm leading-tight truncate">
                {item.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                {[item.selectedColor, item.selectedSize].map(
                  (attr, idx) =>
                    attr && (
                      <span
                        key={idx}
                        className="dmsans text-xs bg-blue-50 px-2 py-0.5 rounded-full text-[#155dfc]"
                      >
                        {attr}
                      </span>
                    )
                )}
              </div>
              <p className="dmsans text-sm font-semibold flex items-center mt-1 text-[#155dfc]">
                <TbCurrencyTaka className="text-sm" />
                {item.price}
              </p>
            </div>
{/* deleat item  */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              <button
                onClick={() => handleRemove(item.id)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                title="remove item"
              >
                <MdDeleteOutline className="text-xl" />
              </button>

              <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1.5 py-0.5">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                  className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                >
                  <FiMinus size={10} strokeWidth={3} />
                </button>
                <span className="dmsans text-xs font-bold text-gray-800 min-w-[18px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-5 h-5 flex items-center justify-center rounded-full border text-white active:scale-95 transition-all duration-200 cursor-pointer bg-[#155dfc] border-[#155dfc]"
                >
                  <FiPlus size={10} strokeWidth={3} />
                </button>
              </div>

              <p className="dmsans text-xs font-bold text-gray-700 flex items-center">
                <TbCurrencyTaka className="text-xs" />
                {item.quantity * item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

{/* total */}
      <div className="shrink-0 border-t border-gray-100 px-4 py-4 bg-white space-y-2.5">
        {[
          { label: 'Subtotal', value: subtotal },
          { label: 'Shipping', value: shipping },
        ].map((row) => (
          <div
            key={row.label}
            className="flex justify-between dmsans text-sm text-gray-500 font-bold"
          >
            <span>{row.label}</span>
            <span className="flex items-center font-medium text-gray-800">
              <TbCurrencyTaka className="text-sm" />
              {row.value}
            </span>
          </div>
        ))}

        <div className="border-t border-dashed border-gray-200" />

        <div className="flex justify-between items-center">
          <span className="arbutus-slab text-base font-bold">Total</span>
          <span className="arbutus-slab text-lg flex items-center font-bold text-[#155dfc]">
            <TbCurrencyTaka className="text-lg" />
            {total}
          </span>
        </div>

        <button className="w-full text-white dmsans font-semibold py-3 rounded-2xl transition-all duration-300 shadow-md hover:opacity-90 active:scale-[.98] cursor-pointer mt-1 bg-[#155dfc]">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;