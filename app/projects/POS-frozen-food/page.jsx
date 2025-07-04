"use client";

import { motion } from 'framer-motion';
import { profile } from "@/app/data/portfolioData";

const POSFrozenFood = () => {
  const userProfileName = `${profile.name}`;

  return (
    <>
      <main className="max-w-7xl mx-auto pt-24 px-6 text-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
        >
          {/* KONTEN KIRI: Deskripsi */}
          <section className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6 text-white">
              🧊 POS Frozen Food: Revolusi Penjualan Toko Beku
            </h1>

            <p className="text-lg mb-4 text-slate-300">
              <strong className="text-slate-100">Tujuan Proyek:</strong> Proyek ini dirancang untuk mentransformasi operasional toko makanan beku,
              mengubah proses pencatatan transaksi dan manajemen stok yang sebelumnya manual menjadi sistem digital yang efisien dan akurat.
            </p>

            <p className="text-lg mb-4 text-slate-300">
              <strong className="text-slate-100">Tantangan yang Diatasi:</strong> Sebelumnya, toko menghadapi kendala serius seperti
              pencatatan penjualan dan stok secara tulisan tangan yang menimbulkan
              <span className="font-semibold text-blue-400"> kesalahan data</span>,
              <span className="font-semibold text-blue-400"> kesulitan saat tutup kasir</span>, dan
              <span className="font-semibold text-blue-400"> stok sering kosong tanpa disadari</span>.
            </p>

            <p className="text-lg mb-6 text-slate-300">
              <strong className="text-slate-100">Solusi Inovatif:</strong> Aplikasi POS berbasis web menggunakan
              <span className="text-pink-400 font-semibold"> Next.js (App Router), Framer Motion, Prisma ORM, dan MySQL</span>,
              dengan fitur pembayaran fleksibel, manajemen stok otomatis, dan cetak struk instan.
            </p>

            <hr className="my-8 border-slate-600" />

            <h2 className="text-2xl font-semibold mb-4 text-white">📊 Analisis Sistem & Dokumentasi Teknis</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300">
              <li><strong className="text-slate-100">Use Case Diagram:</strong> Login, transaksi, cetak struk, dan laporan.</li>
              <li><strong className="text-slate-100">Activity Diagram:</strong> Alur: Login → Produk → Checkout → Struk → Update Stok.</li>
              <li><strong className="text-slate-100">ERD:</strong> Struktur tabel: User, Product, Order, OrderItem, StockLog, Payment.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-white">🧰 Stack Teknologi Pilihan</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300">
              <li>Frontend: <span className="text-green-400 font-semibold">Next.js</span>, <span className="text-green-400">Tailwind CSS</span>, <span className="text-green-400">Framer Motion</span></li>
              <li>Backend: <span className="text-green-400">API Routes (App Router)</span>, <span className="text-green-400">Prisma ORM</span></li>
              <li>Database: <span className="text-green-400">MySQL</span></li>
              <li>Autentikasi: <span className="text-green-400">NextAuth</span></li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-white">⚙️ Fitur Utama Aplikasi</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300">
              <li><strong>Sistem Login Kasir:</strong> Akses aman untuk user terverifikasi.</li>
              <li><strong>Input Transaksi:</strong> Data produk dan metode pembayaran lengkap.</li>
              <li><strong>Total Otomatis:</strong> Minimalkan kesalahan hitung manual.</li>
              <li><strong>Struk Instan:</strong> Fitur cetak dengan `window.print`.</li>
              <li><strong>Stok Otomatis:</strong> Sinkronisasi stok real-time dengan log histori.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-white">🚀 Hasil & Dampak Positif</h2>
            <p className="text-slate-300 mb-6">
              Aplikasi POS membantu toko lebih efisien dalam pencatatan dan pengelolaan stok. Transaksi lebih cepat,
              stok tidak lagi kosong tanpa disadari, dan proses tutup kasir jadi mudah.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-white">🔗 Demo & Repositori</h2>
            <ul className="list-inside list-disc text-blue-400 mb-12">
              <li><a href="#" className="underline hover:text-blue-300">🌐 Live Demo</a></li>
              <li><a href="#" className="underline hover:text-blue-300">📦 GitHub Repo</a></li>
            </ul>
          </section>

          {/* KONTEN KANAN: Gambar Visualisasi */}
          <aside className="lg:col-span-1 flex flex-col items-end space-y-8 p-0">
            <h2 className="text-2xl font-semibold text-white self-start">🎨 Visualisasi Proyek</h2>

            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/600x400/E0E0E0/333333?text=Screenshot+Dashboard"
                alt="Screenshot Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-slate-400 text-right w-full">Tampilan dashboard utama aplikasi POS.</p>

            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/600x400/D0D0D0/444444?text=Flow+Transaksi"
                alt="Flow Transaksi"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-slate-400 text-right w-full">Ilustrasi alur transaksi dari pemilihan produk hingga pembayaran.</p>

            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/600x400/C0C0C0/555555?text=Manajemen+Stok"
                alt="Manajemen Stok"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-slate-400 text-right w-full">Antarmuka pengelolaan dan histori stok produk.</p>
          </aside>
        </motion.div>
      </main>
    </>
  );
};

export default POSFrozenFood;
