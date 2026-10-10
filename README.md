# IKM Catat

> **UI untuk pencatatan IKM olahan ikan & ayam**

Aplikasi sistem pencatatan operasional harian untuk Industri Kecil Menengah (IKM) olahan ikan dan ayam, mencakup pencatatan penjualan, stok bahan baku & produk, produksi harian, dan keuangan usaha.

---

## 🎨 Tampilan & Palet Warna

Antarmuka dirancang dengan desain modern, responsif, dan ramah pengguna dengan perpaduan warna:
- **Floral White (`#F7F4EA`)** - Background utama yang nyaman di mata
- **Lavender (`#DED9E2`)** - Background kartu & border sekunder
- **Periwinkle (`#C0B9DD`)** - Border aktif & aksen lembut
- **Wisteria Blue (`#80A1D4`)** - Aksen tombol & badge
- **Pearl Aqua (`#75C9C8`)** - Aksen sukses & highlight penjualan

---

## 🚀 Fitur Utama

1. **Dashboard / Beranda**
   - Ringkasan omzet, pengeluaran, dan laba bersih hari ini
   - Grafik performa mingguan
   - Peringatan stok menipis
   - Akses cepat catat penjualan dan pengeluaran

2. **Penjualan**
   - Form pencatatan transaksi kasir/pesanan
   - Riwayat transaksi harian
   - Status pembayaran (Lunas, Belum Lunas)

3. **Stok & Produksi**
   - Monitoring bahan baku (ikan, ayam, bumbu, kemasan)
   - Pencatatan stok masuk
   - Riwayat produksi harian

4. **Keuangan**
   - Pencatatan beban & pengeluaran operasional
   - Laporan laba rugi sederhana

5. **Master Data**
   - Data katalog produk & varian
   - Data pelanggan setia

---

## 💻 Menjalankan Projek

### 1. Kebutuhan Sistem
- PHP >= 8.3 (direkomendasikan PHP 8.5)
- Composer
- Node.js & npm

### 2. Instalasi & Menjalankan

```bash
# Clone repository
git clone https://github.com/Nisaalfiatur/ikm-ikan.git
cd ikm-ikan

# Install dependency backend & frontend
composer install
npm install

# Setup environment & database
cp .env.example .env
php artisan key:generate
php artisan migrate

# Build frontend
npm run build

# Jalankan server
php artisan serve
```

Akses aplikasi di browser pada: `http://localhost:8000`
