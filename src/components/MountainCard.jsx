export default function MountainCard({ gunung, onHapus }) {
  return (
    <article className="mountain-card">
      <div className="card-landscape" aria-hidden="true">
        <span className="landscape-sun" />
        <span className="landscape-peak peak-one" />
        <span className="landscape-peak peak-two" />
        <span className="landscape-line" />
        <span className="landscape-number">{String(gunung.id).padStart(2, "0")}</span>
      </div>
      <div className="card-body">
        <div className="card-topline">
          <span className="location-tag">⌖ {gunung.lokasi}</span>
          <span className="height-tag">{gunung.ketinggian.toLocaleString("id-ID")} mdpl</span>
        </div>
        <h3>{gunung.nama}</h3>
        <p>{gunung.deskripsi}</p>
        <button className="text-button" type="button" onClick={() => onHapus(gunung.id)}>
          Hapus dari daftar <span aria-hidden="true">×</span>
        </button>
      </div>
    </article>
  );
}