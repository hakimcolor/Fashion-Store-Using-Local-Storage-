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
    setCart(cart.filter((item) => item.id !== id));
    toast.success('Your cart Remove successfully');
  };

  // quantity plus minus section
  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
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

  // ── empty state ───────────────────────────────────────────────────────────
  if (cart.length === 0) {
    return (
      <div
        className={
          isDropdown
            ? 'flex flex-col items-center justify-center flex-1 gap-3 py-16'
            : 'w-[90%] mx-auto py-24 flex flex-col items-center gap-4'
        }
      >
        {/* logo with faded cart icon overlay */}
        <div className="relative w-20 h-20">
          <img
            src="/logo (2).png"
            alt="oxistyle"
            className="w-full h-full object-contain rounded-full opacity-20"
          />
          <FiShoppingCart className="absolute inset-0 m-auto text-4xl text-[#155dfc]" />
        </div>

        {/* brand + message */}
        <p className="arbutus-slab text-lg font-bold">
          OXI<span style={{ color: '#155dfc' }}>STYLE</span>
        </p>
        <h2 className="arbutus-slab text-xl text-gray-500">
          your cart is empty
        </h2>
        <p className="dmsans text-sm text-gray-400 text-center max-w-[200px]">
          add some products and come back!
        </p>
      </div>
    );
  }

  // ── standalone page ───────────────────────────────────────────────────────
  if (!isDropdown) {
    return (
      <div className="w-[90%] mx-auto py-10">
        <h1 className="arbutus-slab text-4xl text-center mb-10">
          Shopping Cart
        </h1>

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
                <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                  {[item.selectedColor, item.selectedSize].map(
                    (attr, idx) =>
                      attr && (
                        <span
                          key={idx}
                          className="text-xs bg-blue-50 px-2 py-0.5 rounded-full text-[#155dfc]"
                        >
                          {attr}
                        </span>
                      )
                  )}
                </div>
                <p className="text-sm font-semibold flex items-center mt-1 text-[#155dfc]">
                  <TbCurrencyTaka className="text-sm" />
                  {item.price}
                </p>
              </div>

              {/* right side — quantity controls and remove */}
              <div className="flex flex-col items-end gap-2 shrink-0">
                {/* delete button — directly removes item on click */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                  title="remove item"
                >
                  <MdDeleteOutline className="text-xl" />
                </button>

                {/* quantity plus minus section */}
                <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1.5 py-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                    className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                  >
                    <FiMinus size={12} strokeWidth={3} />
                  </button>
                  <span className="text-sm font-bold text-gray-800 min-w-[22px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-6 h-6 flex items-center justify-center rounded-full border text-white active:scale-95 transition-all duration-200 cursor-pointer bg-[#155dfc] border-[#155dfc]"
                  >
                    <FiPlus size={12} strokeWidth={3} />
                  </button>
                </div>

                {/* line total */}
                <p className="text-xs font-bold text-gray-700 flex items-center">
                  <TbCurrencyTaka className="text-xs" />
                  {item.quantity * item.price}
                </p>
              </div>
            </div>
          ))}

          {/* order summary */}
          <div className="flex justify-end mt-4">
            <div className="w-full sm:w-[360px] border border-gray-100 rounded-2xl p-5 shadow-lg bg-white space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span className="flex items-center font-medium text-gray-800">
                  <TbCurrencyTaka />
                  {subtotal}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className="flex items-center font-medium text-gray-800">
                  <TbCurrencyTaka />
                  {shipping}
                </span>
              </div>
              <div className="border-t border-dashed border-gray-200" />
              <div className="flex justify-between">
                <span className="arbutus-slab text-lg">Total</span>
                <span className="arbutus-slab text-xl flex items-center text-[#155dfc]">
                  <TbCurrencyTaka className="text-xl" />
                  {total}
                </span>
              </div>
              <button className="w-full text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:opacity-90 active:scale-[.98] cursor-pointer mt-1 bg-[#155dfc]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── dropdown panel layout — items scroll, summary pinned to bottom ────────
  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
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
                {[item.selectedColor, item.selectedSize].map(
                  (attr, idx) =>
                    attr && (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 px-2 py-0.5 rounded-full text-[#155dfc]"
                      >
                        {attr}
                      </span>
                    )
                )}
              </div>

              {/* price per item */}
              <p className="text-sm font-semibold flex items-center mt-1 text-[#155dfc]">
                <TbCurrencyTaka className="text-sm" />
                {item.price}
              </p>
            </div>

            {/* right side — quantity controls and remove */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              {/* delete button — directly removes item on click */}
              <button
                onClick={() => handleRemove(item.id)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                title="remove item"
              >
                <MdDeleteOutline className="text-xl" />
              </button>

              {/* quantity plus minus section */}
              <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1.5 py-0.5">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                  className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                >
                  <FiMinus size={10} strokeWidth={3} />
                </button>
                <span className="text-xs font-bold text-gray-800 min-w-[18px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-5 h-5 flex items-center justify-center rounded-full border text-white active:scale-95 transition-all duration-200 cursor-pointer bg-[#155dfc] border-[#155dfc]"
                >
                  <FiPlus size={10} strokeWidth={3} />
                </button>
              </div>

              {/* line total */}
              <p className="text-xs font-bold text-gray-700 flex items-center">
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
        <div className="flex justify-between text-sm text-gray-500">
          <span>Subtotal</span>
          <span className="flex items-center font-medium text-gray-800">
            <TbCurrencyTaka className="text-sm" />
            {subtotal}
          </span>
        </div>

        {/* shipping row */}
        <div className="flex justify-between text-sm text-gray-500">
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
          <span className="arbutus-slab text-lg flex items-center font-bold text-[#155dfc]">
            <TbCurrencyTaka className="text-lg" />
            {total}
          </span>
        </div>

        {/* proceed to checkout button */}
        <button className="w-full text-white font-semibold py-3 rounded-2xl transition-all duration-300 shadow-md hover:opacity-90 active:scale-[.98] cursor-pointer mt-1 bg-[#155dfc]">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
