export default function HeroSection() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-copy">
        <p className="eyebrow light">Temukan perjalananmu berikutnya</p>
        <h1>Jelajahi Alam<br /><span>Bersama HikeMate.</span></h1>
        <p className="hero-description">
          Temukan informasi gunung, kenali karakteristik jalur, dan rencanakan
          petualanganmu dengan lebih mudah.
        </p>
        <a className="button button-light" href="#daftar-gunung">Jelajahi daftar gunung <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="sun" />
        <div className="mountain mountain-back" />
        <div className="mountain mountain-front" />
        <div className="hero-art-label"><span>01</span><span>Langkah kecil, petualangan besar.</span></div>
      </div>
    </section>
  );
}