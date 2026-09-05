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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HiHome /> },
    { name: 'Products', path: '/products', icon: <HiOutlineShoppingBag /> },
    { name: 'Styles', path: '/styles', icon: <HiOutlineUser /> },
    { name: 'About Us', path: '/about', icon: <HiOutlineUser /> },
    { name: 'Contact', path: '/contact', icon: <HiOutlinePhone /> },
  ];

  const socials = [
    {
      name: 'Portfolio',
      url: 'https://hakimcolorportfolio.vercel.app/',
      icon: <FaGlobe />,
      color: '#155dfc',
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
      color: '#25d366',
    },
    {
      name: 'Email',
      url: 'mailto:hakimcolor777@gmail.com',
      icon: <FaEnvelope />,
      color: '#ea4335',
    },
  ];

  return (
    <footer className="bg-[#0f172a] dark:bg-[#020817] text-white mt-16">
      {/* wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 fill-white dark:fill-gray-950"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-[95%] mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-3xl font-bold arbutus-slab flex items-center gap-2">
              <img
                src="/logo (2).png"
                alt="OXISTYLE logo"
                className="h-10 w-10 object-contain rounded-full"
              />
              OXI<span style={{ color: '#155dfc' }}>STYLE</span>
            </h2>
            <p className="dmsans text-sm text-gray-400 leading-relaxed max-w-xs">
              Your go-to destination for authentic Bangladeshi fashion. Quality
              styles, great prices, and fast delivery — all in one place.
            </p>
            <div className="flex items-center gap-2 flex-wrap pt-1">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:scale-110 active:scale-95 transition-all duration-200"
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
            <h3 className="arbutus-slab text-lg font-semibold tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="dmsans text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-200 group"
                  >
                    <span
                      className="text-base transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: '#155dfc' }}
                    >
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Links */}
          <div className="space-y-4">
            <h3 className="arbutus-slab text-lg font-semibold tracking-wide">
              Developer
            </h3>
            <ul className="space-y-3 dmsans text-sm text-gray-400">
              <li>
                <a
                  href="https://hakimcolorportfolio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <FaGlobe style={{ color: '#155dfc' }} /> Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hakimcolor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <FaLinkedinIn style={{ color: '#0a66c2' }} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hakimcolor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <FaGithub className="text-gray-300" /> GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="arbutus-slab text-lg font-semibold tracking-wide">
              Get In Touch
            </h3>
            <ul className="space-y-3 dmsans text-sm text-gray-400">
              <li>
                <a
                  href="mailto:hakimcolor777@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <FaEnvelope style={{ color: '#ea4335' }} />{' '}
                  hakimcolor777@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801818777856"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <FaWhatsapp style={{ color: '#25d366' }} /> +880 1818-777856
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hakimcolorofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <FaFacebookF style={{ color: '#1877f2' }} />{' '}
                  hakimcolorofficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500 dmsans">
          <p>
            © {currentYear}{' '}
            <span className="text-white font-semibold">OXISTYLE</span>. all
            rights reserved.
          </p>
          <p>
            made with <span className="text-red-400">♥</span> by{' '}
            <a
              href="https://hakimcolorportfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
              style={{ color: '#155dfc' }}
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
