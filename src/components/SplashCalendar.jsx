import { useState, useRef, useCallback } from 'react'

const MAX_DRAG = 200

export default function Splash({ onOpen }) {
  const [phase, setPhase] = useState('idle') // idle | drag | snap | tear | exit
  const [drag, setDrag] = useState(0)
  const startY = useRef(0)

  const triggerTear = useCallback(() => {
    setPhase('tear')
    setDrag(MAX_DRAG)
    setTimeout(() => setPhase('exit'), 1100)
    setTimeout(onOpen, 1700)
  }, [onOpen])

  function onPointerDown(e) {
    if (phase !== 'idle') return
    startY.current = e.clientY
    setPhase('drag')
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e) {
    if (phase !== 'drag') return
    const dy = Math.max(0, startY.current - e.clientY)
    const d = Math.min(dy, MAX_DRAG)
    setDrag(d)
    if (d >= MAX_DRAG) triggerTear()
  }

  function onPointerUp() {
    if (phase !== 'drag') return
    if (drag >= MAX_DRAG * 0.38) {
      triggerTear()
    } else {
      setPhase('snap')
      setDrag(0)
      setTimeout(() => setPhase('idle'), 400)
    }
  }

  const animated = phase === 'tear' || phase === 'snap' || phase === 'exit'
  const progress = drag / MAX_DRAG

  const frontStyle = {
    transform: `translateY(${-progress * 120}%) rotateZ(${-progress * 10}deg)`,
    transformOrigin: 'center bottom',
    transition: animated ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
  }

  return (
    <div
      className={`splash${phase === 'exit' ? ' splash--exit' : ''}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ touchAction: 'none' }}
    >
      <div className="cal">

        {/* Back page — revealed after tear */}
        <div className="cal-page cal-page--back">
          <p className="cal-back-invite">Вас запрошено<br />на весілля</p>
          <p className="cal-back-day">13</p>
          <p className="cal-back-month">вересня 2026</p>
          <p className="cal-back-names">Андрій та Антоніна</p>
        </div>

        {/* Front page — gets torn away */}
        <div className="cal-page cal-page--front" style={frontStyle}>
          <div className="cal-binding">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="cal-ring" />
            ))}
          </div>
          <div className="cal-front-body">
            <p className="cal-front-month">Вересень 2026</p>
            <div className="cal-front-names">
              <span className="cal-front-name">Андрій</span>
              <span className="cal-front-ta">та</span>
              <span className="cal-front-name">Антоніна</span>
            </div>
          </div>
          {/* Curled corner */}
          <div className="cal-curl" />
        </div>

      </div>

      {phase === 'idle' && (
        <p className="splash__prompt">↑&nbsp;&nbsp;потягніть щоб відірвати</p>
      )}
    </div>
  )
}
