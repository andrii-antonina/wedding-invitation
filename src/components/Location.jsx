import Ornament from './Ornament.jsx'

function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="3.5" width="15" height="14" rx="1" stroke="#C4A35A" strokeWidth="1.2"/>
      <line x1="2.5" y1="7.5" x2="17.5" y2="7.5" stroke="#C4A35A" strokeWidth="1.2"/>
      <line x1="6.5" y1="1.5" x2="6.5" y2="5.5" stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="13.5" y1="1.5" x2="13.5" y2="5.5" stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="5.5" y="10" width="2" height="2" rx="0.3" fill="#C4A35A"/>
      <rect x="9" y="10" width="2" height="2" rx="0.3" fill="#C4A35A"/>
      <rect x="12.5" y="10" width="2" height="2" rx="0.3" fill="#C4A35A"/>
      <rect x="5.5" y="13.5" width="2" height="2" rx="0.3" fill="#C4A35A"/>
      <rect x="9" y="13.5" width="2" height="2" rx="0.3" fill="#C4A35A"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="#C4A35A" strokeWidth="1.2"/>
      <line x1="10" y1="5.5" x2="10" y2="10" stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="10" y1="10" x2="13" y2="12.5" stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="1" fill="#C4A35A"/>
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="14" height="12" rx="0.5" stroke="#C4A35A" strokeWidth="1.2"/>
      <path d="M3 8h14" stroke="#C4A35A" strokeWidth="1.2"/>
      <path d="M7 17v-5h6v5" stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="6" y1="5" x2="10" y2="2" stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="14" y1="5" x2="10" y2="2" stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

function Location() {
  return (
    <section className="section location-section">
      <div className="section-inner">
        <Ornament />
        <h2 className="section-title">ДЕ ТА КОЛИ?</h2>
        <div className="location-columns">
          <div className="location-card">
            <div className="location-card-title">Локація святкування</div>
            <div className="location-info-row">
              <span className="location-info-icon"><IconCalendar /></span>
              <div className="location-info-content">
                <span className="location-info-label">Дата весілля</span>
                <span className="location-info-text">13 вересня 2026 року</span>
              </div>
            </div>
            <div className="location-info-row">
              <span className="location-info-icon"><IconClock /></span>
              <div className="location-info-content">
                <span className="location-info-label">Час збору гостей</span>
                <span className="location-info-text">Початок святкування о 13:00</span>
              </div>
            </div>
            <div className="location-info-row">
              <span className="location-info-icon"><IconBuilding /></span>
              <div className="location-info-content">
                <span className="location-info-label">Ресторан</span>
                <span className="location-info-text">Ресторан «Маєток»</span>
              </div>
            </div>
          </div>
          <div className="location-right">
            <p className="location-text">
              Цей вересневий день стане точкою відліку нашої нової сімейної
              історії. Ми будемо щиро раді розділити ці незабутні хвилини
              радості, затишку та щирості разом з вами.
            </p>
            <a
              className="btn-dark"
              href="https://maps.google.com/?q=Ресторан+Маєток"
              target="_blank"
              rel="noopener noreferrer"
            >
              КАРТА ПРОЇЗДУ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
