const categories = [
  { label: "Sepatu Anak", img: "https://storage.googleapis.com/a1aa/image/baa2521d-d782-4856-6061-6a866530fac1.jpg" },
  { label: "Sandal", img: "https://storage.googleapis.com/a1aa/image/3fdec909-0625-46d9-9d02-b0b827441880.jpg" },
  { label: "Sepatu Wanita", img: "https://storage.googleapis.com/a1aa/image/ff3f9508-ddda-4656-6f64-7f448a8f6f3e.jpg" },
  { label: "Sepatu Pria", img: "https://storage.googleapis.com/a1aa/image/4ec217f0-c659-472e-2ea2-83f5e554629d.jpg" },
];

export default function Categories() {
  return (
    <section className="bg-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="relative">
            <img 
              src={cat.img} 
              alt={cat.label} 
              className="w-full h-48 object-cover" // Set a fixed height
            />
            <h2 className={`absolute bottom-4 left-4 text-white font-extrabold text-lg font-sans drop-shadow-md`}>
              {cat.label}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
