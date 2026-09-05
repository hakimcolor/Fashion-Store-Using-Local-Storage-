import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import toast from 'react-hot-toast';

const Cart = ({ onClose }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success('Item removed from cart');
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

  const subtotal = cart.reduce((t, item) => t + item.quantity * item.price, 0);
  const shipping = cart.length > 0 ? 120 : 0;
  const total = subtotal + shipping;

  const isDropdown = typeof onClose === 'function';

  if (cart.length === 0) {
    return (
      <div
        className={
          isDropdown
            ? 'flex flex-col items-center justify-center flex-1 gap-3 py-16'
            : 'w-[95%] mx-auto py-24 flex flex-col items-center gap-4'
        }
      >
        <div className="relative w-20 h-20">
          <img
            src="/logo (2).png"
            alt="oxistyle"
            className="w-full h-full object-contain rounded-full opacity-20"
          />
          <FiShoppingCart className="absolute inset-0 m-auto text-4xl text-[#155dfc]" />
        </div>
        <p className="arbutus-slab text-lg font-bold dark:text-white">
          OXI<span style={{ color: '#155dfc' }}>STYLE</span>
        </p>
        <h2 className="arbutus-slab text-xl text-gray-500 dark:text-gray-400">
          your cart is empty
        </h2>
        <p className="dmsans text-sm text-gray-400 text-center max-w-48">
          add some products and come back!
        </p>
      </div>
    );
  }

  const CartItem = ({ item, compact = false }) => (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"
        style={{ background: 'linear-gradient(to bottom, #155dfc, #3b82f6)' }}
      />
      <img
        src={item.image}
        alt={item.name}
        className={`${compact ? 'w-14 h-14' : 'w-16 h-16'} object-cover rounded-xl shadow shrink-0`}
      />
      <div className="flex-1 min-w-0">
        <h3
          className={`arbutus-slab ${compact ? 'text-sm' : 'text-base'} leading-tight truncate dark:text-white`}
        >
          {item.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
          {[item.selectedColor, item.selectedSize].map(
            (attr, idx) =>
              attr && (
                <span
                  key={idx}
                  className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full text-[#155dfc]"
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
      <div className="flex flex-col items-end gap-2 shrink-0">
        <button
          onClick={() => handleRemove(item.id)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer"
        >
          <MdDeleteOutline className="text-lg" />
        </button>
        <div className="flex items-center gap-1 border border-gray-200 dark:border-gray-600 rounded-full px-1.5 py-0.5">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}
            className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
          >
            <FiMinus size={10} strokeWidth={3} />
          </button>
          <span
            className={`${compact ? 'text-xs min-w-4' : 'text-sm min-w-5'} font-bold text-gray-800 dark:text-white text-center`}
          >
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="w-5 h-5 flex items-center justify-center rounded-full border text-white active:scale-95 transition-all duration-200 cursor-pointer bg-[#155dfc] border-[#155dfc]"
          >
            <FiPlus size={10} strokeWidth={3} />
          </button>
        </div>
        <p
          className={`${compact ? 'text-xs' : 'text-xs'} font-bold text-gray-700 dark:text-gray-300 flex items-center`}
        >
          <TbCurrencyTaka className="text-xs" />
          {item.quantity * item.price}
        </p>
      </div>
    </div>
  );

  const Summary = ({ compact = false }) => (
    <div
      className={`space-y-2.5 ${compact ? '' : 'border border-gray-100 dark:border-gray-700 rounded-2xl p-5 shadow-lg bg-white dark:bg-gray-800'}`}
    >
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Subtotal</span>
        <span className="flex items-center font-medium text-gray-800 dark:text-gray-200">
          <TbCurrencyTaka />
          {subtotal}
        </span>
      </div>
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Shipping</span>
        <span className="flex items-center font-medium text-gray-800 dark:text-gray-200">
          <TbCurrencyTaka />
          {shipping}
        </span>
      </div>
      <div className="border-t border-dashed border-gray-200 dark:border-gray-600" />
      <div className="flex justify-between items-center">
        <span className="arbutus-slab text-base dark:text-white">
          {compact ? 'Total' : <span className="text-lg">Total</span>}
        </span>
        <span className="arbutus-slab text-lg flex items-center font-bold text-[#155dfc]">
          <TbCurrencyTaka className="text-lg" />
          {total}
        </span>
      </div>
      <button className="w-full text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:opacity-90 active:scale-[.98] cursor-pointer bg-[#155dfc]">
        Proceed to Checkout
      </button>
    </div>
  );

  if (!isDropdown) {
    return (
      <div className="w-[95%] mx-auto py-10">
        <h1 className="arbutus-slab text-4xl text-center mb-10 dark:text-white">
          Shopping Cart
        </h1>
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="flex justify-end mt-6">
            <div className="w-full sm:w-80">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} compact />
        ))}
      </div>
      <div className="shrink-0 border-t border-gray-100 dark:border-gray-700 px-4 py-4 bg-white dark:bg-gray-900">
        <Summary compact />
      </div>
    </div>
  );
};

export default Cart;
