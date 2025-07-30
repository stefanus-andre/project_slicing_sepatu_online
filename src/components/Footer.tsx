export default function Footer() {
  return (
    <footer className="bg-[#35506a] border-t border-[#2a4054]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-y-6">
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm">Mino Store</h3>
          <ul className="text-[#d9d9d9] text-xs space-y-1">
            <li>Yogyakarta</li>
            <li>Kebumen</li>
            <li>Purwokerto</li>
            <li>Kudus</li>
            <li>Surakarta</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm">Belanja</h3>
          <ul className="text-[#d9d9d9] text-xs space-y-1">
            <li>Sepatu Pria</li>
            <li>Sepatu Wanita</li>
            <li>Sepatu Uniseks</li>
            <li>Pernak-pernik</li>
            <li>Aksesoris</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm">Layanan</h3>
          <ul className="text-[#d9d9d9] text-xs space-y-1">
            <li>Bantuan</li>
            <li>Cara Pengembalian</li>
            <li>Indeks Produk</li>
            <li>Promo &amp; Diskon</li>
            <li>Konfirmasi Transfer</li>
            <li>Status Pesanan</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm">Tentang Kami</h3>
          <ul className="text-[#d9d9d9] text-xs space-y-1">
            <li>Tentang Kami</li>
            <li>Pers / Media</li>
            <li>Karir</li>
            <li>Persyaratan &amp; Ketentuan</li>
            <li>Kebijakan Privasi</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
