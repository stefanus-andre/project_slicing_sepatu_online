import { FiGift, FiHeadphones, FiRefreshCw, FiCheckCircle } from "react-icons/fi";

const features = [
  {
    icon: <FiCheckCircle className="text-4xl text-[#29496d]" />,
    title: "Kualitas Terpercaya",
    desc: "Produk kami dibuat dari bahan berkualitas. Kami bekerja sama dengan merek yang paling berpengalaman dalam industri.",
  },
  {
    icon: <FiGift className="text-4xl text-cyan-400" />,
    title: "Kirim sebagai Hadiah",
    desc: "Ingin memberi bingkisan pada orang tersayang dengan kemasan serta pesan khusus? Sampaikan saja, kami yang siapkan.",
  },
  {
    icon: <FiRefreshCw className="text-4xl text-[#29496d]" />,
    title: "Pengembalian Mudah",
    desc: "Tidak puas dengan pembelian Anda? Kami siap untuk melakukan retur barang kapanpun.",
  },
  {
    icon: <FiHeadphones className="text-4xl text-cyan-400" />,
    title: "Layanan Pelanggan",
    desc: "Untuk semua informasi, kami selalu siap untuk melayani kebutuhan dan pertanyaan Anda.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="bg-white border rounded-lg p-6 shadow-sm text-center">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
