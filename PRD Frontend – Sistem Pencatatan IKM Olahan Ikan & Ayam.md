# PRD Frontend: Sistem Pencatatan IKM Olahan Ikan & Ayam

Product Requirements Document (khusus UI/UX & Frontend) · Versi 1.0 · Disusun berdasarkan dokumen *Ide Inovasi Sistem Informasi untuk IKM Olahan Ikan & Ayam (pendekatan MPSI)* dan palet warna "Ivory – Lavender Blush – Thistle – Sky Reflection – Soft Periwinkle".

## 1. Ringkasan Produk

**Nama kerja:** `[Nama Usaha] Catat` (ganti dengan nama IKM yang sebenarnya).

**Masalah.** Dari hasil wawancara, produksi dan penjualan IKM sudah berjalan baik, tetapi pencatatan pesanan, stok, dan transaksi masih manual: dicatat sebentar lalu dibuang, sehingga tidak ada rekap penjualan. Aplikasi kasir yang ada belum maksimal dan tidak mencatat pengeluaran. Ukuran dan isi kemasan belum konsisten. Bahan baku ikan bersifat musiman (kosong sekitar 4 bulan setelah panen tambak), sehingga stok perlu direncanakan.

**Solusi.** Aplikasi web *mobile-first* yang sangat sederhana untuk mencatat **penjualan**, **stok & hasil produksi**, dan **pengeluaran**, lalu menampilkan **rekap harian dan bulanan** otomatis. Tampilannya harus ramah untuk pengguna yang tidak terbiasa dengan aplikasi (form singkat, tombol besar, bahasa Indonesia sehari-hari).

**Batasan dokumen ini.** PRD ini **hanya mencakup UI/UX dan frontend**. Tidak ada backend, database server, maupun autentikasi sungguhan. Data disimpan sementara di browser (localStorage) lewat lapisan data yang mudah diganti dengan API di tahap berikutnya.

**Tujuan PRD.** Menjadi acuan yang cukup jelas agar sistem dapat dibangun lewat AI (Claude, dsb.) dengan hasil yang konsisten, tanpa banyak revisi.

## 2. Tujuan & Indikator Keberhasilan

| Tujuan | Indikator (untuk prototipe) |
| --- | --- |
| Mencatat pesanan dengan cepat | Satu pesanan bisa diinput kurang dari 30 detik dan maksimal 3 ketukan sebelum form terisi |
| Rekap tidak hilang | Riwayat penjualan tersimpan dan bisa difilter per tanggal, pelanggan, produk, dan status bayar |
| Pemilik melihat untung-rugi, bukan hanya omzet | Dashboard menampilkan omzet, pengeluaran, dan laba bersih dalam satu layar |
| Stok ikan terpantau menjelang masa kosong tambak | Ada indikator stok menipis dan estimasi sisa hari stok |
| Kemasan konsisten | Ada master ukuran kemasan baku dan checklist cek sebelum packing |
| Mudah dipakai tim | Semua halaman utama terbaca jelas di layar HP 360 px |

## 3. Ruang Lingkup

### 3.1 Masuk (Tahap 1, MVP)

1. Dashboard rekap harian dan bulanan.
2. Pencatatan penjualan dan bill digital.
3. Pencatatan stok bahan dan hasil produksi.
4. Pencatatan pengeluaran dan laporan laba-rugi sederhana.
5. Master data: produk, kemasan baku, pelanggan/reseller.
6. Checklist SOP packing (standardisasi produk).
7. Pengaturan: ekspor/impor cadangan data, pergantian peran (simulasi).

### 3.2 Tahap lanjut (didesain tampilannya, aktif setelah MVP)

1. Katalog online dengan tombol pesan ke WhatsApp.
2. Manajemen reseller (harga reseller, riwayat, piutang).

### 3.3 Di luar lingkup

Backend, database server, login sungguhan, sinkronisasi cloud, integrasi marketplace, pembayaran online, dan aplikasi native. Semuanya dicatat sebagai **titik serah terima** di Bagian 12.

## 4. Pengguna & Peran

| Peran | Siapa | Kebutuhan utama | Akses |
| --- | --- | --- | --- |
| Pemilik | Pengambil keputusan | Melihat omzet, laba, stok, dan tren dengan sekali buka | Semua halaman |
| Admin | Suami pemilik (monitoring) | Input dan koreksi data, cek kelengkapan catatan | Semua halaman kecuali pengaturan sensitif |
| Tim produksi | Pekerja ikan dan ayam, petugas pembersih | Isi jumlah bahan, hasil jadi, dan checklist dengan cepat | Stok & produksi, checklist SOP |
| Reseller / pelanggan | Pembeli | Melihat katalog dan memesan lewat WhatsApp | Katalog publik (Tahap lanjut) |

*Catatan:* karena belum ada backend, peran disimulasikan lewat pemilih peran di Pengaturan. Menu dan tombol yang tidak boleh diakses disembunyikan sesuai peran.

## 5. Prinsip UX

1. **Mobile-first.** Dirancang untuk layar HP (360–414 px) lebih dulu, lalu diperluas ke tablet dan desktop.
2. **Form sesingkat mungkin.** Hanya field wajib yang tampil di awal; sisanya dilipat. Ini jawaban atas risiko "pencatatan tidak konsisten".
3. **Tombol aksi utama selalu terjangkau.** Tombol mengambang "+ Catat" di kanan bawah pada layar HP.
4. **Bahasa sehari-hari.** Contoh: "Belum lunas", "Stok menipis", "Catat penjualan", bukan istilah teknis.
5. **Beri contoh pengisian.** Setiap form memiliki *placeholder* dan teks bantuan singkat, serta tur awal 3 langkah untuk pengguna baru.
6. **Umpan balik jelas.** Setelah menyimpan, tampil notifikasi singkat dan opsi "Tambah lagi".
7. **Aman dari salah ketuk.** Hapus data selalu meminta konfirmasi dan menyediakan "Urungkan" selama beberapa detik.
8. **Tenang dan lembut secara visual**, sesuai palet: pastel, sudut membulat, banyak ruang kosong.

## 6. Sistem Desain (Design System)

### 6.1 Palet warna

Semua warna di bawah **berasal dari gambar palet** kecuali yang ditandai *tambahan*.

| Token | Nama | HEX | RGB | Fungsi |
| --- | --- | --- | --- | --- |
| `--color-bg` | Ivory | `#F4F7EA` | 244, 247, 234 | Latar halaman, latar kartu terang |
| `--color-surface-soft` | Lavender Blush | `#E2D9E2` | 226, 217, 226 | Latar bagian sekunder, baris tabel selang-seling, input |
| `--color-accent-soft` | Thistle | `#CDB9DD` | 205, 185, 221 | Garis, chip, hover, latar badge, ilustrasi |
| `--color-secondary` | Sky Reflection | `#75ADC9` | 117, 173, 201 | Aksen sekunder, grafik, tombol sekunder, info |
| `--color-primary` | Soft Periwinkle | `#9580D4` | 149, 128, 212 | Tombol utama, tab aktif, tautan, fokus |
| `--color-ink` *(tambahan)* | Deep Ink | `#2B2650` | 43, 38, 80 | Teks utama dan judul |
| `--color-ink-muted` *(tambahan)* | Muted Ink | `#5D5780` | 93, 87, 128 | Teks sekunder |
| `--color-success` *(tambahan)* | Soft Sage | `#5E9E84` | 94, 158, 132 | Status lunas, stok aman |
| `--color-warning` *(tambahan)* | Soft Amber | `#D9A441` | 217, 164, 65 | Stok menipis, belum lunas sebagian |
| `--color-danger` *(tambahan)* | Soft Rose | `#C65D7B` | 198, 93, 123 | Belum lunas, stok habis, hapus |

**Mengapa ada warna tambahan.** Kelima warna pada palet semuanya pastel dan terang. Perhitungan kontras menunjukkan Soft Periwinkle di atas Ivory hanya sekitar 3,1:1 dan Sky Reflection di atas Ivory sekitar 2,3:1, di bawah batas 4,5:1 untuk teks biasa. Karena itu teks utama memakai **Deep Ink** (kontras sekitar 13:1 di atas Ivory). Warna status (lunas, menipis, belum lunas) juga tidak ada di palet, jadi ditambahkan dengan nuansa lembut yang senada.

### 6.2 Aturan pemakaian warna

1. Latar halaman memakai gradien lembut yang meniru gambar palet: Ivory ke Lavender Blush ke Thistle, dengan sapuan Sky Reflection dan Soft Periwinkle yang sangat halus di sudut. Gradien hanya untuk latar, bukan di belakang teks panjang.
2. Kartu berwarna Ivory atau putih transparan (efek kaca ringan, `backdrop-filter: blur`), bayangan lembut, dan bingkai Thistle tipis.
3. Tombol utama: latar Soft Periwinkle, teks Ivory, tebal. Tombol sekunder: latar Sky Reflection atau garis Thistle dengan teks Deep Ink.
4. **Teks di atas Soft Periwinkle atau Sky Reflection harus berukuran 16 px tebal atau lebih** (atau pakai Deep Ink pada Sky Reflection). Jangan memakai teks kecil berwarna periwinkle di atas Ivory.
5. **Status tidak boleh hanya dibedakan lewat warna.** Selalu sertakan ikon atau teks (mis. "Lunas", "Belum lunas").
6. Grafik: seri utama Soft Periwinkle, seri kedua Sky Reflection, seri ketiga Thistle, dan pengeluaran memakai Soft Rose.

### 6.3 Motif dan bentuk

Gambar palet memakai kartu bersudut membulat, ikon bintang empat sudut (✦), dan latar gradien kabur. Terapkan sebagai ciri khas:

1. Radius: kartu 20 px, tombol 14 px, chip 999 px.
2. Ikon bintang empat sudut dipakai sebagai penanda kosong (*empty state*), bullet judul bagian, dan animasi sukses.
3. Bayangan: `0 8px 24px rgba(149,128,212,0.18)`.
4. Animasi: halus (150–250 ms), hormati `prefers-reduced-motion`.

### 6.4 Tipografi

| Peran | Font (Google Fonts) | Ukuran |
| --- | --- | --- |
| Judul halaman dan angka besar dashboard | **Fraunces** (serif, mirip nuansa judul pada gambar palet) | 28 / 24 / 20 px |
| Isi, label, tabel, tombol | **Plus Jakarta Sans** | 16 px dasar, label 14 px, minimal 12 px |

Font cadangan: `Georgia, serif` dan `system-ui, sans-serif`. Angka rupiah memakai `font-variant-numeric: tabular-nums`.

### 6.5 Komponen inti

`AppShell` (sidebar di desktop, bottom navigation di HP), `PageHeader`, `StatCard`, `DataTable` (berubah menjadi daftar kartu di HP), `FormField`, `MoneyInput` (format Rp otomatis), `QuantityStepper` (tombol + dan −), `DatePicker` (default hari ini), `Select/Combobox` (cari pelanggan atau produk), `StatusBadge`, `Chip`, `FAB`, `Modal/BottomSheet`, `Toast` (dengan Urungkan), `EmptyState`, `ConfirmDialog`, `Tabs`, `ChartCard`, `StockMeter`, `ChecklistItem`, `Stepper` untuk tur awal.

## 7. Arsitektur Informasi

**Navigasi bawah (HP) / sidebar (desktop):**

1. **Beranda** (`/`)
2. **Penjualan** (`/penjualan`)
3. **Stok & Produksi** (`/stok`)
4. **Keuangan** (`/keuangan`)
5. **Lainnya** (`/lainnya`): Master Data, Checklist SOP, Katalog (Tahap lanjut), Pengaturan

**Peta halaman:**

| Rute | Halaman | Tahap |
| --- | --- | --- |
| `/` | Beranda (dashboard) | 1 |
| `/penjualan` | Daftar penjualan + filter | 1 |
| `/penjualan/baru` | Form catat penjualan | 1 |
| `/penjualan/:id` | Detail + bill digital | 1 |
| `/stok` | Ringkasan stok + tab Bahan Masuk, Pembersihan, Hasil Jadi | 1 |
| `/stok/baru` | Form catat bahan/produksi | 1 |
| `/keuangan` | Ringkasan laba-rugi + daftar pengeluaran | 1 |
| `/keuangan/baru` | Form catat pengeluaran | 1 |
| `/master` | Produk, kemasan baku, pelanggan/reseller | 1 |
| `/sop` | Checklist packing | 1 |
| `/pengaturan` | Peran simulasi, cadangan data, bantuan | 1 |
| `/katalog` | Katalog + tombol pesan WhatsApp | Lanjut |
| `/reseller` | Manajemen reseller dan piutang | Lanjut |

## 8. Kebutuhan Fungsional per Halaman

Prioritas: **P0** wajib MVP, **P1** penting, **P2** tahap lanjut.

### 8.1 Beranda (Dashboard)

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-01 | Sapaan singkat, tanggal hari ini, dan tombol cepat "Catat penjualan", "Catat produksi", "Catat pengeluaran" | P0 |
| FR-02 | Kartu ringkasan: omzet hari ini, pengeluaran hari ini, laba hari ini, jumlah pesanan | P0 |
| FR-03 | Pemilih periode: Hari ini / 7 hari / Bulan ini / Pilih tanggal | P0 |
| FR-04 | Grafik omzet vs pengeluaran per hari (garis atau batang) | P0 |
| FR-05 | Produk terlaris (5 teratas) dan pelanggan teratas | P1 |
| FR-06 | Peringatan: stok ikan menipis, pesanan belum lunas, kemasan belum dicek hari ini | P0 |
| FR-07 | Indikator "musim ikan": sisa stok ikan dan estimasi hari tersisa menuju masa kosong tambak | P1 |

**Kriteria penerimaan:** angka pada kartu selalu sama dengan jumlah data pada halaman Penjualan dan Keuangan untuk periode yang sama.

### 8.2 Penjualan & Bill Digital (prioritas utama)

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-10 | Daftar penjualan terbaru, dikelompokkan per tanggal, dengan total per hari | P0 |
| FR-11 | Pencarian dan filter: tanggal, pelanggan/reseller, produk, status bayar (Lunas / Belum lunas / Sebagian) | P0 |
| FR-12 | Form penjualan dengan field: **tanggal** (default hari ini), **pelanggan/reseller** (pilih atau ketik baru), **produk** (bisa lebih dari satu baris), **jumlah**, **harga** (terisi otomatis dari master, bisa diubah), **status bayar** | P0 |
| FR-13 | Total otomatis, serta kolom "dibayar" dan "sisa" bila status Sebagian | P0 |
| FR-14 | Tombol "Simpan & tambah lagi" dan "Simpan" | P0 |
| FR-15 | Detail pesanan berupa **bill digital** (kop usaha, tanggal, rincian, total, status) | P0 |
| FR-16 | Tombol "Bagikan ke WhatsApp" yang membuka tautan `wa.me` berisi ringkasan bill | P0 |
| FR-17 | Ubah status bayar langsung dari daftar (geser atau ketuk lencana) | P1 |
| FR-18 | Edit dan hapus dengan konfirmasi dan Urungkan | P0 |
| FR-19 | Riwayat per pelanggan (total belanja, terakhir beli) pada profil pelanggan | P1 |

**Kriteria penerimaan:** pesanan dengan 1 produk dapat disimpan dengan mengisi paling banyak: pelanggan, produk, jumlah, status bayar (tanggal dan harga terisi otomatis).

### 8.3 Stok & Produksi

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-20 | Ringkasan stok per bahan/produk dalam bentuk kartu dengan `StockMeter` (aman / menipis / habis) | P0 |
| FR-21 | Tab **Bahan Masuk**: tanggal, bahan (ikan dari tambak, ayam dari pemasok), sumber, jumlah (kg), catatan | P0 |
| FR-22 | Tab **Pembersihan Harian**: tanggal, bahan, jumlah yang dibersihkan (kg), jumlah hasil bersih (kg), petugas | P0 |
| FR-23 | Tab **Hasil Jadi**: tanggal, produk, jumlah kemasan, ukuran kemasan baku, bahan terpakai | P0 |
| FR-24 | **Rendemen otomatis** (hasil bersih ÷ bahan dibersihkan, dalam persen) ditampilkan per hari dan rata-rata | P1 |
| FR-25 | Peringatan stok menipis dengan ambang yang bisa diatur per bahan | P0 |
| FR-26 | Estimasi "stok cukup untuk X hari" berdasarkan rata-rata pemakaian 7 hari terakhir | P1 |
| FR-27 | Penanda **masa panen dan masa kosong tambak** pada kalender sederhana (bisa diatur di Pengaturan) | P1 |
| FR-28 | Penyesuaian stok manual (koreksi) dengan alasan wajib diisi | P1 |

### 8.4 Keuangan Sederhana

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-30 | Form pengeluaran: tanggal, kategori (**Bahan, Upah petugas pembersih, Gas, Kemasan, Ongkir, Lainnya**), nominal, catatan | P0 |
| FR-31 | Daftar pengeluaran dengan filter periode dan kategori | P0 |
| FR-32 | Ringkasan **laba-rugi**: omzet − pengeluaran = laba bersih, per periode | P0 |
| FR-33 | Diagram komposisi pengeluaran per kategori (donat atau batang horizontal) | P1 |
| FR-34 | Daftar piutang (pesanan belum lunas) beserta total | P1 |
| FR-35 | Ekspor ringkasan bulanan ke CSV | P1 |

### 8.5 Master Data

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-40 | Produk: nama, jenis (ikan/ayam), harga jual umum, harga reseller, satuan | P0 |
| FR-41 | **Kemasan baku**: nama kemasan, ukuran/berat isi, jumlah potong, takaran bumbu | P0 |
| FR-42 | Pelanggan/reseller: nama, tipe, nomor WhatsApp, catatan | P0 |
| FR-43 | Impor daftar pelanggan dari CSV | P2 |

### 8.6 Checklist SOP Packing

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-50 | Checklist harian sebelum packing: ukuran kemasan sesuai baku, isi sesuai standar, takaran bumbu, segel/label, kebersihan | P0 |
| FR-51 | Isian cepat: centang per item, catatan bila ada yang tidak sesuai, nama pemeriksa | P0 |
| FR-52 | Riwayat checklist dan persentase kepatuhan 30 hari terakhir | P1 |
| FR-53 | Item checklist dapat diubah oleh Admin/Pemilik | P1 |

### 8.7 Pengaturan & Bantuan

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-60 | Pemilih peran simulasi (Pemilik / Admin / Tim produksi) | P0 |
| FR-61 | **Cadangan data**: ekspor semua data ke file JSON, impor dari JSON, dan pengingat "terakhir dicadangkan" | P0 |
| FR-62 | Tur awal 3 langkah dan halaman "Cara mengisi" dengan contoh | P1 |
| FR-63 | Atur identitas usaha (nama, logo teks, nomor WhatsApp) yang tampil di bill | P1 |
| FR-64 | Muat data contoh (seed) dan hapus semua data | P0 |

### 8.8 Tahap Lanjut

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| FR-70 | Katalog produk berupa kartu (foto, nama, harga, ukuran kemasan) dengan tombol "Pesan via WhatsApp" yang mengisi pesan otomatis | P2 |
| FR-71 | Keranjang sederhana pada katalog, hasilnya menjadi pesan WhatsApp terformat | P2 |
| FR-72 | Halaman reseller: harga khusus, riwayat pesanan, piutang | P2 |

## 9. Model Data (Mock, Sisi Klien)

Semua entitas disimpan di localStorage dengan kunci berawalan `ikm.` dan diakses **hanya lewat lapisan repository** (`src/data/repository.ts`), agar nanti bisa diganti dengan pemanggilan API tanpa mengubah komponen UI.

```ts
type Id = string;
type StatusBayar = 'lunas' | 'belum' | 'sebagian';

interface Produk { id: Id; nama: string; jenis: 'ikan' | 'ayam'; hargaUmum: number; hargaReseller: number; satuan: string; kemasanId?: Id; aktif: boolean }
interface KemasanBaku { id: Id; nama: string; beratIsiGram: number; jumlahPotong?: number; takaranBumbu?: string }
interface Pelanggan { id: Id; nama: string; tipe: 'pelanggan' | 'reseller'; whatsapp?: string; catatan?: string }

interface ItemPenjualan { produkId: Id; jumlah: number; harga: number }
interface Penjualan { id: Id; tanggal: string; pelangganId?: Id; namaPelanggan: string; items: ItemPenjualan[]; total: number; dibayar: number; status: StatusBayar; catatan?: string }

interface Bahan { id: Id; nama: string; jenis: 'ikan' | 'ayam'; satuan: 'kg'; ambangMenipis: number }
interface BahanMasuk { id: Id; tanggal: string; bahanId: Id; sumber: 'tambak' | 'pemasok'; jumlahKg: number; catatan?: string }
interface Pembersihan { id: Id; tanggal: string; bahanId: Id; dibersihkanKg: number; hasilBersihKg: number; petugas?: string }
interface HasilJadi { id: Id; tanggal: string; produkId: Id; jumlahKemasan: number; bahanTerpakaiKg?: number }
interface PenyesuaianStok { id: Id; tanggal: string; bahanId: Id; selisihKg: number; alasan: string }

type KategoriBiaya = 'bahan' | 'upah' | 'gas' | 'kemasan' | 'ongkir' | 'lainnya';
interface Pengeluaran { id: Id; tanggal: string; kategori: KategoriBiaya; nominal: number; catatan?: string }

interface ChecklistSOP { id: Id; tanggal: string; pemeriksa: string; hasil: { itemId: Id; ok: boolean; catatan?: string }[] }
interface Pengaturan { namaUsaha: string; whatsapp?: string; peran: 'pemilik' | 'admin' | 'produksi'; masaKosongTambak?: { mulai: string; selesai: string }; terakhirCadangan?: string }
```

**Data contoh (seed) minimal:** 6 produk (3 ikan, 3 ayam), 3 kemasan baku, 8 pelanggan/reseller, 30 hari penjualan (±60 transaksi dengan campuran status bayar), 30 hari bahan masuk dan pembersihan, 30 hari pengeluaran di semua kategori, dan 1 bahan ikan dengan stok yang sengaja menipis agar peringatan terlihat. Gunakan nama dan angka fiktif yang wajar untuk IKM olahan ikan dan ayam.

## 10. Kebutuhan Non-Fungsional

1. **Responsif:** titik henti 360 / 768 / 1024 px. Tidak boleh ada gulir horizontal pada body.
2. **Aksesibilitas:** target WCAG 2.1 AA, kontras teks minimal 4,5:1, area ketuk minimal 44×44 px, fokus terlihat (cincin Soft Periwinkle 3 px), label pada semua input, navigasi keyboard berfungsi.
3. **Bahasa:** seluruh antarmuka Bahasa Indonesia. Format rupiah `Rp 1.250.000`, tanggal `7 Okt 2026`, dan zona waktu WIB.
4. **Performa:** halaman pertama tampil kurang dari 2 detik pada jaringan 4G biasa; daftar panjang memakai pagination atau virtualisasi.
5. **Ketahanan data:** semua baca/tulis localStorage dibungkus `try/catch`. Bila penyimpanan gagal atau kosong, UI tetap tampil dengan *empty state* yang jelas.
6. **Offline-ready (P1):** aplikasi dapat dibuka tanpa internet (PWA sederhana: manifest dan service worker).
7. **Keamanan frontend:** tidak ada data sensitif atau kunci rahasia di kode; semua input disanitasi sebelum ditampilkan.

## 11. Arahan Teknis untuk Pembangunan Lewat AI

### 11.1 Tumpukan teknologi yang disarankan

| Kebutuhan | Pilihan |
| --- | --- |
| Kerangka | React 18 + Vite + TypeScript |
| Gaya | Tailwind CSS dengan token warna pada Bagian 6 di `tailwind.config` |
| Routing | React Router |
| Grafik | Recharts |
| Formulir | React Hook Form + Zod |
| Tanggal | date-fns (locale `id`) |
| Ikon | lucide-react + komponen `Sparkle` (bintang empat sudut) buatan sendiri |
| State | Zustand atau React Context, dengan persistensi lewat repository |

*Jika ingin lebih sederhana:* satu berkas HTML dengan CSS dan JavaScript di dalamnya juga bisa, tetapi struktur React di atas lebih mudah dikembangkan menjadi sistem penuh.

### 11.2 Struktur folder

```
src/
  components/   (ui/ dan layout/)
  pages/        (Beranda, Penjualan, Stok, Keuangan, Master, Sop, Pengaturan, Katalog)
  data/         (types.ts, repository.ts, seed.ts)
  lib/          (format.ts, calculations.ts)
  styles/       (tokens.css)
  App.tsx, main.tsx
```

### 11.3 Aturan untuk AI

1. Bangun **frontend saja**. Jangan membuat server, database, atau autentikasi.
2. Semua teks UI Bahasa Indonesia; nama kode (variabel, tipe) boleh Bahasa Inggris atau Indonesia secara konsisten.
3. Gunakan **hanya token warna di Bagian 6**. Jangan menambah warna lain tanpa alasan.
4. Semua perhitungan (total, laba, rendemen, estimasi hari stok) berada di `lib/calculations.ts` dan diuji dengan contoh angka.
5. Jangan memakai `localStorage` langsung di komponen; lewat `repository.ts`.
6. Setiap halaman harus punya *loading*, *empty*, dan *error state*.
7. Selesaikan per milestone dan jalankan aplikasi sebelum lanjut ke tahap berikutnya.

### 11.4 Milestone pembangunan

| Milestone | Isi | Hasil yang diperiksa |
| --- | --- | --- |
| M1 | Setup proyek, token warna, tipografi, `AppShell`, navigasi, komponen dasar | Kerangka tampil di HP dan desktop dengan palet yang benar |
| M2 | Lapisan data, seed, format rupiah/tanggal, kalkulasi | Data contoh muncul dan perhitungan benar |
| M3 | Penjualan: daftar, filter, form, detail/bill, bagikan WhatsApp | Alur catat pesanan selesai di bawah 30 detik |
| M4 | Stok & Produksi: tiga tab, rendemen, peringatan stok | Peringatan stok menipis tampil |
| M5 | Keuangan: pengeluaran, laba-rugi, piutang | Angka cocok dengan Penjualan |
| M6 | Beranda/dashboard dan grafik | Semua kartu konsisten dengan halaman lain |
| M7 | Master data, Checklist SOP, Pengaturan, cadangan data | Ekspor dan impor JSON berfungsi |
| M8 | Poles: aksesibilitas, tur awal, empty state, PWA, uji layar 360 px | Daftar periksa Bagian 13 lolos |
| M9 (opsional) | Katalog dan reseller (Tahap lanjut) | Tombol pesan WhatsApp mengisi pesan otomatis |

### 11.5 Prompt induk (salin ke AI)

> Kamu adalah pengembang frontend senior. Bangun aplikasi web **mobile-first** berbahasa Indonesia untuk pencatatan IKM olahan ikan dan ayam (penjualan, stok & produksi, pengeluaran, dashboard rekap, checklist SOP packing) berdasarkan PRD terlampir. **Hanya frontend**: data disimpan di localStorage lewat lapisan repository dan diisi data contoh. Pakai React + Vite + TypeScript + Tailwind. Gunakan palet: Ivory #F4F7EA, Lavender Blush #E2D9E2, Thistle #CDB9DD, Sky Reflection #75ADC9, Soft Periwinkle #9580D4, serta teks Deep Ink #2B2650. Gaya: pastel, kartu bersudut membulat, gradien latar lembut, motif bintang empat sudut. Kerjakan **per milestone (M1 sampai M8)**. Setelah tiap milestone, ringkas apa yang selesai dan cara mengujinya, lalu tunggu konfirmasi sebelum lanjut. Jika ada yang ambigu, tanyakan satu pertanyaan singkat atau ambil asumsi paling sederhana dan sebutkan asumsinya.

Saran: kirim PRD ini dulu, lalu prompt induk, lalu minta milestone satu per satu ("Kerjakan M1", "Lanjut M2", dst.) agar hasilnya terarah dan mudah dikoreksi.

## 12. Titik Serah Terima ke Backend (Nanti)

Supaya frontend ini tidak dibuang saat sistem penuh dibuat:

1. Ganti isi `repository.ts` dengan pemanggilan API; antarmukanya tidak berubah.
2. Tambahkan autentikasi sungguhan dan ganti pemilih peran simulasi dengan peran dari server.
3. Pindahkan penyimpanan dari localStorage ke database cloud agar data tidak hilang jika HP rusak (risiko "data hanya di satu perangkat" pada dokumen MPSI).
4. Aktifkan Katalog dan Reseller (Tahap lanjut) setelah pencatatan dasar benar-benar dipakai.

## 13. Keterkaitan dengan Materi MPSI & Risiko

| Risiko (dari dokumen MPSI) | Dampak | Jawaban pada desain frontend |
| --- | --- | --- |
| Pencatatan tidak konsisten | Data bolong, rekap tidak dapat dipercaya | Form super singkat, nilai default otomatis, peringatan "belum ada catatan hari ini" di Beranda |
| Tim sulit beradaptasi | Sistem tidak dipakai | Mobile-first, bahasa sehari-hari, tur awal, contoh pengisian, tombol besar |
| Data hanya di satu perangkat | Data hilang jika HP rusak | Ekspor/impor cadangan JSON, pengingat cadangan, jalur migrasi ke cloud (Bagian 12) |
| Terlalu banyak fitur di awal | Proyek macet | Tahap 1 hanya penjualan, stok, keuangan; katalog dan reseller ditunda (P2) |

| Materi MPSI | Penerapan pada PRD ini |
| --- | --- |
| Inisiasi proyek | Tujuan dan indikator keberhasilan (Bagian 2) |
| Stakeholder | Peran pengguna (Bagian 4) |
| Ruang lingkup | Tahap 1 vs tahap lanjut vs di luar lingkup (Bagian 3) |
| Jadwal & WBS | Milestone M1–M9 (Bagian 11.4) |
| Biaya | Seluruh tumpukan teknologi gratis dan sumber terbuka; tanpa biaya server |
| Risiko | Tabel risiko di atas |
| Kualitas | Kemasan baku, Checklist SOP, kriteria penerimaan, dan daftar periksa di bawah |
| Penutupan & evaluasi | Dashboard dipakai pemilik untuk keputusan; evaluasi setelah 4 minggu pemakaian |

## 14. Daftar Periksa Penerimaan (Definition of Done)

1. Semua fitur P0 berfungsi di layar 360 px dan 1280 px.
2. Hanya warna dari token Bagian 6 yang dipakai; kontras teks memenuhi 4,5:1.
3. Pesanan dapat dicatat, dicari, difilter, diedit, dihapus (dengan Urungkan), dan dibagikan ke WhatsApp.
4. Angka Beranda, Penjualan, dan Keuangan konsisten untuk periode yang sama.
5. Peringatan stok menipis dan piutang tampil dengan data contoh.
6. Ekspor dan impor JSON memulihkan data secara utuh.
7. Semua halaman memiliki loading, empty, dan error state.
8. Tidak ada kunci rahasia, backend, atau pemanggilan jaringan ke layanan pihak ketiga selain Google Fonts dan tautan `wa.me`.

## 15. Asumsi & Pertanyaan Terbuka

1. Nama usaha, logo, dan nomor WhatsApp belum tersedia; memakai placeholder.
2. Daftar produk, harga, dan ukuran kemasan baku belum ada; memakai data fiktif sampai pemilik menetapkannya.
3. Waktu pasti masa panen dan masa kosong tambak (± 4 bulan) perlu dikonfirmasi dengan pemilik.
4. Warna tambahan (Deep Ink, Soft Sage, Soft Amber, Soft Rose) adalah usulan; boleh diganti selama kontras tetap terpenuhi.
