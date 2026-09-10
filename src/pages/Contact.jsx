import { useState } from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaTruck,
  FaLock,
  FaHeadset,
  FaGift,
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const socialLinks = [
  {
    icon: <FaGlobe />,
    label: 'Portfolio',
    url: 'https://hakimcolorportfolio.vercel.app/',
    color: '#155dfc',
  },
  {
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hakimcolor',
    color: '#0a66c2',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/hakimcolor',
    color: '#6e40c9',
  },
  {
    icon: <FaFacebookF />,
    label: 'Facebook',
    url: 'https://www.facebook.com/hakimcolorofficial',
    color: '#1877f2',
  },
];

const fashionGallery = [
  {
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=85',
    alt: 'Women fashion',
    label: "Women's",
    big: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=85',
    alt: 'Men fashion',
    label: "Men's",
    big: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=85',
    alt: 'Kids fashion',
    label: "Kids'",
    big: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=85',
    alt: 'Fashion store',
    label: 'Store',
    big: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=85',
    alt: 'Arrivals',
    label: 'New Arrivals',
    big: false,
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { lang } = useLang();

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: { en: 'Email', bn: 'ইমেইল' },
      value: 'hakimcolor777@gmail.com',
      url: 'mailto:hakimcolor777@gmail.com',
      color: '#ea4335',
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
      value: '+880 1818-777856',
      url: 'https://wa.me/8801818777856',
      color: '#25d366',
    },
    {
      icon: <MdLocationOn className="text-xl" />,
      label: { en: 'Location', bn: 'অবস্থান' },
      value: lang === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh',
      url: null,
      color: '#155dfc',
    },
    {
      icon: <MdAccessTime className="text-xl" />,
      label: { en: 'Business Hours', bn: 'ব্যবসার সময়' },
      value:
        lang === 'bn' ? 'শনি–বৃহস্পতি, সকাল ৯টা–রাত ৮টা' : 'Sat–Thu, 9AM–8PM',
      url: null,
      color: '#d97706',
    },
  ];

  const features = [
    {
      icon: <FaTruck className="text-2xl" />,
      title: { en: 'Free Shipping', bn: 'বিনামূল্যে ডেলিভারি' },
      desc: { en: 'On orders above ৳1,000', bn: '৳১,০০০-এর উপরে' },
      color: '#155dfc',
      bg: '#eff6ff',
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: { en: 'Secure Payment', bn: 'নিরাপদ পেমেন্ট' },
      desc: { en: '100% safe & encrypted', bn: '১০০% নিরাপদ' },
      color: '#16a34a',
      bg: '#f0fdf4',
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: { en: '24/7 Support', bn: '২৪/৭ সাপোর্ট' },
      desc: { en: 'Always here to help', bn: 'সবসময় আপনার পাশে' },
      color: '#d97706',
      bg: '#fffbeb',
    },
    {
      icon: <FaGift className="text-2xl" />,
      title: { en: 'Easy Returns', bn: 'সহজ রিটার্ন' },
      desc: { en: '7-day returns', bn: '৭ দিনের রিটার্ন' },
      color: '#e11d48',
      bg: '#fff1f2',
    },
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(
        lang === 'bn'
          ? 'সব প্রয়োজনীয় ঘর পূরণ করুন।'
          : 'Please fill in all required fields.'
      );
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/hakimcolor777@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject || 'OXISTYLE Contact Form',
            message: form.message,
            _subject: `New Contact from ${form.name}`,
          }),
        }
      );
      if (res.ok) {
        toast.success(
          lang === 'bn'
            ? 'বার্তা পাঠানো হয়েছে! 🎉'
            : "Message sent! We'll reply soon 🎉"
        );
        setForm({ name: '', email: '', subject: '', message: '' });
      } else throw new Error('Failed');
    } catch {
      toast.error(
        lang === 'bn'
          ? 'কিছু সমস্যা হয়েছে।'
          : 'Something went wrong. Try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero with fashion image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=85"
          alt="Fashion contact"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#155dfc]/90 via-[#1e40af]/70 to-transparent" />
        <div
          className="absolute inset-0 flex flex-col justify-center max-w-[95%] mx-auto"
          data-aos="fade-up"
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-4 dmsans border border-white/20 text-white w-fit">
            {tr('contact_badge', lang)}
          </span>
          <h1 className="arbutus-slab text-4xl md:text-6xl font-bold mb-3 text-white">
            {tr('contact_title', lang)}
          </h1>
          <p className="dmsans text-lg text-blue-100 max-w-xl">
            {tr('contact_sub', lang)}
          </p>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-gray-50 dark:bg-gray-900 py-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: f.bg, color: f.color }}
              >
                {f.icon}
              </div>
              <div>
                <p className="dmsans text-sm font-bold text-gray-800 dark:text-white">
                  {f.title[lang]}
                </p>
                <p className="dmsans text-xs text-gray-400">{f.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fashion Gallery */}
      <section className="max-w-[95%] mx-auto py-14">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="dmsans text-sm font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
            {lang === 'bn' ? 'আমাদের কালেকশন' : 'our collection'}
          </p>
          <h2 className="arbutus-slab text-3xl text-gray-900 dark:text-white">
            {lang === 'bn' ? 'ফ্যাশন গ্যালারি' : 'Fashion Gallery'}
          </h2>
          <p className="dmsans text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto text-sm">
            {lang === 'bn'
              ? 'পুরুষ, নারী এবং শিশুদের জন্য আমাদের কালেকশন দেখুন'
              : 'Explore our curated collections for men, women, and kids'}
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]"
          data-aos="fade-up"
        >
          {fashionGallery.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="dmsans text-white text-sm font-semibold bg-[#155dfc] px-3 py-1.5 rounded-full">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left info */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
                {tr('contact_reach_label', lang)}
              </p>
              <h2 className="arbutus-slab text-3xl text-gray-900 dark:text-white mb-4">
                {tr('contact_reach_title', lang)}
              </h2>
              <p className="dmsans text-gray-600 dark:text-gray-400 leading-relaxed">
                {tr('contact_reach_sub', lang)}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="dmsans text-xs text-gray-400 uppercase tracking-wider">
                      {item.label[lang]}
                    </p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="dmsans text-sm font-semibold text-gray-800 dark:text-white hover:text-[#155dfc] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="dmsans text-sm font-semibold text-gray-800 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* City image */}
            <div className="rounded-2xl overflow-hidden h-44 relative shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
                alt="Dhaka"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#155dfc]/30 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2">
                  <MdLocationOn className="text-[#155dfc] text-xl" />
                  <span className="dmsans text-sm font-semibold text-gray-800 dark:text-white">
                    {lang === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="dmsans text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                {tr('contact_follow', lang)}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
                    style={{ background: s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 space-y-5"
            >
              <h3 className="arbutus-slab text-2xl text-gray-900 dark:text-white">
                {tr('contact_form_title', lang)}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="dmsans text-sm text-gray-600 dark:text-gray-400 mb-1 block">
                    {tr('contact_name', lang)}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={tr('contact_name_ph', lang)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="dmsans text-sm text-gray-600 dark:text-gray-400 mb-1 block">
                    {tr('contact_email', lang)}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="dmsans text-sm text-gray-600 dark:text-gray-400 mb-1 block">
                  {tr('contact_subject', lang)}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={tr('contact_subject_ph', lang)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all"
                />
              </div>

              <div>
                <label className="dmsans text-sm text-gray-600 dark:text-gray-400 mb-1 block">
                  {tr('contact_message', lang)}{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={tr('contact_message_ph', lang)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#155dfc] hover:bg-blue-700 text-white font-semibold rounded-2xl dmsans transition-all duration-300 active:scale-[.98] shadow-lg cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  tr('contact_sending', lang)
                ) : (
                  <>
                    {tr('contact_send', lang)} <HiArrowRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Fashion CTA banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&q=85"
          alt="Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#155dfc]/90 to-[#1e40af]/80" />
        <div
          className="relative z-10 max-w-[95%] mx-auto text-center text-white"
          data-aos="zoom-in"
        >
          <p className="dmsans text-sm font-semibold uppercase tracking-widest mb-3 text-blue-200">
            {lang === 'bn' ? 'আমাদের সাথে থাকুন' : 'stay connected'}
          </p>
          <h2 className="arbutus-slab text-3xl md:text-5xl font-bold mb-4">
            {lang === 'bn' ? 'ফ্যাশনে আপডেট থাকুন' : 'Stay Ahead in Fashion'}
          </h2>
          <p className="dmsans text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            {lang === 'bn'
              ? 'নতুন কালেকশন ও অফারের জন্য আজই যোগাযোগ করুন।'
              : 'Get in touch for new collections, deals, and style tips.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/8801818777856"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25d366] text-white font-semibold rounded-2xl dmsans hover:bg-green-500 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              <FaWhatsapp className="text-xl" />
              {lang === 'bn' ? 'হোয়াটসঅ্যাপে লিখুন' : 'Chat on WhatsApp'}
            </a>
            <a
              href="mailto:hakimcolor777@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#155dfc] font-semibold rounded-2xl dmsans hover:bg-blue-50 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              <FaEnvelope />
              {lang === 'bn' ? 'ইমেইল করুন' : 'Send Email'} <HiArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
