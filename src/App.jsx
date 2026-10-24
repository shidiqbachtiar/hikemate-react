import { useMemo, useState } from "react";
import AppHeader from "./components/AppHeader.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MountainForm from "./components/MountainForm.jsx";
import MountainList from "./components/MountainList.jsx";
import SummaryCard from "./components/SummaryCard.jsx";

const dataGunungAwal = [
  { id: 1, nama: "Gunung Gede", lokasi: "Cianjur, Jawa Barat", ketinggian: 2958, deskripsi: "Jalur pendakian populer dengan ekosistem hutan pegunungan dan alun-alun Suryakencana." },
  { id: 2, nama: "Gunung Pangrango", lokasi: "Cianjur, Jawa Barat", ketinggian: 3019, deskripsi: "Gunung dengan kawasan hutan yang kaya keanekaragaman hayati dan Lembah Mandalawangi." },
  { id: 3, nama: "Gunung Papandayan", lokasi: "Garut, Jawa Barat", ketinggian: 2665, deskripsi: "Dikenal dengan kawah, Hutan Mati, dan padang edelweiss Tegal Alun." },
];

export default function App() {
  const [daftarGunung, setDaftarGunung] = useState(dataGunungAwal);
  const [kataKunci, setKataKunci] = useState("");

  const gunungTerfilter = useMemo(() => {
    const kata = kataKunci.trim().toLowerCase();
    if (!kata) return daftarGunung;
    return daftarGunung.filter((gunung) =>
      `${gunung.nama} ${gunung.lokasi}`.toLowerCase().includes(kata)
    );
  }, [daftarGunung, kataKunci]);

  function tambahGunung(gunungBaru) {
    setDaftarGunung((dataSaatIni) => [
      ...dataSaatIni,
      { ...gunungBaru, id: Date.now() },
    ]);
  }

  function hapusGunung(id) {
    setDaftarGunung((dataSaatIni) => dataSaatIni.filter((gunung) => gunung.id !== id));
  }

  return (
    <>
      <AppHeader />
      <main className="container">
        <HeroSection />
        <SummaryCard jumlah={daftarGunung.length} />
        <section className="panel" aria-labelledby="daftar-gunung-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Jelajahi destinasi</p>
              <h2 id="daftar-gunung-heading">Daftar Gunung</h2>
              <p className="muted">Cari gunung berdasarkan nama atau lokasi.</p>
            </div>
            <label className="search-field">
              <span className="sr-only">Cari gunung</span>
              <input
                type="search"
                value={kataKunci}
                onChange={(event) => setKataKunci(event.target.value)}
                placeholder="Contoh: Gede atau Garut"
              />
            </label>
          </div>
          <MountainList gunung={gunungTerfilter} onHapus={hapusGunung} />
        </section>
        <MountainForm onTambah={tambahGunung} />
        <footer className="footer">
          <span>© 2026 HikeMate</span>
          <span>Sistem Informasi Pendakian dan Kegiatan Pencinta Alam</span>
        </footer>
      </main>
    </>
  );
}