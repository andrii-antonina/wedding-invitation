import Ornament from './Ornament.jsx'

function Location() {
  const mapsUrl = 'https://maps.app.goo.gl/W5emPRZHiLDW5kLY7'

  return (
    <section className="section loc-section">
      <div className="section-inner">
        <Ornament />
        <h2 className="section-title">ДЕ ТА КОЛИ</h2>

        <div className="loc-card">
          {/* Corner decorations */}
          <span className="loc-corner loc-corner--tl" />
          <span className="loc-corner loc-corner--tr" />
          <span className="loc-corner loc-corner--bl" />
          <span className="loc-corner loc-corner--br" />

          <div className="loc-details">
            <div className="loc-detail-item">
              <span className="loc-detail-key">дата</span>
              <span className="loc-detail-value">13 вересня 2026</span>
            </div>
          </div>

          <div className="loc-rule" />

          <p className="loc-label">місце святкування</p>

          <h3 className="loc-venue-name">Ресторан «Маєток»</h3>

          <div className="loc-rule" />

          <p className="loc-quote">
            Цей вересневий день стане точкою відліку нашої нової сімейної
            історії. Ми будемо щиро раді розділити ці незабутні хвилини
            радості та щирості разом з вами.
          </p>

          <a
            className="loc-map-btn"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            КАРТА ПРОЇЗДУ
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
