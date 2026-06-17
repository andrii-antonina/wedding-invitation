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

function DecoCorner({ className }) {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main branch */}
      <path d="M 0 180 Q 40 120 90 90 Q 130 60 180 0"
            stroke="#C4A35A" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Leaves off main branch */}
      <path d="M 30 155 Q 10 130 20 110 Q 35 130 30 155Z" stroke="#C4A35A" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M 55 130 Q 30 115 35 95 Q 55 110 55 130Z" stroke="#C4A35A" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M 80 108 Q 58 95 62 75 Q 80 88 80 108Z" stroke="#C4A35A" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M 108 82 Q 88 65 95 46 Q 112 60 108 82Z" stroke="#C4A35A" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M 138 52 Q 120 35 128 16 Q 144 30 138 52Z" stroke="#C4A35A" strokeWidth="1" strokeLinejoin="round"/>
      {/* Small flower at top */}
      <circle cx="160" cy="18" r="3" stroke="#C4A35A" strokeWidth="1"/>
      <path d="M 160 11 Q 163 14 160 18 Q 157 14 160 11Z" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 167 18 Q 164 21 160 18 Q 164 15 167 18Z" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 160 25 Q 157 22 160 18 Q 163 22 160 25Z" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 153 18 Q 156 15 160 18 Q 156 21 153 18Z" stroke="#C4A35A" strokeWidth="0.9"/>
      {/* Small flower mid */}
      <circle cx="46" cy="140" r="2.5" stroke="#C4A35A" strokeWidth="1"/>
      <path d="M 46 134 Q 49 137 46 140 Q 43 137 46 134Z" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 52 140 Q 49 143 46 140 Q 49 137 52 140Z" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 46 146 Q 43 143 46 140 Q 49 143 46 146Z" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 40 140 Q 43 137 46 140 Q 43 143 40 140Z" stroke="#C4A35A" strokeWidth="0.9"/>
    </svg>
  )
}

function DressCode() {
  return (
    <section className="section dresscode-section">
      <DecoCorner className="dresscode-deco dresscode-deco--tl" />
      <DecoCorner className="dresscode-deco dresscode-deco--tr" />
      <DecoCorner className="dresscode-deco dresscode-deco--bl" />
      <DecoCorner className="dresscode-deco dresscode-deco--br" />
      <div className="section-inner">
        <Ornament />
        <h2 className="section-title">ДРЕСКОД</h2>
        <p className="dresscode-text">
          Ми будемо безмежно вдячні, якщо при виборі вбрання ви підтримаєте кольорову палітру нашого свята.
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
