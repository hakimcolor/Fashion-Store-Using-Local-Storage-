import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/8801818777856"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shadow-xl wa-pulse cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
    style={{ background: '#25d366' }}
  >
    <FaWhatsapp />
  </a>
);

export default WhatsAppButton;
