# HikeMate — React Dasar (Pekan 6)

Project ini merupakan pengembangan HikeMate dari HTML/CSS/JavaScript pada tugas sebelumnya menjadi React + Vite.

## Cara menjalankan
1. Install Node.js versi LTS jika belum tersedia.
2. Ekstrak ZIP, lalu buka folder `HikeMate-React-Pekan6` di VS Code.
3. Buka terminal di folder project.
4. Jalankan `npm install`.
5. Jalankan `npm run dev`.
6. Buka alamat yang ditampilkan Vite (umumnya `http://localhost:5173`).

## Fitur Pekan 6
- Minimal lima component terpisah di `src/components/`.
- Data gunung disimpan dalam array state di `App.jsx`.
- Render list menggunakan `.map()` dan `key` unik.
- Form controlled component untuk menambah gunung.
- Conditional rendering saat data hasil pencarian kosong.
- Pencarian berdasarkan nama atau lokasi.
- Penghapusan item dari state.
- Tampilan responsif dengan CSS.

## Component
- `AppHeader.jsx`: identitas aplikasi dan navigasi.
- `HeroSection.jsx`: pengenalan HikeMate.
- `SummaryCard.jsx`: jumlah data gunung.
- `MountainList.jsx`: daftar gunung dan conditional rendering.
- `MountainCard.jsx`: kartu setiap gunung.
- `MountainForm.jsx`: form controlled untuk menambah data.

## Catatan
Data masih disimpan sementara di React state, belum disimpan ke backend/database. Perubahan akan kembali ke data awal saat halaman dimuat ulang. Project ini belum terhubung ke repository GitHub; hubungkan ke repository milikmu dan lakukan commit/push sesuai instruksi dosen.
