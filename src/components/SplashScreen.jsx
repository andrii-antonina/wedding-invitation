import { useState } from 'react'
import './SplashScreen.css'

function SplashScreen({ onDismiss }) {
  const [opening, setOpening] = useState(false)

  function handleClick() {
    if (opening) return
    setOpening(true)
    setTimeout(onDismiss, 2000)
  }

  return (
    <div
      className={`splash${opening ? ' splash--exit' : ''}`}
      onClick={handleClick}
    >
      <div className={`envelope${opening ? ' envelope--open' : ''}`}>

        {/* Letter that rises out */}
        <div className="envelope__letter">
          <p className="envelope__names">Вас запрошено<br />на весілля</p>
        </div>

        {/* Static fold triangles */}
        <div className="envelope__fold-left" />
        <div className="envelope__fold-right" />
        <div className="envelope__fold-bottom" />

        {/* Animated top flap */}
        <div className="envelope__flap" />

        {/* Wax seal heart */}
        <div className="envelope__seal">
          <svg viewBox="0 0 32 30" fill="none" aria-hidden="true">
            <path d="M16 28C16 28 1 18.5 1 9.5a9 9 0 0 1 15-6.7A9 9 0 0 1 31 9.5C31 18.5 16 28 16 28z" fill="#c0392b"/>
          </svg>
        </div>

      </div>

      {!opening && <p className="splash__prompt">Натисніть щоб відкрити</p>}
    </div>
  )
}

export default SplashScreen
