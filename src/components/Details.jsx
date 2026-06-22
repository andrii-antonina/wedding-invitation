import Ornament from './Ornament.jsx'

function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="40"
      viewBox="0 0 52 40"
      fill="none"
    >
      <rect x="1" y="1" width="50" height="38" rx="2" stroke="#C4A35A" strokeWidth="1.5" />
      <polyline
        points="1,1 26,22 51,1"
        stroke="#C4A35A"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="1" y1="39" x2="18" y2="22" stroke="#C4A35A" strokeWidth="1.5" />
      <line x1="51" y1="39" x2="34" y2="22" stroke="#C4A35A" strokeWidth="1.5" />
    </svg>
  )
}

function BottleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="56"
      viewBox="0 0 32 56"
      fill="none"
    >
      <path
        d="M12 1 h8 v7 l4 6 v34 a4 4 0 0 1 -4 4 H12 a4 4 0 0 1 -4 -4 V14 l4 -6 V1 z"
        stroke="#C4A35A"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="8" y1="20" x2="24" y2="20" stroke="#C4A35A" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="12" y1="1" x2="20" y2="1" stroke="#C4A35A" strokeWidth="1.5" />
    </svg>
  )
}

function Details() {
  return (
    <section className="section details-section">
      <div className="section-inner">
        <Ornament />
        <h2 className="section-title">ПОБАЖАННЯ</h2>
        <div className="details-cards">
          <div className="details-card">
            <div className="details-card-icon">
              <EnvelopeIcon />
            </div>
            <div className="details-card-title">Подарунки</div>
            <p className="details-card-text">
              Будемо щиро вдячні за ваші подарунки в конвертах.
            </p>
          </div>
          <div className="details-card">
            <div className="details-card-icon">
              <BottleIcon />
            </div>
            <div className="details-card-title">Замість квітів</div>
            <p className="details-card-text">
              Замість традиційних букетів ви можете обрати для нас пляшку вашого улюбленого
              алкоголю.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
