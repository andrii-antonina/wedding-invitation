import Ornament from './Ornament.jsx'

const swatches = [
  { color: '#0a0a0a', label: 'тільки джентльмени', border: false },
  { color: '#F5F0E8', label: null, border: true },
  { color: '#D4C4A8', label: null, border: false },
  { color: '#E8B0B4', label: null, border: false },
  { color: '#9B8F98', label: null, border: false },
  { color: '#8B5B4A', label: null, border: false },
  { color: '#6B7B4A', label: null, border: false },
]

function DressCode() {
  return (
    <section className="section dresscode-section">
      <div className="section-inner">
        <Ornament />
        <h2 className="section-title">ДРЕСКОД</h2>
        <p className="dresscode-text">
          Ми будемо безмежно вдячні, якщо при виборі вбрання ви підтримаєте кольорову палтіру нашого свята.
        </p>
        <div className="swatches">
          {swatches.map((s, i) => (
            <div className="swatch-wrapper" key={i}>
              <div
                className="swatch"
                style={{
                  backgroundColor: s.color,
                  border: s.border ? '1px solid #C8C4BC' : 'none',
                }}
              />
              {s.label && <span className="swatch-label">{s.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DressCode
