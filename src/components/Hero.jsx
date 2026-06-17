import Ornament from './Ornament.jsx'

function Hero() {
  return (
    <section className="section hero-section">
      <p className="hero-script">Wedding day</p>

      <h1 className="hero-names">
        <span className="hero-names-first">Андрій</span>
        <span className="hero-names-ta">та</span>
        <span className="hero-names-last">Антоніна</span>
      </h1>

      {/* Замініть src на своє фото */}
      <div className="hero-photo">
        <div className="hero-photo-placeholder">
          <span>Ваше фото</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
