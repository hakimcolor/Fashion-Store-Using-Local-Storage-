const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#2d3d35] gap-4">
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 rounded-full border-4 border-[#C7D3C0] dark:border-[#2d3d35] border-t-[#8FA28A] animate-spin" />
      <div className="absolute inset-1.5 rounded-full overflow-hidden bg-white dark:bg-[#2d3d35] flex items-center justify-center shadow-sm">
        <img
          src="/logo (2).png"
          alt="oxistyle logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <p className="arbutus-slab text-2xl font-bold tracking-wide dark:text-white">
      OXI<span style={{ color: '#8FA28A' }}>STYLE</span>
    </p>
    <p className="dmsans text-sm text-gray-400">loading, please wait...</p>
  </div>
);

export default Loader;
