import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';
import {
  HiHome,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlinePhone,
} from 'react-icons/hi2';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang } = useLang();

  const navLinks = [
    { nameKey: 'footer_nav_home', path: '/', icon: <HiHome /> },
    {
      nameKey: 'footer_nav_products',
      path: '/products',
      icon: <HiOutlineShoppingBag />,
    },
    { nameKey: 'footer_nav_styles', path: '/styles', icon: <HiOutlineUser /> },
    { nameKey: 'footer_nav_about', path: '/about', icon: <HiOutlineUser /> },
    {
      nameKey: 'footer_nav_contact',
      path: '/contact',
      icon: <HiOutlinePhone />,
    },
  ];

  const socials = [
    {
      name: 'Portfolio',
      url: 'https://hakimcolorportfolio.vercel.app/',
      icon: <FaGlobe />,
      color: '#8FA28A',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hakimcolor',
      icon: <FaLinkedinIn />,
      color: '#0a66c2',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hakimcolor',
      icon: <FaGithub />,
      color: '#6e40c9',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/hakimcolorofficial',
      icon: <FaFacebookF />,
      color: '#1877f2',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/8801818777856',
      icon: <FaWhatsapp />,
      color: '#8FA28A',
    },
    {
      name: 'Email',
      url: 'mailto:hakimcolor777@gmail.com',
      icon: <FaEnvelope />,
      color: '#C8A96B',
    },
  ];

  return (
    <footer className="bg-[#1e2d27] text-white mt-20 relative overflow-hidden">
      {/* Gradient top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#C8A96B] via-[#8FA28A] to-[#C8A96B]" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8FA28A]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[95%] mx-auto py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-3xl font-bold arbutus-slab flex items-center gap-2.5">
              <img
                src="/logo (2).png"
                alt="H.K Style logo"
                className="h-10 w-10 object-contain rounded-full ring-2 ring-[#8FA28A]/40"
              />
              H.K <span className="text-[#C8A96B]">Style</span>
            </h2>
            <p className="dmsans text-sm text-gray-300/80 leading-relaxed max-w-xs">
              {tr('footer_desc', lang)}
            </p>
            <div className="flex items-center gap-2 flex-wrap pt-1">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 text-sm border border-white/5 hover:border-white/20"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = s.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
                  }
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="arbutus-slab text-lg font-semibold tracking-wide text-[#C8A96B]">
              {tr('footer_quick_links', lang)}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="dmsans text-sm text-gray-300/75 hover:text-[#C8A96B] flex items-center gap-2 transition-colors duration-200 group"
                  >
                    <span className="text-base transition-transform duration-200 group-hover:translate-x-1 text-[#8FA28A]">
                      {link.icon}
                    </span>
                    {tr(link.nameKey, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Links */}
          <div className="space-y-4">
            <h3 className="arbutus-slab text-lg font-semibold tracking-wide text-[#C8A96B]">
              {tr('footer_developer', lang)}
            </h3>
            <ul className="space-y-3 dmsans text-sm text-gray-300/75">
              <li>
                <a
                  href="https://hakimcolorportfolio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#8FA28A] transition-colors duration-200"
                >
                  <FaGlobe className="text-[#8FA28A]" /> Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hakimcolor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#0a66c2] transition-colors duration-200"
                >
                  <FaLinkedinIn className="text-[#0a66c2]" /> Link
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hakimcolor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <FaGithub className="text-gray-400" /> Github
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="arbutus-slab text-lg font-semibold tracking-wide text-[#C8A96B]">
              {tr('footer_contact', lang)}
            </h3>
            <ul className="space-y-3 dmsans text-sm text-gray-300/75">
              <li>
                <a
                  href="mailto:hakimcolor777@gmail.com"
                  className="flex items-center gap-2 hover:text-[#C8A96B] transition-colors duration-200 break-all"
                >
                  <FaEnvelope className="text-[#C8A96B] shrink-0" />
                  hakimcolor777@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801818777856"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#8FA28A] transition-colors duration-200"
                >
                  <FaWhatsapp className="text-[#8FA28A] shrink-0" /> +880
                  1818-777856
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hakimcolorofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#1877f2] transition-colors duration-200"
                >
                  <FaFacebookF className="text-[#1877f2] shrink-0" />
                  hakimcolorofficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400/70 dmsans">
          <p>
            © {currentYear}{' '}
            <span className="text-[#C8A96B] font-semibold">H.K Style</span>.{' '}
            {tr('footer_rights', lang)}
          </p>
          <p>
            {tr('footer_made', lang)} <span className="text-[#C8A96B]">♥</span>{' '}
            {tr('footer_by', lang)}{' '}
            <a
              href="https://hakimcolorportfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-[#8FA28A] hover:text-[#C8A96B] transition-colors duration-200 font-medium"
            >
              hakimcolor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
