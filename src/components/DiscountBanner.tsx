export default function DiscountBanner() {
  return (
    <section className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 overflow-hidden">
      <img 
        alt="Pair of green sport shoes with white soles on teal background" 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://t3.ftcdn.net/jpg/03/46/75/30/360_F_346753021_rckLyU5GePdOxTNulqJ0TFe4NMVaJLL0.jpg" 
      />
      <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-md">
        <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
          Diskon Nggak Pake Tanggung.
        </h2>
        <p className="text-white text-sm sm:text-base mt-1">
          Plus bonus ongkir ke seluruh Indonesia.
        </p>
      </div>
      <button 
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-[#34495e] text-white font-semibold text-xs sm:text-sm px-5 py-2 rounded-full tracking-wide hover:bg-[#2c3e50] transition" 
        type="button"
      >
        INFO SELENGKAPNYA
      </button>
    </section>
  );
}
