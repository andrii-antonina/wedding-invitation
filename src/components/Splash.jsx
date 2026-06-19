import { useState } from 'react'
import sealImg from '../assets/seal.webp'

export default function Splash({ onOpen }) {
  const [pressed, setPressed] = useState(false)

  const handleClick = () => {
    if (pressed) return
    setPressed(true)
    setTimeout(onOpen, 1100)
  }

  return (
    <div
      className={`splash${pressed ? ' splash--opening' : ''}`}
      onClick={handleClick}
    >
      <svg className="splash-envelope-svg" viewBox="0 0 866 1018" preserveAspectRatio="none">
      </svg>

      {/* Top flap — animated on open */}
      <div className={`splash-flap-top${pressed ? ' splash-flap-top--open' : ''}`} />
      {/* Bottom flap — animated on open */}
      <div className={`splash-flap-bottom${pressed ? ' splash-flap-bottom--open' : ''}`} />

      <div className="splash-content">
        <p className="splash-invite">
          Запрошення<br />на весілля
        </p>

        <div className="splash-seal-btn">
          <img src={sealImg} alt="Печатка" className="splash-seal-img" />
        </div>

        <div className="splash-names">
          <span className="splash-name">Андрій</span>
          <span className="splash-ta">та</span>
          <span className="splash-name">Антоніна</span>
        </div>
      </div>
    </div>
  )
}
