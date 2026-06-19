import Ornament from './Ornament.jsx'

const swatches = [
  { color: '#0a0a0a', label: 'тільки джентльмени', border: false },
  { color: '#F4EFEB', label: null, border: true },
  { color: '#DDCFC2', label: null, border: false },
  { color: '#E8B0B4', label: null, border: false },
  { color: '#A29390', label: null, border: false },
  { color: '#7B5040', label: null, border: false },
  { color: '#737953', label: null, border: false },
]

/* Top-left — гілка виходить знизу-зліва, розгалужується вгору */
function DecoTL() {
  return (
    <svg width="220" height="230" viewBox="0 0 220 230" fill="none" className="dresscode-deco dresscode-deco--tl">
      {/* Основна гілка */}
      <path d="M 5 225 C 18 190 38 165 62 138 C 85 112 105 88 140 55 C 162 34 185 18 210 5"
            stroke="#C4A35A" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Бічна гілка вліво */}
      <path d="M 38 175 C 22 168 8 155 2 138"
            stroke="#C4A35A" strokeWidth="0.9" strokeLinecap="round"/>
      {/* Гілочка вправо від середини */}
      <path d="M 88 118 C 102 108 118 105 128 92"
            stroke="#C4A35A" strokeWidth="0.85" strokeLinecap="round"/>
      {/* Маленька гілочка вгору */}
      <path d="M 62 138 C 55 125 50 110 58 98"
            stroke="#C4A35A" strokeWidth="0.75" strokeLinecap="round"/>

      {/* Листок 1 — великий, нахилений */}
      <path d="M 20 205 C 5 188 2 168 18 158 C 28 172 28 192 20 205Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 20 205 C 35 190 38 170 18 158" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 2 */}
      <path d="M 48 165 C 30 150 28 132 44 124 C 54 138 52 155 48 165Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 48 165 C 62 148 60 130 44 124" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 3 — маленький, бічний */}
      <path d="M 32 162 C 18 155 14 142 24 136 C 32 146 32 156 32 162Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 4 */}
      <path d="M 75 128 C 58 115 56 98 70 90 C 80 103 78 118 75 128Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 75 128 C 88 112 86 96 70 90" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 5 — від бічної гілки */}
      <path d="M 58 98 C 44 88 44 74 56 68 C 64 78 62 90 58 98Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 6 */}
      <path d="M 112 72 C 96 60 96 44 110 38 C 118 50 116 63 112 72Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>
      <path d="M 112 72 C 124 58 122 42 110 38" stroke="#C4A35A" strokeWidth="0.65" fill="none"/>

      {/* Листок 7 — від правої гілочки */}
      <path d="M 128 92 C 118 80 120 66 130 62 C 136 72 134 84 128 92Z"
            stroke="#C4A35A" strokeWidth="0.8" fill="none"/>

      {/* Листок 8 — маленький вгорі */}
      <path d="M 155 42 C 142 32 142 18 154 14 C 160 24 158 35 155 42Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 9 */}
      <path d="M 175 28 C 164 18 165 5 176 2 C 180 12 178 22 175 28Z"
            stroke="#C4A35A" strokeWidth="0.8" fill="none"/>

      {/* Маленька квіточка */}
      <circle cx="196" cy="10" r="2.5" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 196 4 C 200 7 196 10 196 10 C 192 7 196 4 196 4Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 202 10 C 199 14 196 10 196 10 C 199 6 202 10 202 10Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 196 16 C 192 13 196 10 196 10 C 200 13 196 16 196 16Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 190 10 C 193 6 196 10 196 10 C 193 14 190 10 190 10Z" stroke="#C4A35A" strokeWidth="0.8"/>

      {/* Дрібні ягідки */}
      <circle cx="8" cy="145" r="2" stroke="#C4A35A" strokeWidth="0.8"/>
      <circle cx="4" cy="150" r="1.5" stroke="#C4A35A" strokeWidth="0.7"/>
      <path d="M 8 145 C 6 140 4 138 2 138" stroke="#C4A35A" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  )
}

/* Top-right — розлога вниз-вправо, асиметричні гілки */
function DecoTR() {
  return (
    <svg width="210" height="220" viewBox="0 0 210 220" fill="none" className="dresscode-deco dresscode-deco--tr">
      {/* Основна гілка */}
      <path d="M 205 215 C 188 178 165 152 138 122 C 112 94 85 70 55 45 C 36 28 18 15 2 5"
            stroke="#C4A35A" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Бічна гілка вправо */}
      <path d="M 160 148 C 178 138 195 122 205 105"
            stroke="#C4A35A" strokeWidth="0.9" strokeLinecap="round"/>
      {/* Гілочка вліво */}
      <path d="M 105 88 C 88 80 74 78 62 65"
            stroke="#C4A35A" strokeWidth="0.85" strokeLinecap="round"/>
      {/* Маленька гілочка вниз */}
      <path d="M 138 122 C 148 132 152 145 145 155"
            stroke="#C4A35A" strokeWidth="0.75" strokeLinecap="round"/>

      {/* Листок 1 */}
      <path d="M 190 195 C 205 178 208 160 194 150 C 184 164 184 182 190 195Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 190 195 C 175 180 172 162 194 150" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 2 */}
      <path d="M 162 162 C 175 148 176 130 162 122 C 152 136 153 153 162 162Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 162 162 C 148 146 148 128 162 122" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 3 — від бічної гілки */}
      <path d="M 145 155 C 155 165 155 178 145 182 C 137 172 138 160 145 155Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 4 */}
      <path d="M 135 108 C 148 95 148 78 134 70 C 124 83 126 98 135 108Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>

      {/* Листок 5 */}
      <path d="M 205 105 C 198 92 198 78 208 72 C 214 82 212 95 205 105Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 6 */}
      <path d="M 88 68 C 72 58 70 42 84 36 C 92 48 90 60 88 68Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>
      <path d="M 88 68 C 100 55 98 40 84 36" stroke="#C4A35A" strokeWidth="0.65" fill="none"/>

      {/* Листок 7 */}
      <path d="M 62 65 C 50 55 50 40 62 34 C 68 44 66 56 62 65Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 8 */}
      <path d="M 42 38 C 30 28 30 14 42 8 C 48 18 46 30 42 38Z"
            stroke="#C4A35A" strokeWidth="0.8" fill="none"/>
      <path d="M 42 38 C 52 26 50 12 42 8" stroke="#C4A35A" strokeWidth="0.65" fill="none"/>

      {/* Квіточка */}
      <circle cx="16" cy="10" r="2.5" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 16 4 C 20 7 16 10 16 10 C 12 7 16 4 16 4Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 22 10 C 19 14 16 10 16 10 C 19 6 22 10 22 10Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 16 16 C 12 13 16 10 16 10 C 20 13 16 16 16 16Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 10 10 C 13 6 16 10 16 10 C 13 14 10 10 10 10Z" stroke="#C4A35A" strokeWidth="0.8"/>

      {/* Ягідки */}
      <circle cx="200" cy="112" r="2" stroke="#C4A35A" strokeWidth="0.8"/>
      <circle cx="206" cy="116" r="1.5" stroke="#C4A35A" strokeWidth="0.7"/>
    </svg>
  )
}

/* Bottom-left — горизонтальніший ріст, гілки тягнуться вправо */
function DecosBL() {
  return (
    <svg width="225" height="210" viewBox="0 0 225 210" fill="none" className="dresscode-deco dresscode-deco--bl">
      {/* Основна гілка */}
      <path d="M 5 5 C 25 28 48 50 78 72 C 108 94 138 112 172 128 C 192 138 210 145 222 148"
            stroke="#C4A35A" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Бічна вгору */}
      <path d="M 55 58 C 48 42 45 25 52 12"
            stroke="#C4A35A" strokeWidth="0.9" strokeLinecap="round"/>
      {/* Бічна вниз */}
      <path d="M 112 88 C 118 105 115 122 105 132"
            stroke="#C4A35A" strokeWidth="0.85" strokeLinecap="round"/>
      {/* Гілочка вправо */}
      <path d="M 158 120 C 170 112 182 108 195 112"
            stroke="#C4A35A" strokeWidth="0.8" strokeLinecap="round"/>

      {/* Листок 1 */}
      <path d="M 22 28 C 8 16 5 0 18 -5 C 26 6 25 20 22 28Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>

      {/* Листок 2 */}
      <path d="M 52 12 C 40 2 40 -12 52 -16 C 58 -6 56 6 52 12Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>
      <path d="M 52 12 C 62 0 60 -14 52 -16" stroke="#C4A35A" strokeWidth="0.65" fill="none"/>

      {/* Листок 3 */}
      <path d="M 38 65 C 25 52 25 36 38 30 C 46 42 44 56 38 65Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 38 65 C 50 50 48 34 38 30" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 4 */}
      <path d="M 68 80 C 56 68 56 52 68 46 C 75 58 73 70 68 80Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>

      {/* Листок 5 — від гілки вниз */}
      <path d="M 105 132 C 95 142 82 145 75 138 C 82 126 96 125 105 132Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>

      {/* Листок 6 */}
      <path d="M 118 95 C 130 82 145 80 150 90 C 140 100 126 100 118 95Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>

      {/* Листок 7 */}
      <path d="M 148 115 C 138 102 138 86 150 80 C 158 92 156 106 148 115Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>

      {/* Листок 8 */}
      <path d="M 195 112 C 188 100 190 86 200 82 C 206 92 204 104 195 112Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 9 великий */}
      <path d="M 178 132 C 165 120 164 104 178 98 C 185 110 184 124 178 132Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 178 132 C 190 118 188 102 178 98" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Ягідки */}
      <circle cx="210" cy="148" r="2.2" stroke="#C4A35A" strokeWidth="0.85"/>
      <circle cx="216" cy="144" r="1.5" stroke="#C4A35A" strokeWidth="0.7"/>
      <circle cx="218" cy="152" r="1.8" stroke="#C4A35A" strokeWidth="0.7"/>
    </svg>
  )
}

/* Bottom-right — кучерявіша, гілки вгору-вліво */
function DecosBR() {
  return (
    <svg width="215" height="215" viewBox="0 0 215 215" fill="none" className="dresscode-deco dresscode-deco--br">
      {/* Основна гілка */}
      <path d="M 210 10 C 190 35 165 58 135 85 C 105 112 75 135 45 158 C 28 170 12 180 2 188"
            stroke="#C4A35A" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Бічна вправо-вгору */}
      <path d="M 165 55 C 178 42 192 35 205 38"
            stroke="#C4A35A" strokeWidth="0.9" strokeLinecap="round"/>
      {/* Бічна вліво */}
      <path d="M 100 112 C 85 120 70 118 58 128"
            stroke="#C4A35A" strokeWidth="0.85" strokeLinecap="round"/>
      {/* Гілочка вниз */}
      <path d="M 55 158 C 62 170 60 185 50 192"
            stroke="#C4A35A" strokeWidth="0.8" strokeLinecap="round"/>

      {/* Листок 1 */}
      <path d="M 192 22 C 202 10 215 8 218 18 C 208 26 196 26 192 22Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>

      {/* Листок 2 */}
      <path d="M 205 38 C 212 26 214 12 205 8 C 197 18 198 30 205 38Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>

      {/* Листок 3 */}
      <path d="M 178 48 C 188 35 188 18 176 14 C 168 26 170 40 178 48Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 178 48 C 166 34 166 18 176 14" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 4 */}
      <path d="M 148 72 C 158 58 158 42 146 38 C 138 50 140 64 148 72Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>

      {/* Листок 5 */}
      <path d="M 115 100 C 124 86 124 70 112 66 C 104 78 106 92 115 100Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>
      <path d="M 115 100 C 105 85 106 69 112 66" stroke="#C4A35A" strokeWidth="0.65" fill="none"/>

      {/* Листок 6 — від бічної */}
      <path d="M 58 128 C 46 118 44 104 56 98 C 64 108 62 120 58 128Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>

      {/* Листок 7 */}
      <path d="M 82 138 C 70 126 70 110 82 104 C 90 116 88 128 82 138Z"
            stroke="#C4A35A" strokeWidth="1" fill="none"/>
      <path d="M 82 138 C 92 124 90 108 82 104" stroke="#C4A35A" strokeWidth="0.7" fill="none"/>

      {/* Листок 8 */}
      <path d="M 42 165 C 30 154 30 138 42 132 C 49 143 48 156 42 165Z"
            stroke="#C4A35A" strokeWidth="0.9" fill="none"/>

      {/* Листок 9 — від гілочки вниз */}
      <path d="M 50 192 C 40 182 40 168 50 164 C 57 173 55 184 50 192Z"
            stroke="#C4A35A" strokeWidth="0.85" fill="none"/>
      <path d="M 50 192 C 60 180 58 166 50 164" stroke="#C4A35A" strokeWidth="0.65" fill="none"/>

      {/* Квіточка */}
      <circle cx="14" cy="184" r="2.5" stroke="#C4A35A" strokeWidth="0.9"/>
      <path d="M 14 178 C 18 181 14 184 14 184 C 10 181 14 178 14 178Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 20 184 C 17 188 14 184 14 184 C 17 180 20 184 20 184Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 14 190 C 10 187 14 184 14 184 C 18 187 14 190 14 190Z" stroke="#C4A35A" strokeWidth="0.8"/>
      <path d="M 8 184 C 11 180 14 184 14 184 C 11 188 8 184 8 184Z" stroke="#C4A35A" strokeWidth="0.8"/>

      {/* Ягідки */}
      <circle cx="28" cy="175" r="2" stroke="#C4A35A" strokeWidth="0.8"/>
      <circle cx="22" cy="178" r="1.5" stroke="#C4A35A" strokeWidth="0.7"/>
    </svg>
  )
}

function DressCode() {
  return (
    <section className="section dresscode-section">
      <DecoTR />
      <DecosBL />
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
