const blogs = [
  {
    title: "Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
    desc: "Laiknya diri sendiri, sepatu juga butuh dirawat. Setidaknya setiap sebulan sekali, sepatu perlu dibersihkan.",
    img: "https://storage.googleapis.com/a1aa/image/5c5e09d7-b3f7-4453-4f91-cafed309f12a.jpg",
  },
  {
    title: "Mino Shoe Store Siap Semarakkan Harbolnas 11.11!",
    desc: "Akan ada banyak sekali promo dari diskon ongkir, potongan harga, hingga cashback.",
    img: "https://storage.googleapis.com/a1aa/image/3a80c1f9-3669-4cae-f2ad-d2b2850abe72.jpg",
  },
  {
    title: "Tips Agar Kaki Tidak Keseleo Sewaktu Berlari",
    desc: "Jogging atau lari-lari pendek menjadi salah satu tren olahraga di tengah pandemi.",
    img: "https://storage.googleapis.com/a1aa/image/44a3285a-fe80-4848-33b9-f675692d9a9c.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-10 pb-20 bg-[#f8f9fa]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-[#2f3640]">Blog</h2>
        <button className="text-[#2f3640] border border-[#2f3640] rounded-full px-6 py-2 text-xs uppercase tracking-widest hover:bg-[#2f3640] hover:text-white transition" type="button">
          Lihat Semua
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <article key={i} className="bg-white rounded shadow overflow-hidden">
            <img alt={blog.title} className="w-full object-cover h-48" src={blog.img} />
            <div className="p-4">
              <p className="text-xs font-bold text-[#2f3640] mb-1">PROMO</p>
              <h3 className="font-extrabold text-[#2f3640] text-lg leading-tight mb-2">{blog.title}</h3>
              <div className="flex flex-wrap text-xs text-[#2f3640] mb-3 space-x-2">
                <span>30 NOV 2020</span>
                <span>•</span>
                <span>OLEH <a className="text-[#2f3640] underline" href="#">ADMIN</a></span>
                <span>•</span>
                <span><a className="text-[#2f3640] underline" href="#">3 KOMENTAR</a></span>
              </div>
              <p className="text-xs text-[#6c757d] leading-relaxed mb-4 line-clamp-3">{blog.desc}</p>
              <button className="bg-[#2f3640] text-white text-xs font-extrabold uppercase tracking-widest rounded-full px-5 py-2 hover:bg-[#1b2530] transition" type="button">
                Baca Selengkapnya
              </button>
            </div>
          </article>
        ))}
      </div>
    <footer className="bg-white border-t border-[#2f3640] py-6">
  <div className="max-w-[1200px] mx-auto px-2 flex justify-center gap-6 flex-wrap">
    <img 
      alt="Your Image Description" 
      className="w-180 h-auto object-contain"  // Set width to 32
      src="https://jyffootwear.com/wp-content/uploads/2019/10/web-3-1.png" 
    />
  </div>
</footer>


    </section>
  );
}
