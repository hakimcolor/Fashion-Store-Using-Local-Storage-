import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { TbCurrencyTaka } from 'react-icons/tb';
import {
  FaStar,
  FaLeaf,
  FaHeart,
  FaCrown,
  FaBolt,
  FaSnowflake,
} from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

/*
  Images sourced from Unsplash (free, no attribution required under Unsplash License).
  Each photo chosen specifically for the clothing category shown.

  Panjabi    — photo-1607082348824-0a96f2a4b9da  man in white traditional panjabi/kurta
  Kurti      — photo-1583391733956-6c78276477e2  woman in colorful kurti ethnic wear
  Shirt      — photo-1607082349566-187342175e2f  formal shirt flat lay / model
  Saree      — photo-1610189352649-66a26892d9c9  woman in traditional vibrant saree
  3-Piece    — photo-1631729371254-42c2892f0e6e  women's coordinated ethnic 3-piece
  Hoodie     — photo-1556821840-3a63f95609a7  casual hoodie street wear
  Jacket     — photo-1551028719-00167b16eac5  denim slim fit jacket
  Dress      — photo-1496747611176-843222e1e57c  elegant women's evening dress
*/

const looks = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=85',
    pos: 'center top',
    accent: '#155dfc',
    badgeColor: '#155dfc',
    icon: <FaCrown />,
    badge: { en: 'Top Rated', bn: 'সেরা পছন্দ' },
    category: { en: "Men's Traditional", bn: 'পুরুষদের ঐতিহ্যবাহী' },
    title: { en: 'Bangladeshi Panjabi', bn: 'বাংলাদেশি পাঞ্জাবি' },
    about: {
      en: 'The Panjabi is the crown jewel of Bangladeshi menswear — a garment that carries centuries of culture and tradition in every thread. Cut from premium breathable cotton, it features a long kurta silhouette with delicate embroidery at the collar and cuffs. Whether worn to Friday prayers, Eid celebrations, or a family gathering, the Panjabi commands respect and exudes effortless elegance. Available in classic white, cream, sky blue, and rich jewel tones.',
      bn: 'পাঞ্জাবি হলো বাংলাদেশি পুরুষদের পোশাকের মুকুটমণি — প্রতিটি সুতায় শতাব্দীর সংস্কৃতি ও ঐতিহ্য বহন করে। প্রিমিয়াম শ্বাস-প্রশ্বাসযোগ্য কটন থেকে তৈরি, কলার ও কাফে সূক্ষ্ম এমব্রয়ডারি সহ লম্বা কুর্তা সিলুয়েট। শুক্রবারের নামাজ, ঈদ উৎসব বা পারিবারিক অনুষ্ঠান — পাঞ্জাবি সর্বদা সম্মান ও কমনীয়তার প্রতীক।',
    },
    price: 1490,
    rating: 4.9,
    tags: {
      en: ['Panjabi', 'Cotton', 'Eid', 'Traditional', 'Men'],
      bn: ['পাঞ্জাবি', 'কটন', 'ঈদ', 'ঐতিহ্য', 'পুরুষ'],
    },
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=900&q=85',
    pos: 'center top',
    accent: '#9333ea',
    badgeColor: '#9333ea',
    icon: <FaHeart />,
    badge: { en: 'Best Seller', bn: 'সবচেয়ে বিক্রীত' },
    category: { en: "Women's Ethnic Wear", bn: 'মহিলাদের এথনিক পোশাক' },
    title: { en: 'Designer Kurti & Dupatta', bn: 'ডিজাইনার কুর্তি ও দুপাট্টা' },
    about: {
      en: 'The Kurti is a timeless expression of feminine grace rooted in South Asian culture. Our designer Kurti collection is handcrafted from soft cotton and georgette, featuring block prints, floral embroidery, and mirror work that catch the light beautifully. Paired with a flowing dupatta, this ensemble is equally stunning at a casual lunch or a festive occasion. Each piece celebrates the artistry of Bangladeshi craftsmanship.',
      bn: 'কুর্তি হলো দক্ষিণ এশিয়ার সংস্কৃতিতে নারীসুলভ কমনীয়তার চিরন্তন প্রকাশ। আমাদের ডিজাইনার কুর্তি সংগ্রহ নরম কটন ও জর্জেট থেকে হাতে তৈরি, ব্লক প্রিন্ট, ফ্লোরাল এমব্রয়ডারি ও মিরর ওয়ার্ক সহ। ফ্লোয়িং দুপাট্টার সাথে মিলিয়ে পরলে ক্যাজুয়াল লাঞ্চ বা উৎসব — সবখানেই অসাধারণ।',
    },
    price: 2190,
    rating: 4.8,
    tags: {
      en: ['Kurti', 'Dupatta', 'Cotton', 'Embroidery', 'Women'],
      bn: ['কুর্তি', 'দুপাট্টা', 'কটন', 'এমব্রয়ডারি', 'মহিলা'],
    },
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&q=85',
    pos: 'center center',
    accent: '#16a34a',
    badgeColor: '#16a34a',
    icon: <FaBolt />,
    badge: { en: 'Office Essential', bn: 'অফিস এসেনশিয়াল' },
    category: { en: "Men's Formal Wear", bn: 'পুরুষদের ফর্মাল পোশাক' },
    title: { en: 'Premium Formal Shirt', bn: 'প্রিমিয়াম ফর্মাল শার্ট' },
    about: {
      en: 'Engineered for the professional who refuses to compromise on style. Our formal shirts are crafted from high-thread-count Egyptian cotton — wrinkle-resistant, moisture-wicking, and tailored for a confident silhouette. The reinforced collar keeps its shape all day, while the precise stitching adds a subtle luxurious detail. Available in crisp white, ice blue, and subtle stripes for every boardroom occasion.',
      bn: 'স্টাইলে আপস করেন না এমন পেশাদারদের জন্য তৈরি। আমাদের ফর্মাল শার্ট উচ্চ থ্রেড কাউন্ট ইজিপশিয়ান কটন থেকে তৈরি — কুঁচকানো-প্রতিরোধী, ময়েশ্চার-উইকিং এবং আত্মবিশ্বাসী সিলুয়েটের জন্য কাটা। রিইনফোর্সড কলার সারাদিন আকৃতি ধরে রাখে। ক্রিস্প সাদা, আইস ব্লু এবং স্ট্রাইপে পাওয়া যায়।',
    },
    price: 1790,
    rating: 4.7,
    tags: {
      en: ['Shirt', 'Formal', 'Office', 'Cotton', 'Men'],
      bn: ['শার্ট', 'ফর্মাল', 'অফিস', 'কটন', 'পুরুষ'],
    },
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1610189352649-66a26892d9c9?w=900&q=85',
    pos: 'center top',
    accent: '#d97706',
    badgeColor: '#d97706',
    icon: <FaLeaf />,
    badge: { en: 'Heritage Piece', bn: 'ঐতিহ্যের প্রতীক' },
    category: { en: "Women's Traditional", bn: 'মহিলাদের ঐতিহ্যবাহী' },
    title: { en: 'Silk Festival Saree', bn: 'সিল্ক উৎসব শাড়ি' },
    about: {
      en: "The Saree is Bangladesh's most iconic garment — six yards of storytelling wrapped in silk and tradition. Our festival Sarees are woven with Jamdani-inspired motifs, rich zari borders, and jewel-toned palettes that glow under every light. Whether it is Eid, a wedding, or Pohela Boishakh, draping this Saree transforms a moment into a memory. Each piece is a labour of love by skilled Bangladeshi weavers.",
      bn: 'শাড়ি হলো বাংলাদেশের সবচেয়ে আইকনিক পোশাক — সিল্ক ও ঐতিহ্যে মোড়ানো ছয় গজের গল্প। আমাদের উৎসব শাড়ি জামদানি-অনুপ্রাণিত মোটিফ, সমৃদ্ধ জরির বর্ডার এবং রঙিন প্যালেটে বোনা। ঈদ, বিয়ে বা পহেলা বৈশাখ — এই শাড়ি পরলে প্রতিটি মুহূর্ত স্মৃতিতে পরিণত হয়।',
    },
    price: 3490,
    rating: 5.0,
    tags: {
      en: ['Saree', 'Silk', 'Jamdani', 'Festival', 'Women'],
      bn: ['শাড়ি', 'সিল্ক', 'জামদানি', 'উৎসব', 'মহিলা'],
    },
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=900&q=85',
    pos: 'center top',
    accent: '#e11d48',
    badgeColor: '#e11d48',
    icon: <FaCrown />,
    badge: { en: 'Exclusive', bn: 'এক্সক্লুসিভ' },
    category: { en: "Women's Luxury", bn: 'মহিলাদের লাক্সারি' },
    title: { en: 'Coordinated 3-Piece Set', bn: 'সমন্বিত থ্রি-পিস সেট' },
    about: {
      en: 'Effortless coordination meets luxurious comfort in our 3-piece sets. Each ensemble includes a beautifully embellished kameez, matching churidar or palazzo pants, and an embroidered dupatta — all cut from the same fabric for a perfectly harmonious look. The intricate beadwork and thread embroidery make this set a statement at any occasion, from bridal functions to corporate events.',
      bn: 'আমাদের থ্রি-পিস সেটে অনায়াস সমন্বয় ও বিলাসবহুল আরামের মিলন। প্রতিটি সেটে রয়েছে সুন্দরভাবে সাজানো কামিজ, ম্যাচিং চুরিদার বা পালাজো এবং এমব্রয়ডারি করা দুপাট্টা — একই কাপড়ে কাটা পারফেক্ট হারমোনিয়াস লুক। জটিল বিডওয়ার্ক ও থ্রেড এমব্রয়ডারি যেকোনো অনুষ্ঠানে মনোযোগ আকর্ষণ করে।',
    },
    price: 4990,
    rating: 4.9,
    tags: {
      en: ['3-Piece', 'Kameez', 'Embroidery', 'Luxury', 'Women'],
      bn: ['থ্রি-পিস', 'কামিজ', 'এমব্রয়ডারি', 'লাক্সারি', 'মহিলা'],
    },
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=85',
    pos: 'center center',
    accent: '#0891b2',
    badgeColor: '#0891b2',
    icon: <FaBolt />,
    badge: { en: 'Street Style', bn: 'স্ট্রিট স্টাইল' },
    category: { en: 'Casual Wear', bn: 'ক্যাজুয়াল পোশাক' },
    title: { en: 'Premium Oversized Hoodie', bn: 'প্রিমিয়াম ওভারসাইজড হুডি' },
    about: {
      en: 'Born on the streets, perfected in the studio. Our oversized hoodies are cut from 380gsm heavyweight fleece — thick enough to keep you warm, soft enough to wear all day. The dropped shoulders and relaxed silhouette give it that effortless streetwear energy, while the ribbed cuffs and adjustable drawstring add a refined finish. Comes in a curated palette of muted tones perfect for layering.',
      bn: 'রাস্তায় জন্ম, স্টুডিওতে পরিপূর্ণ। আমাদের ওভারসাইজড হুডি ৩৮০জিএসএম হেভিওয়েট ফ্লিস থেকে কাটা — গরম রাখার জন্য যথেষ্ট পুরু, সারাদিন পরার জন্য যথেষ্ট নরম। ড্রপড শোল্ডার ও রিল্যাক্সড সিলুয়েট স্ট্রিটওয়্যার এনার্জি দেয়, রিবড কাফস ও ড্রস্ট্রিং পরিমার্জিত ফিনিশ যোগ করে।',
    },
    price: 2190,
    rating: 4.6,
    tags: {
      en: ['Hoodie', 'Oversized', 'Fleece', 'Streetwear'],
      bn: ['হুডি', 'ওভারসাইজড', 'ফ্লিস', 'স্ট্রিটওয়্যার'],
    },
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=85',
    pos: 'center center',
    accent: '#7c3aed',
    badgeColor: '#7c3aed',
    icon: <FaSnowflake />,
    badge: { en: 'Winter Pick', bn: 'শীতকালীন পিক' },
    category: { en: 'Outerwear', bn: 'আউটারওয়্যার' },
    title: { en: 'Slim-Fit Denim Jacket', bn: 'স্লিম-ফিট ডেনিম জ্যাকেট' },
    about: {
      en: 'The denim jacket that refuses to age. Constructed from 12oz selvedge denim with reinforced triple-stitched seams, this jacket only gets better with time — developing a unique patina that reflects your lifestyle. The slim-fit cut works over everything from a plain tee to a formal shirt. Brass hardware, interior patch pockets, and a structured collar round out this investment piece.',
      bn: 'যে ডেনিম জ্যাকেট কখনো পুরনো হয় না। ১২ আউন্স সেলভেজ ডেনিম থেকে তৈরি ট্রিপল-স্টিচড সিমসহ, এই জ্যাকেট সময়ের সাথে আরো ভালো হয়। স্লিম-ফিট কাট প্লেইন টি-শার্ট থেকে ফর্মাল শার্ট — সবকিছুর উপরে মানানসই। ব্রাস হার্ডওয়্যার, ইন্টেরিয়র প্যাচ পকেট এবং স্ট্রাকচারড কলার এই পিসটিকে ইনভেস্টমেন্ট করে তোলে।',
    },
    price: 2890,
    rating: 4.7,
    tags: {
      en: ['Jacket', 'Denim', 'Selvedge', 'Winter'],
      bn: ['জ্যাকেট', 'ডেনিম', 'সেলভেজ', 'শীত'],
    },
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=85',
    pos: 'center top',
    accent: '#be185d',
    badgeColor: '#be185d',
    icon: <FaHeart />,
    badge: { en: 'Party Wear', bn: 'পার্টি পোশাক' },
    category: { en: "Women's Evening Wear", bn: 'মহিলাদের ইভনিং পোশাক' },
    title: { en: 'Elegant Evening Dress', bn: 'এলিগ্যান্ট ইভনিং ড্রেস' },
    about: {
      en: 'Designed for the woman who commands every room she enters. Our evening dresses are crafted from fluid chiffon and structured crepe, featuring hand-sewn embellishments that catch the light from every angle. The A-line silhouette flatters all body types while the deep-cut back adds an element of allure. Available in midnight black, wine red, emerald green, and dusty rose — each colour a statement in itself.',
      bn: 'সেই নারীর জন্য ডিজাইন করা যিনি প্রতিটি রুমে কমান্ড করেন। আমাদের ইভনিং ড্রেস ফ্লুয়িড শিফন ও স্ট্রাকচারড ক্রেপ থেকে তৈরি, হাতে সেলাই করা এমবেলিশমেন্ট সহ। এ-লাইন সিলুয়েট সব বডি টাইপে মানায়। মিডনাইট ব্ল্যাক, ওয়াইন রেড, এমারেল্ড গ্রিন এবং ডাস্টি রোজে পাওয়া যায়।',
    },
    price: 3290,
    rating: 4.8,
    tags: {
      en: ['Dress', 'Chiffon', 'Evening', 'Party', 'Women'],
      bn: ['ড্রেস', 'শিফন', 'ইভনিং', 'পার্টি', 'মহিলা'],
    },
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
            {lang === 'en' ? '✦ Style Guide' : '✦ স্টাইল গাইড'}
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
              ? '8 curated fashion looks — traditional Bangladeshi attire to modern streetwear. Switch to বাং for Bengali.'
              : '৮টি কিউরেটেড ফ্যাশন লুক — ঐতিহ্যবাহী বাংলাদেশি পোশাক থেকে আধুনিক স্ট্রিটওয়্যার।'}
          </p>
          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
            {[
              {
                val: '8',
                label: lang === 'en' ? 'Fashion Looks' : 'ফ্যাশন লুক',
              },
              { val: '100%', label: lang === 'en' ? 'Real Images' : 'আসল ছবি' },
              {
                val: 'EN / বাং',
                label: lang === 'en' ? 'Bilingual' : 'দ্বিভাষিক',
              },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="arbutus-slab text-2xl font-bold text-yellow-300">
                  {s.val}
                </p>
                <p className="dmsans text-xs text-blue-200 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Looks */}
      <div className="max-w-[95%] mx-auto py-16 space-y-24">
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-96 md:h-[500px]">
                  <img
                    src={look.image}
                    alt={look.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: look.pos }}
                  />
                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  {/* badge */}
                  <span
                    className="absolute top-5 left-5 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold dmsans shadow-lg"
                    style={{ background: look.badgeColor }}
                  >
                    {look.icon} {look.badge[lang]}
                  </span>

                  {/* rating */}
                  <span className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 dark:text-white shadow">
                    <FaStar className="text-yellow-400" /> {look.rating}
                  </span>

                  {/* bottom category pill */}
                  <div className="absolute bottom-5 left-5">
                    <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white px-4 py-1.5 rounded-full text-xs font-semibold dmsans">
                      {look.category[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-5">
                {/* number */}
                <span
                  className="inline-block text-6xl font-black opacity-10 arbutus-slab leading-none"
                  style={{ color: look.accent }}
                >
                  0{look.id}
                </span>

                <p
                  className="dmsans text-sm font-bold uppercase tracking-widest -mt-4"
                  style={{ color: look.accent }}
                >
                  {look.category[lang]}
                </p>

                <h2 className="arbutus-slab text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  {look.title[lang]}
                </h2>

                {/* accent line */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ background: look.accent }}
                  />
                  <div
                    className="w-4 h-1 rounded-full opacity-40"
                    style={{ background: look.accent }}
                  />
                  <div
                    className="w-2 h-1 rounded-full opacity-20"
                    style={{ background: look.accent }}
                  />
                </div>

                {/* about paragraph */}
                <p className="dmsans text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {look.about[lang]}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {look.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold dmsans border"
                      style={{
                        color: look.accent,
                        borderColor: `${look.accent}44`,
                        background: `${look.accent}0f`,
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* price + CTA */}
                <div className="flex items-center gap-6 pt-3 flex-wrap">
                  <div className="p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                    <p className="dmsans text-xs text-gray-400 uppercase tracking-wider mb-1">
                      {lang === 'en' ? 'Starting from' : 'শুরু হচ্ছে'}
                    </p>
                    <div className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                      <TbCurrencyTaka className="text-2xl" />
                      {look.price.toLocaleString()}
                    </div>
                  </div>

                  <Link
                    to="/products"
                    className="flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg cursor-pointer dmsans"
                    style={{ background: look.accent }}
                  >
                    {lang === 'en' ? 'Shop This Look' : 'এই লুক কিনুন'}
                    <HiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Banner */}
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
