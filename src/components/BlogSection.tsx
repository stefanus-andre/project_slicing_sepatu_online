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
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center gap-6 flex-wrap">
          <img alt="ATM Bersama logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/fad4acbf-db6e-469b-b263-e98f2b0c5d19.jpg" />
          <img alt="Danamon bank logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/36b9eb5a-bfd3-4301-934d-791dfb06b01c.jpg" />
          <img alt="BNI bank logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/fa13feb2-f440-4bc1-938a-61200d6ea8d2.jpg" />
          <img alt="Bank BRI logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/713aabff-f761-4379-596b-9a92cd84c65a.jpg" />
          <img alt="CIMB Niaga bank logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/886fb683-8ba9-4ac8-17b0-857bfe6232fd.jpg" />
          <img alt="Mandiri bank logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/4fd48108-9e3e-42a5-f734-6c0f9f932d97.jpg" />
          <img alt="BCA bank logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/07a7fcdc-5b23-4cd1-0f6c-af3261469ba2.jpg" />
          <img alt="PermataBank logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/6fe1a8a5-ee55-4d23-164a-bd9024f242fd.jpg" />
          <img alt="Maybank logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/b12b0f4a-93d7-4cb6-8910-1d105089e869.jpg" />
          <img alt="Mastercard logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/f96a9374-d50d-446a-00ce-c0d974f6c199.jpg" />
          <img alt="Visa logo in grayscale" className="h-7 object-contain" src="https://storage.googleapis.com/a1aa/image/f9c26de5-9ea3-4e3f-b51f-6ffdc4684c1d.jpg" />
        </div>
      </footer>
    </section>
  );
}
