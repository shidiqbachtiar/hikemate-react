export default function SummaryCard({ jumlah }) {
  return (
    <section className="summary-card" aria-live="polite">
      <div className="summary-icon" aria-hidden="true">⌁</div>
      <div>
        <p className="summary-label">Destinasi tersimpan</p>
        <p className="summary-number">{jumlah} <span>gunung</span></p>
      </div>
      <p className="summary-note">Data contoh untuk eksplorasi pendakian di Indonesia.</p>
    </section>
  );
}