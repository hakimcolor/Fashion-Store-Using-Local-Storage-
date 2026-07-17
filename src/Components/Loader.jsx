// branded full-page loader shown during route data fetching
const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white gap-4">
      {/* spinning ring around logo */}
      <div className="relative w-20 h-20">
        {/* outer animated ring */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-t-[#155dfc] animate-spin" />
        {/* logo image centered inside ring */}
        <div className="absolute inset-1.5 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm">
          <img
            src="/logo (2).png"
            alt="oxistyle logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* brand name */}
      <p className="arbutus-slab text-2xl font-bold tracking-wide">
        OXI<span style={{ color: '#155dfc' }}>STYLE</span>
      </p>

      {/* subtle tagline */}
      <p className="dmsans text-sm text-gray-400">loading, please wait...</p>
    </div>
  );
};

export default Loader;
