import { useState } from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
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
      labelKey: 'contact_email',
      value: 'hakimcolor777@gmail.com',
      url: 'mailto:hakimcolor777@gmail.com',
      color: '#ea4335',
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      labelKey: 'contact_name',
      value: '+880 1818-777856',
      url: 'https://wa.me/8801818777856',
      color: '#25d366',
    },
    {
      icon: <MdLocationOn className="text-xl" />,
      labelKey: 'contact_subject',
      value: lang === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh',
      url: null,
      color: '#155dfc',
    },
    {
      icon: <MdAccessTime className="text-xl" />,
      labelKey: 'contact_message',
      value:
        lang === 'bn' ? 'শনি–বৃহস্পতি, সকাল ৯টা–রাত ৮টা' : 'Sat–Thu, 9AM–8PM',
      url: null,
      color: '#d97706',
    },
  ];

  // Fixed labels for contact info items
  const infoLabels = [
    { en: 'Email', bn: 'ইমেইল' },
    { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
    { en: 'Location', bn: 'অবস্থান' },
    { en: 'Business Hours', bn: 'ব্যবসার সময়' },
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
            _subject: `📩 New Contact from ${form.name} — OXISTYLE`,
          }),
        }
      );
      if (res.ok) {
        toast.success(
          lang === 'bn'
            ? 'বার্তা পাঠানো হয়েছে! শীঘ্রই উত্তর দেওয়া হবে 🎉'
            : "Message sent! We'll get back to you soon 🎉"
        );
        setForm({ name: '', email: '', subject: '', message: '' });
      } else throw new Error('Failed');
    } catch {
      toast.error(
        lang === 'bn'
          ? 'কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।'
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-20 text-white text-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #155dfc 0%, #1e40af 100%)',
        }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
        <div className="max-w-[95%] mx-auto relative z-10" data-aos="fade-up">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 dmsans border border-white/20">
            {tr('contact_badge', lang)}
          </span>
          <h1 className="arbutus-slab text-4xl md:text-6xl font-bold mb-4">
            {tr('contact_title', lang)}
          </h1>
          <p className="dmsans text-lg text-blue-100 max-w-xl mx-auto">
            {tr('contact_sub', lang)}
          </p>
        </div>
      </section>

      <div className="max-w-[95%] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
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
                      {infoLabels[idx][lang]}
                    </p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="dmsans text-sm font-semibold text-gray-800 dark:text-white hover:text-[#155dfc] transition-colors duration-200"
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

          {/* Contact Form */}
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all duration-200"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all duration-200"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all duration-200"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white dmsans text-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all duration-200 resize-none"
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
      </div>
    </div>
  );
};

export default Contact;
