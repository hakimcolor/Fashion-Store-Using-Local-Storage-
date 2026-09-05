import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

const looks = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=85',
    badge: { en: 'Top Rated', bn: 'সেরা পছন্দ' },
    badgeColor: '#155dfc',
    accent: '#155dfc',
    tag: { en: "Men's Traditional", bn: 'পুরুষদের ঐতিহ্যবাহী' },
    title: {
      en: 'Classic Bangladeshi Panjabi',
      bn: 'ক্লাসিক বাংলাদেশি পাঞ্জাবি',
    },
    desc: {
      en: 'Nothing defines Bangladeshi menswear quite like the Panjabi. Our premium cotton collection offers a clean silhouette, subtle embroidery at the collar, and breathable fabric — ideal for Eid, prayers, weddings, and every formal occasion.',
      bn: 'বাংলাদেশি পুরুষদের পোশাকে পাঞ্জাবির কোনো বিকল্প নেই। আমাদের প্রিমিয়াম কটন সংগ্রহে রয়েছে পরিষ্কার সিলুয়েট, কলারে সূক্ষ্ম এমব্রয়ডারি এবং শ্বাস-প্রশ্বাসযোগ্য কাপড় — ঈদ, নামাজ, বিয়ে ও আনুষ্ঠানিক উপলক্ষের জন্য আদর্শ।',
    },
    price: 1490,
    rating: 4.8,
    tags: {
      en: ['Panjabi', 'Cotton', 'Eid', 'Traditional'],
      bn: ['পাঞ্জাবি', 'কটন', 'ঈদ', 'ঐতিহ্য'],
    },
    pos: 'center center',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85',
    badge: { en: 'Best Seller', bn: 'সবচেয়ে বিক্রীত' },
    badgeColor: '#9333ea',
    accent: '#9333ea',
    tag: { en: "Women's Ethnic", bn: 'মহিলাদের এথনিক' },
    title: { en: 'Elegant Kurti with Dupatta', bn: 'সুন্দর কুর্তি ও দুপাট্টা' },
    desc: {
      en: 'The Kurti is the heartbeat of Bangladeshi fashion. Crafted from soft cotton with intricate embroidery, this look blends tradition with modern elegance. Perfect for Eid mornings, family gatherings, and everyday grace.',
      bn: 'কুর্তি হলো বাংলাদেশি ফ্যাশনের প্রাণ। নরম কটন ও সূক্ষ্ম এমব্রয়ডারি দিয়ে তৈরি এই লুক ঐতিহ্য ও আধুনিকতার মেলবন্ধন। ঈদের সকাল, পারিবারিক অনুষ্ঠান ও প্রতিদিনের জন্য মানানসই।',
    },
    price: 2190,
    rating: 4.9,
    tags: {
      en: ['Kurti', 'Cotton', 'Embroidery', 'Dupatta'],
      bn: ['কুর্তি', 'কটন', 'এমব্রয়ডারি', 'দুপাট্টা'],
    },
    pos: 'center top',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&q=85',
    badge: { en: 'Office Wear', bn: 'অফিস পোশাক' },
    badgeColor: '#16a34a',
    accent: '#16a34a',
    tag: { en: "Men's Formal", bn: 'পুরুষদের ফর্মাল' },
    title: { en: 'Premium Formal Shirt', bn: 'প্রিমিয়াম ফর্মাল শার্ট' },
    desc: {
      en: 'Dress sharp for every boardroom and business meeting. Our formal shirts are tailored from wrinkle-resistant, breathable fabric with precise stitching — delivering a polished professional look all day long.',
      bn: 'প্রতিটি অফিস মিটিংয়ে তীক্ষ্ণ পোশাক পরুন। আমাদের ফর্মাল শার্টগুলো কুঁচকানো-প্রতিরোধী, শ্বাস-প্রশ্বাসযোগ্য কাপড়ে তৈরি — সারাদিন পেশাদার চেহারা নিশ্চিত করে।',
    },
    price: 1790,
    rating: 4.7,
    tags: {
      en: ['Shirt', 'Formal', 'Office', 'Premium'],
      bn: ['শার্ট', 'ফর্মাল', 'অফিস', 'প্রিমিয়াম'],
    },
    pos: 'center center',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4b3b4c?w=900&q=85',
    badge: { en: 'New Arrival', bn: 'নতুন আসল' },
    badgeColor: '#d97706',
    accent: '#d97706',
    tag: { en: "Women's Traditional", bn: 'মহিলাদের ঐতিহ্যবাহী' },
    title: { en: 'Vibrant Festival Saree', bn: 'উজ্জ্বল উৎসব শাড়ি' },
    desc: {
      en: 'Celebrate every festival draped in colour and culture. Our handpicked Saree collection features rich silk blends, vivid prints, and timeless motifs that honour Bangladeshi heritage. Stand out at every occasion.',
      bn: 'রঙ ও সংস্কৃতিতে মোড়ানো হয়ে প্রতিটি উৎসব উদযাপন করুন। আমাদের শাড়ি সংগ্রহে রয়েছে সমৃদ্ধ সিল্ক, উজ্জ্বল প্রিন্ট এবং চিরন্তন মোটিফ যা বাংলাদেশি ঐতিহ্যকে সম্মান জানায়।',
    },
    price: 3490,
    rating: 5.0,
    tags: {
      en: ['Saree', 'Silk', 'Festival', 'Wedding'],
      bn: ['শাড়ি', 'সিল্ক', 'উৎসব', 'বিয়ে'],
    },
    pos: 'center top',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85',
    badge: { en: 'Exclusive', bn: 'এক্সক্লুসিভ' },
    badgeColor: '#e11d48',
    accent: '#e11d48',
    tag: { en: "Women's Formal", bn: 'মহিলাদের ফর্মাল' },
    title: { en: 'Elegant 3-Piece Suit', bn: 'এলিগ্যান্ট থ্রি-পিস' },
    desc: {
      en: 'For the most important days of your life, only the finest will do. Our 3-piece suits feature a coordinated top, bottom, and dupatta crafted from luxurious fabrics — making every woman feel extraordinary.',
      bn: 'আপনার জীবনের সবচেয়ে গুরুত্বপূর্ণ দিনগুলোর জন্য সেরাটাই যথেষ্ট। আমাদের থ্রি-পিসে রয়েছে সমন্বিত টপ, বটম এবং দুপাট্টা যা বিলাসবহুল কাপড়ে হাতের কারুকাজসহ তৈরি।',
    },
    price: 4990,
    rating: 4.9,
    tags: {
      en: ['3-Piece', 'Suit', 'Formal', 'Luxury'],
      bn: ['থ্রি-পিস', 'স্যুট', 'ফর্মাল', 'লাক্সারি'],
    },
    pos: 'center center',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=85',
    badge: { en: 'Trending', bn: 'ট্রেন্ডিং' },
    badgeColor: '#0891b2',
    accent: '#0891b2',
    tag: { en: 'Casual Wear', bn: 'ক্যাজুয়াল পোশাক' },
    title: { en: 'Cozy Premium Hoodie', bn: 'আরামদায়ক প্রিমিয়াম হুডি' },
    desc: {
      en: 'When the temperature drops, style should not. Our premium hoodies feature soft inner fleece, relaxed fit, and minimalist design — perfect for casual outings, travel, or a cozy night in.',
      bn: 'তাপমাত্রা কমলেও স্টাইল কমতে দেবেন না। আমাদের প্রিমিয়াম হুডিতে রয়েছে নরম ফ্লিস লাইনিং, রিল্যাক্সড ফিট — ক্যাজুয়াল আড্ডা, ভ্রমণ বা ঘরে আরামের জন্য আদর্শ।',
    },
    price: 2190,
    rating: 4.6,
    tags: {
      en: ['Hoodie', 'Fleece', 'Casual', 'Comfort'],
      bn: ['হুডি', 'ফ্লিস', 'ক্যাজুয়াল', 'আরাম'],
    },
    pos: 'center center',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=85',
    badge: { en: 'Winter Pick', bn: 'শীতকালীন পিক' },
    badgeColor: '#7c3aed',
    accent: '#7c3aed',
    tag: { en: 'Outerwear', bn: 'আউটারওয়্যার' },
    title: { en: 'Slim-Fit Denim Jacket', bn: 'স্লিম-ফিট ডেনিম জ্যাকেট' },
    desc: {
      en: 'A wardrobe staple that never goes out of style. Our slim-fit denim jacket is built with durable premium denim that shapes to your body over time. Layer it over anything — it works every time.',
      bn: 'একটি ওয়ার্ডরোব স্ট্যাপল যা কখনো স্টাইলের বাইরে যায় না। আমাদের স্লিম-ফিট ডেনিম জ্যাকেট টেকসই প্রিমিয়াম ডেনিমে তৈরি। যেকোনো পোশাকের উপরে পরুন — প্রতিবারই মানানসই।',
    },
    price: 2890,
    rating: 4.7,
    tags: {
      en: ['Jacket', 'Denim', 'Winter', 'Layering'],
      bn: ['জ্যাকেট', 'ডেনিম', 'শীত', 'লেয়ারিং'],
    },
    pos: 'center center',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=85',
    badge: { en: 'Party Wear', bn: 'পার্টি পোশাক' },
    badgeColor: '#d97706',
    accent: '#d97706',
    tag: { en: "Women's Dress", bn: 'মহিলাদের ড্রেস' },
    title: { en: 'Elegant Evening Dress', bn: 'এলিগ্যান্ট ইভনিং ড্রেস' },
    desc: {
      en: 'Make every entrance unforgettable. Our elegant evening dresses are crafted for parties, weddings, and special occasions — featuring premium fabrics and graceful silhouettes that celebrate the modern woman.',
      bn: 'প্রতিটি প্রবেশকে অবিস্মরণীয় করুন। আমাদের ইভনিং ড্রেসগুলো পার্টি, বিয়ে ও বিশেষ অনুষ্ঠানের জন্য তৈরি — প্রিমিয়াম কাপড় ও সুন্দর সিলুয়েটে আধুনিক নারীকে উদযাপন করে।',
    },
    price: 3290,
    rating: 4.8,
    tags: {
      en: ['Dress', 'Evening', 'Party', 'Elegant'],
      bn: ['ড্রেস', 'ইভনিং', 'পার্টি', 'এলিগ্যান্ট'],
    },
    pos: 'center top',
  },
];

const Styles = () => {
  const { lang } = useLang();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #155dfc 0%, #7c3aed 100%)',
        }}
      >
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
        <div className="max-w-[95%] mx-auto relative z-10" data-aos="fade-up">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 dmsans border border-white/20">
            {lang === 'en' ? 'Style Guide' : 'স্টাইল গাইড'}
          </span>
          <h1 className="arbutus-slab text-4xl md:text-6xl font-bold mb-5 leading-tight">
            {lang === 'en' ? (
              <>
                Discover Your <span className="text-yellow-300">Style</span>
              </>
            ) : (
              <>
                আপনার <span className="text-yellow-300">স্টাইল</span> আবিষ্কার
                করুন
              </>
            )}
          </h1>
          <p className="dmsans text-lg text-blue-100 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'From traditional Bangladeshi attire to modern fashion — explore curated looks for every occasion.'
              : 'ঐতিহ্যবাহী বাংলাদেশি পোশাক থেকে আধুনিক ফ্যাশন পর্যন্ত — প্রতিটি উপলক্ষের জন্য কিউরেটেড লুক আবিষ্কার করুন।'}
          </p>
        </div>
      </section>

      {/* Alternating Looks */}
      <div className="max-w-[95%] mx-auto py-16 space-y-20">
        {looks.map((look, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={look.id}
              data-aos={isEven ? 'fade-right' : 'fade-left'}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-96 md:h-[480px]">
                  <img
                    src={look.image}
                    alt={look.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: look.pos }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span
                    className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-white text-xs font-bold dmsans shadow-lg"
                    style={{ background: look.badgeColor }}
                  >
                    {look.badge[lang]}
                  </span>
                  <span className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 dark:text-white shadow">
                    <FaStar className="text-yellow-400" /> {look.rating}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-5">
                <p
                  className="dmsans text-sm font-bold uppercase tracking-widest"
                  style={{ color: look.accent }}
                >
                  {look.tag[lang]}
                </p>
                <h2 className="arbutus-slab text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  {look.title[lang]}
                </h2>
                <div
                  className="w-14 h-1 rounded-full"
                  style={{ background: look.accent }}
                />
                <p className="dmsans text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {look.desc[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {look.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold dmsans border"
                      style={{
                        color: look.accent,
                        borderColor: `${look.accent}55`,
                        background: `${look.accent}11`,
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-2 flex-wrap">
                  <div>
                    <p className="dmsans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      {lang === 'en' ? 'Starting from' : 'শুরু হচ্ছে'}
                    </p>
                    <div className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                      <TbCurrencyTaka className="text-2xl" />
                      {look.price.toLocaleString()}
                    </div>
                  </div>
                  <Link
                    to="/products"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer dmsans"
                    style={{ background: look.accent }}
                  >
                    {lang === 'en' ? 'Shop This Look' : 'এই লুক কিনুন'}{' '}
                    <HiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section
        className="py-20 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #155dfc 0%, #1e40af 100%)',
        }}
        data-aos="zoom-in"
      >
        <div className="max-w-[95%] mx-auto">
          <h2 className="arbutus-slab text-3xl md:text-5xl font-bold mb-4">
            {lang === 'en'
              ? 'Ready to Find Your Perfect Look?'
              : 'আপনার পারফেক্ট লুক খুঁজে নিতে প্রস্তুত?'}
          </h2>
          <p className="dmsans text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            {lang === 'en'
              ? 'Browse our full collection of authentic Bangladeshi fashion and dress the way you feel.'
              : 'আমাদের পূর্ণ বাংলাদেশি ফ্যাশন সংগ্রহ ব্রাউজ করুন এবং আপনার মতো সাজুন।'}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white font-bold rounded-2xl hover:bg-blue-50 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer dmsans"
            style={{ color: '#155dfc' }}
          >
            {lang === 'en' ? 'Browse All Products' : 'সব পণ্য দেখুন'}{' '}
            <HiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Styles;
