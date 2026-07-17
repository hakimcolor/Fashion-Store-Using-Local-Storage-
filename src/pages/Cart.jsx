import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import toast from 'react-hot-toast';

// cart component — used both as a standalone page and as a navbar dropdown panel
const Cart = ({ onClose }) => {
  const { cart, setCart } = useContext(CartContext);

  // remove any item click remove button
  const handleRemove = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
    toast.success('Your cart Remove successfully');
  };

  // quantity increase click plus button
  const handleIncrease = (id) => {
    const updateCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updateCart);
  };

  // quantity decrease click minus button
  const handleDecrease = (id) => {
    const updateCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updateCart);
  };

  // after delete or again all calculation or total cost
  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // flat shipping rate
  const shipping = cart.length > 0 ? 120 : 0;

  const total = subtotal + shipping;

  // when rendered inside the navbar dropdown, onClose is passed
  // when rendered as a standalone page, onClose is undefined
  const isDropdown = typeof onClose === 'function';

  // ── standalone page wrapper ──────────────────────────────────────────────
  if (!isDropdown) {
    return (
      <div className="w-[90%] mx-auto py-10">
        <h1 className="arbutus-slab text-4xl text-center mb-10">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              <FiShoppingCart className="text-4xl text-gray-400" />
            </div>
            <h2 className="arbutus-slab text-2xl text-gray-500">
              Your Cart is Empty
            </h2>
            <p className="dmsans text-sm text-gray-400">
              Add some products and come back!
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              >
                {/* left accent bar on hover */}
                <div
                  className="absolute left-0 top-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"
                  style={{
                    background: 'linear-gradient(to bottom, #155dfc, #3b82f6)',
                  }}
                />

                {/* product image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl shadow ring-1 ring-black/5 shrink-0"
                />

                {/* product info */}
                <div className="flex-1 min-w-0">
                  <h3 className="arbutus-slab text-base leading-tight truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    {item.selectedColor && (
                      <span className="dmsans text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                        {item.selectedColor}
                      </span>
                    )}
                    {item.selectedSize && (
                      <span className="dmsans text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                        {item.selectedSize}
                      </span>
                    )}
                  </div>
                  <p
                    className="dmsans text-sm font-semibold flex items-center mt-1"
                    style={{ color: '#155dfc' }}
                  >
                    <TbCurrencyTaka className="text-base" />
                    {item.price}
                  </p>
                </div>

                {/* right side — quantity controls and remove */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                    title="remove item"
                  >
                    <MdDeleteOutline className="text-xl" />
                  </button>
                  <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1.5 py-1">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity <= 1}
                      className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                    >
                      <FiMinus size={12} strokeWidth={3} />
                    </button>
                    <span className="dmsans text-sm font-bold text-gray-800 min-w-[22px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-white hover:border-transparent active:scale-95 transition-all duration-200 cursor-pointer"
                      style={{ '--tw-hover-bg': '#155dfc' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = '#155dfc')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = '')
                      }
                    >
                      <FiPlus size={12} strokeWidth={3} />
                    </button>
                  </div>
                  <p className="dmsans text-xs font-bold text-gray-700 flex items-center">
                    <TbCurrencyTaka className="text-sm" />
                    {item.quantity * item.price}
                  </p>
                </div>
              </div>
            ))}

            {/* order summary */}
            <div className="flex justify-end mt-4">
              <div className="w-full sm:w-[360px] border border-gray-100 rounded-2xl p-5 shadow-lg bg-white space-y-3">
                <div className="flex justify-between dmsans text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="flex items-center font-medium text-gray-800">
                    <TbCurrencyTaka />
                    {subtotal}
                  </span>
                </div>
                <div className="flex justify-between dmsans text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="flex items-center font-medium text-gray-800">
                    <TbCurrencyTaka />
                    {shipping}
                  </span>
                </div>
                <div className="border-t border-dashed border-gray-200" />
                <div className="flex justify-between">
                  <span className="arbutus-slab text-lg">Total</span>
                  <span
                    className="arbutus-slab text-xl flex items-center"
                    style={{ color: '#155dfc' }}
                  >
                    <TbCurrencyTaka className="text-xl" />
                    {total}
                  </span>
                </div>
                <button
                  className="w-full text-white dmsans font-semibold py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:opacity-90 active:scale-[.98] cursor-pointer mt-1"
                  style={{ background: '#155dfc' }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── dropdown panel layout — items scroll, summary pinned to bottom ────────
  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      {/* empty cart state */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 gap-4 py-16">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
            <FiShoppingCart className="text-3xl" style={{ color: '#155dfc' }} />
          </div>
          <h2 className="arbutus-slab text-xl text-gray-500">
            Your Cart is Empty
          </h2>
          <p className="dmsans text-sm text-gray-400">
            Add some products and come back!
          </p>
        </div>
      ) : (
        <>
          {/* scrollable items — grows and scrolls, never pushes summary away */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              >
                {/* left accent bar on hover */}
                <div
                  className="absolute left-0 top-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"
                  style={{
                    background: 'linear-gradient(to bottom, #155dfc, #3b82f6)',
                  }}
                />

                {/* product image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-xl shadow ring-1 ring-black/5 shrink-0"
                />

                {/* product info */}
                <div className="flex-1 min-w-0">
                  <h3 className="arbutus-slab text-sm leading-tight truncate">
                    {item.name}
                  </h3>

                  {/* color and size badges */}
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    {item.selectedColor && (
                      <span
                        className="dmsans text-xs bg-blue-50 px-2 py-0.5 rounded-full"
                        style={{ color: '#155dfc' }}
                      >
                        {item.selectedColor}
                      </span>
                    )}
                    {item.selectedSize && (
                      <span
                        className="dmsans text-xs bg-blue-50 px-2 py-0.5 rounded-full"
                        style={{ color: '#155dfc' }}
                      >
                        {item.selectedSize}
                      </span>
                    )}
                  </div>

                  {/* price per item */}
                  <p
                    className="dmsans text-sm font-semibold flex items-center mt-1"
                    style={{ color: '#155dfc' }}
                  >
                    <TbCurrencyTaka className="text-sm" />
                    {item.price}
                  </p>
                </div>

                {/* right side — quantity controls and remove */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  {/* remove button */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                    title="remove item"
                  >
                    <MdDeleteOutline className="text-lg" />
                  </button>

                  {/* quantity plus minus section */}
                  <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1.5 py-0.5">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity <= 1}
                      className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                    >
                      <FiMinus size={10} strokeWidth={3} />
                    </button>

                    <span className="dmsans text-xs font-bold text-gray-800 min-w-[18px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="w-5 h-5 flex items-center justify-center rounded-full border text-white active:scale-95 transition-all duration-200 cursor-pointer"
                      style={{ background: '#155dfc', borderColor: '#155dfc' }}
                    >
                      <FiPlus size={10} strokeWidth={3} />
                    </button>
                  </div>

                  {/* line total */}
                  <p className="dmsans text-xs font-bold text-gray-700 flex items-center">
                    <TbCurrencyTaka className="text-xs" />
                    {item.quantity * item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* summary + checkout — always pinned at bottom, never scrolls */}
          <div className="shrink-0 border-t border-gray-100 px-4 py-4 bg-white space-y-2.5">
            {/* subtotal row */}
            <div className="flex justify-between dmsans text-sm text-gray-500">
              <span>Subtotal</span>
              <span className="flex items-center font-medium text-gray-800">
                <TbCurrencyTaka className="text-sm" />
                {subtotal}
              </span>
            </div>

            {/* shipping row */}
            <div className="flex justify-between dmsans text-sm text-gray-500">
              <span>Shipping</span>
              <span className="flex items-center font-medium text-gray-800">
                <TbCurrencyTaka className="text-sm" />
                {shipping}
              </span>
            </div>

            {/* dashed divider */}
            <div className="border-t border-dashed border-gray-200" />

            {/* total row */}
            <div className="flex justify-between items-center">
              <span className="arbutus-slab text-base">Total</span>
              <span
                className="arbutus-slab text-lg flex items-center font-bold"
                style={{ color: '#155dfc' }}
              >
                <TbCurrencyTaka className="text-lg" />
                {total}
              </span>
            </div>

            {/* proceed to checkout button */}
            <button
              className="w-full text-white dmsans font-semibold py-3 rounded-2xl transition-all duration-300 shadow-md hover:opacity-90 active:scale-[.98] cursor-pointer mt-1"
              style={{ background: '#155dfc' }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
