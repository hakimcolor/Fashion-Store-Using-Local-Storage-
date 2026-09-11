import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FiCheck, FiShoppingBag } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi2';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const PAYMENT_METHODS = [
  { id: 'cod', en: 'Cash on Delivery', bn: 'ক্যাশ অন ডেলিভারি', icon: '💵' },
  { id: 'bkash', en: 'bKash', bn: 'বিকাশ', icon: '📱' },
  { id: 'nagad', en: 'Nagad', bn: 'নগদ', icon: '📲' },
  {
    id: 'card',
    en: 'Debit / Credit Card',
    bn: 'ডেবিট / ক্রেডিট কার্ড',
    icon: '💳',
  },
];

const Field = ({ label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="dmsans text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
      {label}
    </label>
    {children}
    {error && <p className="dmsans text-xs text-[#C8A96B]">{error}</p>}
  </div>
);

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#8FA28A] focus:ring-2 focus:ring-[#8FA28A]/20 transition-all duration-300';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const { lang } = useLang();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    note: '',
  });
  const [payment, setPayment] = useState('cod');
  const [errors, setErrors] = useState({});

  const subtotal = cart.reduce((t, i) => t + i.quantity * i.price, 0);
  const shipping = cart.length > 0 ? 120 : 0;
  const total = subtotal + shipping;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())
      e.name = lang === 'bn' ? 'নাম আবশ্যক' : 'Name is required';
    if (!/^01[3-9]\d{8}$/.test(form.phone))
      e.phone =
        lang === 'bn'
          ? 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন'
          : 'Enter a valid BD mobile number';
    if (!form.address.trim())
      e.address = lang === 'bn' ? 'ঠিকানা আবশ্যক' : 'Address is required';
    if (!form.city.trim())
      e.city = lang === 'bn' ? 'শহর আবশ্যক' : 'City is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const id = 'OXI' + Date.now().toString().slice(-6);
    setOrderId(id);
    setCart([]);
    setPlaced(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (cart.length === 0 && !placed) {
    return (
      <div className="w-[95%] mx-auto py-24 flex flex-col items-center gap-4 text-center">
        <FiShoppingBag className="text-6xl text-gray-300" />
        <h2 className="arbutus-slab text-2xl dark:text-white">
          {lang === 'bn' ? 'কার্ট খালি আছে' : 'Your cart is empty'}
        </h2>
        <p className="dmsans text-gray-500 text-sm">
          {lang === 'bn'
            ? 'চেকআউট করার আগে পণ্য যোগ করুন।'
            : 'Add some products before checking out.'}
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mt-2 bg-[#8FA28A] text-white dmsans font-semibold px-6 py-3 rounded-xl hover:bg-[#6b8578] transition-all"
        >
          {tr('home_view_all', lang)} <HiArrowRight />
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div
        className="w-[95%] mx-auto py-24 flex flex-col items-center gap-5 text-center"
        data-aos="zoom-in"
      >
        <div className="w-20 h-20 rounded-full bg-[#C7D3C0] dark:bg-[#8FA28A]/20 flex items-center justify-center">
          <FiCheck className="text-4xl text-[#8FA28A]" strokeWidth={3} />
        </div>
        <h1 className="arbutus-slab text-3xl text-gray-900 dark:text-white">
          {lang === 'bn' ? 'অর্ডার সফল হয়েছে!' : 'Order Placed Successfully!'}
        </h1>
        <p className="dmsans text-gray-500 dark:text-gray-400 text-sm max-w-sm">
          {lang === 'bn'
            ? `আপনার অর্ডার আইডি: ${orderId} — আমরা শীঘ্রই যোগাযোগ করব।`
            : `Your order ID is ${orderId} — we'll be in touch soon.`}
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#8FA28A] text-white dmsans font-semibold px-6 py-3 rounded-xl hover:bg-[#6b8578] transition-all"
          >
            {tr('home_view_all', lang)} <HiArrowRight />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 dmsans font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            {tr('nav_home', lang)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95%] mx-auto py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm dmsans mb-8 text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-[#8FA28A] transition-colors">
          {tr('nav_home', lang)}
        </Link>
        <span>/</span>
        <Link to="/cart" className="hover:text-[#8FA28A] transition-colors">
          {tr('cart_title', lang)}
        </Link>
        <span>/</span>
        <span className="text-[#8FA28A]">{tr('checkout_title', lang)}</span>
      </div>

      <div className="text-center mb-10" data-aos="fade-up">
        <p className="dmsans text-sm font-semibold uppercase tracking-widest text-[#8FA28A] mb-2">
          {tr('checkout_label', lang)}
        </p>
        <h1 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
          {tr('checkout_title', lang)}
        </h1>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left — form */}
          <div className="flex-1 space-y-6" data-aos="fade-right">
            {/* Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-md space-y-4">
              <h2 className="arbutus-slab text-lg text-gray-900 dark:text-white">
                {tr('checkout_contact', lang)}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={tr('contact_name', lang)} error={errors.name}>
                  <input
                    className={inputCls}
                    value={form.name}
                    onChange={set('name')}
                    placeholder={lang === 'bn' ? 'আপনার নাম' : 'Your full name'}
                  />
                </Field>
                <Field label={tr('checkout_phone', lang)} error={errors.phone}>
                  <input
                    className={inputCls}
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="01XXXXXXXXX"
                  />
                </Field>
              </div>
              <Field label={tr('contact_email', lang)}>
                <input
                  className={inputCls}
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder={lang === 'bn' ? 'ঐচ্ছিক' : 'Optional'}
                />
              </Field>
            </div>

            {/* Shipping */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-md space-y-4">
              <h2 className="arbutus-slab text-lg text-gray-900 dark:text-white">
                {tr('checkout_shipping', lang)}
              </h2>
              <Field
                label={tr('checkout_address', lang)}
                error={errors.address}
              >
                <textarea
                  className={`${inputCls} resize-none h-20`}
                  value={form.address}
                  onChange={set('address')}
                  placeholder={
                    lang === 'bn'
                      ? 'বাড়ি নং, রোড, এলাকা...'
                      : 'House no, road, area...'
                  }
                />
              </Field>
              <Field label={tr('checkout_city', lang)} error={errors.city}>
                <input
                  className={inputCls}
                  value={form.city}
                  onChange={set('city')}
                  placeholder={
                    lang === 'bn'
                      ? 'ঢাকা, চট্টগ্রাম...'
                      : 'Dhaka, Chittagong...'
                  }
                />
              </Field>
              <Field label={tr('checkout_note', lang)}>
                <input
                  className={inputCls}
                  value={form.note}
                  onChange={set('note')}
                  placeholder={
                    lang === 'bn'
                      ? 'ঐচ্ছিক নির্দেশনা'
                      : 'Optional delivery notes'
                  }
                />
              </Field>
            </div>

            {/* Payment */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-md space-y-4">
              <h2 className="arbutus-slab text-lg text-gray-900 dark:text-white">
                {tr('checkout_payment', lang)}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {PAYMENT_METHODS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPayment(m.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                      payment === m.id
                        ? 'border-[#8FA28A] bg-[#F7F4ED] dark:bg-[#8FA28A]/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#8FA28A]/50'
                    }`}
                  >
                    <span className="text-2xl">{m.icon}</span>
                    <span
                      className={`dmsans text-sm font-semibold ${payment === m.id ? 'text-[#8FA28A]' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {lang === 'bn' ? m.bn : m.en}
                    </span>
                    {payment === m.id && (
                      <FiCheck
                        className="ml-auto text-[#8FA28A] shrink-0"
                        strokeWidth={3}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — order summary */}
          <div
            className="w-full lg:w-[360px] shrink-0 space-y-4"
            data-aos="fade-left"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-md">
              <h2 className="arbutus-slab text-lg text-gray-900 dark:text-white mb-4">
                {tr('checkout_summary', lang)}
              </h2>
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="dmsans text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {item.name}
                      </p>
                      <p className="dmsans text-xs text-gray-400">
                        {item.selectedColor} · {item.selectedSize} · ×
                        {item.quantity}
                      </p>
                    </div>
                    <p className="dmsans text-sm font-bold text-gray-800 dark:text-white shrink-0 flex items-center">
                      <TbCurrencyTaka />
                      {(item.quantity * item.price).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-gray-200 dark:border-gray-600 mt-4 pt-4 space-y-2.5">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{tr('cart_subtotal', lang)}</span>
                  <span className="flex items-center font-medium text-gray-800 dark:text-gray-200">
                    <TbCurrencyTaka />
                    {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{tr('cart_shipping', lang)}</span>
                  <span className="flex items-center font-medium text-gray-800 dark:text-gray-200">
                    <TbCurrencyTaka />
                    {shipping}
                  </span>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-2.5 flex justify-between items-center">
                  <span className="arbutus-slab text-base dark:text-white">
                    {tr('cart_total', lang)}
                  </span>
                  <span className="arbutus-slab text-lg font-bold text-[#8FA28A] flex items-center">
                    <TbCurrencyTaka className="text-lg" />
                    {total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#8FA28A] hover:bg-[#6b8578] text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg active:scale-[.98] cursor-pointer dmsans"
            >
              {tr('checkout_place_order', lang)} <HiArrowRight />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
