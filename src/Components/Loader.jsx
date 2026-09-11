const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#1e2922] gap-4">
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 rounded-full border-4 border-[#EBE5C2] dark:border-[#1e2922] border-t-[#3F4F44] animate-spin" />
      <div className="absolute inset-1.5 rounded-full overflow-hidden bg-white dark:bg-[#1e2922] flex items-center justify-center shadow-sm">
        <img
          src="/logo (2).png"
          alt="oxistyle logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <p className="arbutus-slab text-2xl font-bold tracking-wide dark:text-white">
      OXI<span style={{ color: '#3F4F44' }}>STYLE</span>
    </p>
    <p className="dmsans text-sm text-gray-400">loading, please wait...</p>
  </div>
);

export default Loader;
