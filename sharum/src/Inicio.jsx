
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../mafe/Inicio.css'

export default function Inicio() {
  return (
    <div id="top">

      {/* ════════════ HEADER ════════════ */}
      <header className="inicio-header">
        <div className="logo-img">LOGO</div>
        <div className="nav-icons">
          <a href="#top" title="Inicio"><i className="bi bi-house-fill"></i></a>
          <a href="#featured" title="Destacado"><i className="bi bi-grid-fill"></i></a>
          <a href="#footer" title="Contacto"><i className="bi bi-person-circle"></i></a>
        </div>
      </header>

      <hr className="inicio-divider" />

      {/* ════════════ HERO ════════════ */}
      <section className="hero-section">
        <div className="hero-inner">

          {/* Imagen circular izquierda */}
          <div className="hero-circle-img">
            <i className="bi bi-image"></i>
          </div>

          {/* Centro: título + texto */}
          <div className="hero-center">
            <p className="hero-title">Huellas de<br />Ritmo</p>
            <p className="hero-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. La forma
              distinctiva de moverse de lorem —una fusión de danza altre con
              elementos del belly dance arabe— se convirtió en el arquetipo para
              isabel, quien lleva ese pasión y ritmo en cada paso, al igual que
              su ícono contemporáneo.
            </p>
          </div>

          {/* Playlist derecha */}
          <div className="playlist-col">
            <p className="playlist-label">Playlist</p>

            <div className="playlist-card">
              <div className="playlist-thumb">
                <i className="bi bi-image"></i>
              </div>
              <div className="playlist-info">
                <span className="playlist-song">Canción 1</span>
                <span className="playlist-sub">Lorem ipsum playlist</span>
              </div>
            </div>

            <div className="playlist-card">
              <div className="playlist-thumb">
                <i className="bi bi-image"></i>
              </div>
              <div className="playlist-info">
                <span className="playlist-song">Canción 2</span>
                <span className="playlist-sub">Lorem ipsum playlist</span>
              </div>
            </div>

            <div className="playlist-card">
              <div className="playlist-thumb">
                <i className="bi bi-image"></i>
              </div>
              <div className="playlist-info">
                <span className="playlist-song">Canción 3</span>
                <span className="playlist-sub">Lorem ipsum playlist</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="inicio-divider" />

      {/* ════════════ SECCIÓN IMAGEN DESTACADA ════════════ */}
      <section id="featured" className="featured-section">
        <div className="featured-overlay">
          <p className="featured-title">Huellas de Ritmo</p>
          <div className="featured-img-placeholder">
            <i className="bi bi-image"></i>
          </div>
          <button className="btn-iniciar">Iniciar</button>
        </div>
      </section>

      <hr className="inicio-divider" />

      {/* ════════════ FOOTER ════════════ */}
      <footer id="footer" className="inicio-footer">
        <div className="container">

          <div className="footer-top-row">
            <div className="footer-logo-img">LOGO</div>
            <div className="footer-line"></div>
            <a href="#top" className="footer-up-btn" title="Volver al inicio">
              <i className="bi bi-arrow-up"></i>
            </a>
          </div>

          <div className="footer-bottom-row">
            <p className="footer-rights">© 2025 Sharum. Todos los derechos reservados.</p>

            <div className="footer-right-col">
              <span className="siguenos-label">Síguenos</span>
              <div className="social-icons">
                <a href="#" title="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" title="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" title="X / Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" title="YouTube"><i className="bi bi-youtube"></i></a>
              </div>
              <a href="#" className="btn-contact">Contáctanos →</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}