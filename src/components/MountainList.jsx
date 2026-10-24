import MountainCard from "./MountainCard.jsx";

export default function MountainList({ gunung, onHapus }) {
  if (gunung.length === 0) {
    return <p className="empty-state">Belum ada data gunung yang cocok. Coba kata kunci lain atau tambahkan data gunung baru.</p>;
  }

  return (
    <div className="mountain-grid">
      {gunung.map((item) => (
        <MountainCard key={item.id} gunung={item} onHapus={onHapus} />
      ))}
    </div>
  );
}