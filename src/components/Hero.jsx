function Rings() {
  return (
    <svg className="hero-rings" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left ring */}
      <circle cx="42" cy="30" r="24" stroke="#C4A35A" strokeWidth="4"/>
      <circle cx="42" cy="30" r="20" stroke="#C4A35A" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="42" cy="30" r="27.5" stroke="#C4A35A" strokeWidth="0.5" opacity="0.35"/>
      {/* Right ring */}
      <circle cx="78" cy="30" r="24" stroke="#C4A35A" strokeWidth="4"/>
      <circle cx="78" cy="30" r="20" stroke="#C4A35A" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="78" cy="30" r="27.5" stroke="#C4A35A" strokeWidth="0.5" opacity="0.35"/>
    </svg>
  )
}

function Hero() {
  return (
    <section className="section hero-section">
      <Rings />
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
