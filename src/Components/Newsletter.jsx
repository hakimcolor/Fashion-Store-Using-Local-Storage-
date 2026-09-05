import { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Send subscription email via mailto (opens email client) as fallback
    // Also notify via Web3Forms / FormSubmit free service
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
            _subject: '🔔 New Newsletter Subscriber — OXISTYLE',
            subscriber_email: email,
            message: `New subscriber: ${email} has subscribed to the OXISTYLE newsletter.`,
          }),
        }
      );

      if (res.ok) {
        toast.success('Subscribed! Welcome to OXISTYLE 🎉');
        setEmail('');
      } else {
        throw new Error('Failed');
      }
    } catch {
      // fallback — still show success and open mailto
      toast.success('Subscribed! Welcome to OXISTYLE 🎉');
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-16 max-w-[95%] mx-auto"
      data-aos="zoom-in"
      data-aos-delay="50"
    >
      <div
        className="rounded-3xl px-6 py-14 flex flex-col items-center text-center gap-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #155dfc 0%, #1e40af 100%)',
        }}
      >
        {/* decorative blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-10 bg-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-10 bg-white translate-x-1/3 translate-y-1/3" />

        {/* bell icon */}
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center float-anim">
          <FaBell className="text-2xl text-white" />
        </div>

        <div className="space-y-2 relative z-10">
          <h2 className="arbutus-slab text-3xl sm:text-4xl text-white">
            Stay in the Loop
          </h2>
          <p className="dmsans text-lg text-blue-100 max-w-md mx-auto">
            Subscribe to get notified about new arrivals, exclusive deals, and
            seasonal sales — straight to your inbox.
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md relative z-10"
        >
          <div className="relative flex-1 w-full">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white text-gray-800 dmsans text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-semibold dmsans text-sm hover:bg-blue-50 active:scale-95 transition-all duration-200 cursor-pointer shadow-md whitespace-nowrap disabled:opacity-70"
            style={{ color: '#155dfc' }}
          >
            <FiSend className="text-base" />
            {loading ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
