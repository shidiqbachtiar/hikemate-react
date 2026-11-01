import { useEffect, useState } from "react";

function HikingArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchArticles = async () => {
    setLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6"
      );

      // Memastikan response dari API berhasil
      if (!response.ok) {
        throw new Error("Gagal mengambil data artikel.");
      }

      const data = await response.json();

      setArticles(data);
    } catch (err) {
      setError(
        err.message || "Terjadi kesalahan saat mengambil data artikel."
      );
    } finally {
      setLoading(false);
    }
  };

  // Mengambil data ketika komponen pertama kali ditampilkan
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section className="articles-section">
      <div className="articles-header">
        <div>
          <p className="articles-subtitle">Jelajahi Informasi</p>
          <h2>Artikel Pendakian</h2>
          <p className="articles-description">
            Temukan berbagai artikel dan informasi untuk menemani
            kegiatan pendakianmu.
          </p>
        </div>
      </div>

      {/* Kondisi loading */}
      {loading && (
        <div className="articles-status">
          <div className="loading-spinner"></div>
          <p>Memuat artikel...</p>
        </div>
      )}

      {/* Kondisi error */}
      {!loading && error && (
        <div className="articles-error">
          <p className="error-title">Artikel gagal dimuat</p>
          <p>{error}</p>

          <button
            type="button"
            className="retry-button"
            onClick={fetchArticles}
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* Kondisi berhasil */}
      {!loading && !error && (
        <div className="articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.id}>
              <div className="article-card-content">
                <span className="article-label">Artikel</span>

                <h3>{article.title}</h3>

                <p>{article.body}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default HikingArticles;
