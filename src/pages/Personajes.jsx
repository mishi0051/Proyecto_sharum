import './Personajes.css'
export default function Personajes() {

  return (
    <div id="top">

    
      <header className="shakira-header">
   
        <div className="logo-img">LOGO</div>

        <div className="nav-icons">
          <a href="#top" title="Inicio"><i className="bi bi-house-fill"></i></a>
          <a href="#personajes" title="Personajes"><i className="bi bi-grid-fill"></i></a>
          <a href="#footer" title="Contacto"><i className="bi bi-person-circle"></i></a>
        </div>
      </header>

      <hr className="shakira-divider" />

      <section className="sobre-shakira-section">
        <div className="container">
          <p className="section-title">Sobre Shakira</p>


          <div className="shakira-main-img">
            <i className="bi bi-image"></i>
          </div>

          <p className="shakira-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. La forma distinctiva de
            moverse de lorem —una fusión de danza altre con elementos del belly dance arabe—
            se convirtió en el arquetipo para isabel, quien lleva ese pasión y ritmo en cada
            paso, al igual que su ícono contemporáneo. Lorem ipsum ha logrado trascendentalmente
            con sus movimientos únicos, que expresan alegría, identidad y cultura.
          </p>
        </div>
      </section>

      <hr className="shakira-divider" />

 
      <section id="personajes" className="personajes-section">
        <div className="container">
          <p className="section-title">Personajes</p>

          <div className="d-flex align-items-center justify-content-center gap-3">


            <button className="carousel-arrow">
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className="row g-4 flex-grow-1">
              <div className="col-4">
                <div className="personaje-card">
                  <p className="card-label">Oscuridad</p>
                  <div className="personaje-img">
                    <i className="bi bi-image"></i>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="personaje-card">
                  <p className="card-label">Shakira</p>
                  <div className="personaje-img">
                    <i className="bi bi-image"></i>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="personaje-card">
                  <p className="card-label">Lobo</p>
                  <div className="personaje-img">
                    <i className="bi bi-image"></i>
                  </div>
                </div>
              </div>
            </div>

 
            <button className="carousel-arrow">
              <i className="bi bi-chevron-right"></i>
            </button>

          </div>
        </div>
      </section>

      <hr className="shakira-divider" />


      <footer id="footer" className="shakira-footer">
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