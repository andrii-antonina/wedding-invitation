import { useState, useCallback, useRef } from 'react'
import ScratchHeart from './ScratchHeart.jsx'
import SwipeOutlinedIcon from '@mui/icons-material/SwipeOutlined'
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined'

export default function Splash({ onOpen }) {
  const [started, setStarted] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [cursorPos, setCursorPos] = useState(null)
  const triggered = useRef(false)

  const handleProgress = useCallback((pct) => {
    if (pct > 0.80 && !triggered.current) {
      triggered.current = true
      setRevealed(true)
      setTimeout(() => {
        setExiting(true)
        setTimeout(onOpen, 900)
      }, 5000)
    }
  }, [onOpen])

  function handleTap() {
    if (!revealed || exiting) return
    setExiting(true)
    setTimeout(onOpen, 900)
  }

  return (
    <div className={`splash${exiting ? ' splash--exit' : ''}`} onClick={handleTap}>

      {/* Invitation text — visible through scratched areas */}
      <div className="splash-invite-text">
        <p className="splash-invite-label">Вас запрошено<br />на весілля</p>
        <div className="splash-invite-rule" />
        <p className="splash-invite-names">Андрій та Антоніна</p>
        <p className="splash-invite-date">13 вересня 2026</p>
      </div>

      <ScratchHeart
        className="splash-canvas"
        onScratchStart={() => setStarted(true)}
        onProgress={handleProgress}
        onCursorMove={setCursorPos}
        onCursorLeave={() => setCursorPos(null)}
      />

      {/* Custom cursor */}
      {!started && cursorPos && (
        <div className="save-date-cursor"
             style={{ left: cursorPos.x, top: cursorPos.y }}
             aria-hidden="true">
          <SwipeOutlinedIcon sx={{ width: '35px', height: '35px', color: 'rgba(255,255,255,0.95)' }} />
        </div>
      )}

      {revealed && (
        <p className="splash__prompt splash__prompt--tap">
          <AdsClickOutlinedIcon sx={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: '8px' }} />
          Натисніть на екран
        </p>
      )}

      {!started && !cursorPos && !revealed && (
        <p className="splash__prompt">
          <SwipeOutlinedIcon sx={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: '8px' }} />
          стирайте серце
        </p>
      )}
    </div>
  )
}
