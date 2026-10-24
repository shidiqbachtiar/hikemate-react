import { useState } from "react";

const formAwal = { nama: "", lokasi: "", ketinggian: "", deskripsi: "" };

export default function MountainForm({ onTambah }) {
  const [form, setForm] = useState(formAwal);
  const [pesan, setPesan] = useState("");

  function ubahInput(event) {
    const { name, value } = event.target;
    setForm((formSebelumnya) => ({ ...formSebelumnya, [name]: value }));
    setPesan("");
  }

  function kirimForm(event) {
    event.preventDefault();
    const ketinggian = Number(form.ketinggian);
    if (!form.nama.trim() || !form.lokasi.trim() || !Number.isFinite(ketinggian) || ketinggian <= 0) {
      setPesan("Lengkapi nama, lokasi, dan ketinggian dengan benar.");
      return;
    }
    onTambah({
      nama: form.nama.trim(),
      lokasi: form.lokasi.trim(),
      ketinggian,
      deskripsi: form.deskripsi.trim() || "Informasi tambahan belum tersedia.",
    });
    setForm(formAwal);
    setPesan("Data gunung berhasil ditambahkan.");
  }

  return (
    <section className="panel form-panel" id="tambah-gunung">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Perbarui koleksi</p>
          <h2>Tambah Gunung</h2>
          <p className="muted">Tambahkan destinasi baru ke daftar HikeMate.</p>
        </div>
        <span className="form-badge">Formulir data</span>
      </div>
      <form className="mountain-form" onSubmit={kirimForm}>
        <label>
          Nama gunung
          <input name="nama" value={form.nama} onChange={ubahInput} placeholder="Contoh: Gunung Cikuray" required />
        </label>
        <label>
          Lokasi
          <input name="lokasi" value={form.lokasi} onChange={ubahInput} placeholder="Contoh: Garut, Jawa Barat" required />
        </label>
        <label>
          Ketinggian (mdpl)
          <input name="ketinggian" type="number" min="1" value={form.ketinggian} onChange={ubahInput} placeholder="Contoh: 2821" required />
        </label>
        <label className="full-width">
          Deskripsi singkat
          <textarea name="deskripsi" value={form.deskripsi} onChange={ubahInput} rows="3" placeholder="Ceritakan ciri khas gunung (opsional)" />
        </label>
        <div className="form-actions full-width">
          <p className={pesan.startsWith("Data") ? "form-message success" : "form-message"} role="status">{pesan}</p>
          <button className="button button-primary" type="submit">+ Tambah gunung</button>
        </div>
      </form>
      <p className="form-footnote">Catatan: data disimpan sementara di state React dan akan kembali ke data awal saat halaman dimuat ulang.</p>
    </section>
  );
}