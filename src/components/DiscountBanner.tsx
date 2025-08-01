export default function DiscountBanner() {
  return (
    <section className="relative w-full h-auto sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 overflow-hidden">
      <img 
        alt="Pair of green sport shoes" 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://t3.ftcdn.net/jpg/03/46/75/30/360_F_346753021_rckLyU5GePdOxTNulqJ0TFe4NMVaJLL0.jpg" 
      />

      {/* Overlay content wrapper */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between h-full px-4 sm:px-6 md:px-8 py-4">
        {/* Text Section */}
        <div className="text-white text-center sm:text-left max-w-md">
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-snug">
            Diskon Nggak Pake Tanggung.
          </h2>
          <p className="text-xs sm:text-sm md:text-base mt-1">
            Plus bonus ongkir ke seluruh Indonesia.
          </p>
        </div>

        {/* Button */}
        <button 
          className="mt-4 sm:mt-0 bg-[#34495e] text-white font-semibold text-xs sm:text-sm md:text-base px-4 sm:px-5 py-2 rounded-full tracking-wide hover:bg-[#2c3e50] transition"
          type="button"
        >
          INFO SELENGKAPNYA
        </button>
      </div>
    </section>
  );
}
