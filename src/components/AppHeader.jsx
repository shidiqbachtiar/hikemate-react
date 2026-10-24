export default function AppHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#beranda" aria-label="HikeMate beranda">
          <span className="brand-mark" aria-hidden="true">▲</span>
          <span>HikeMate</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#beranda">Beranda</a>
          <a href="#daftar-gunung">Daftar Gunung</a>
          <a href="#tambah-gunung">Tambah Gunung</a>
        </nav>
      </div>
    </header>
  );
}