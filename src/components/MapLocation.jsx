import Ornament from './Ornament.jsx'

function MapLocation() {
  const mapsUrl = 'https://maps.app.goo.gl/W5emPRZHiLDW5kLY7'

  return (
    <section className="section map-section">

      {/* Rings background */}
      <svg className="map-deco-rings" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="110" cy="80" r="68" stroke="#C4A35A" strokeWidth="1.2" opacity="0.25"/>
        <circle cx="190" cy="80" r="68" stroke="#C4A35A" strokeWidth="1.2" opacity="0.25"/>
      </svg>

      {/* Bottom-left branch */}
      <svg className="map-deco-branch map-deco-branch--left" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M60 155 Q55 120 40 95" stroke="#C4A35A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
        <path d="M40 95 Q20 75 10 50" stroke="#C4A35A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
        <path d="M40 95 Q55 78 65 60" stroke="#C4A35A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
        <ellipse cx="10" cy="48" rx="10" ry="6" transform="rotate(-30 10 48)" fill="#C4A35A" opacity="0.15"/>
        <ellipse cx="65" cy="58" rx="10" ry="6" transform="rotate(20 65 58)" fill="#C4A35A" opacity="0.15"/>
        <ellipse cx="28" cy="72" rx="9" ry="5" transform="rotate(-50 28 72)" fill="#C4A35A" opacity="0.15"/>
        <ellipse cx="52" cy="106" rx="9" ry="5" transform="rotate(10 52 106)" fill="#C4A35A" opacity="0.15"/>
      </svg>

      {/* Top-right branch */}
      <svg className="map-deco-branch map-deco-branch--right" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M60 5 Q65 40 80 65" stroke="#C4A35A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
        <path d="M80 65 Q100 85 110 110" stroke="#C4A35A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
        <path d="M80 65 Q65 82 55 100" stroke="#C4A35A" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
        <ellipse cx="110" cy="112" rx="10" ry="6" transform="rotate(30 110 112)" fill="#C4A35A" opacity="0.15"/>
        <ellipse cx="55" cy="102" rx="10" ry="6" transform="rotate(-20 55 102)" fill="#C4A35A" opacity="0.15"/>
        <ellipse cx="92" cy="88" rx="9" ry="5" transform="rotate(50 92 88)" fill="#C4A35A" opacity="0.15"/>
        <ellipse cx="68" cy="48" rx="9" ry="5" transform="rotate(-10 68 48)" fill="#C4A35A" opacity="0.15"/>
      </svg>

      <div className="section-inner">
        <Ornament />
        <h2 className="section-title">ЛОКАЦІЯ</h2>
        <div className="map-info">
          <p className="map-intro">Наше весілля відбудеться в ресторані «Маєток»</p>
          <div className="map-address">
            <span className="map-name">Ресторан «Маєток»</span>
            <span className="map-city">с. Городилець</span>
          </div>
          <a
            className="btn-dark btn-map"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            ПОБУДУВАТИ МАРШРУТ
          </a>
        </div>
      </div>
    </section>
  )
}

export default MapLocation
