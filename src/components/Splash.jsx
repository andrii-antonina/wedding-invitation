import { useState } from 'react'
import sealSrc from '../assets/seal.png'
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined'

export default function Splash({ onOpen }) {
  const [phase, setPhase] = useState('idle') // idle | opening | exiting

  function handleClick() {
    if (phase !== 'idle') return
    setPhase('opening')
    setTimeout(() => {
      setPhase('exiting')
      setTimeout(onOpen, 900)
    }, 1400)
  }

  const opened = phase === 'opening' || phase === 'exiting'

  return (
    <div
      className={`splash${phase === 'exiting' ? ' splash--exit' : ''}`}
      onClick={handleClick}
      style={{ touchAction: 'none', overscrollBehavior: 'none' }}
    >
      <div className="css-env-wrap">
        <div className="css-env">

          {/* Static body + left/right panels */}
          <svg className="css-env-svg" viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="240" rx="3" fill="#EDE8DB"/>
            <polygon points="0,0 0,240 180,120" fill="rgba(0,0,0,0.02)"/>
            <polygon points="360,0 360,240 180,120" fill="rgba(0,0,0,0.015)"/>
            <line x1="0"   y1="0"   x2="180" y2="120" stroke="rgba(0,0,0,0.08)" strokeWidth="0.7"/>
            <line x1="360" y1="0"   x2="180" y2="120" stroke="rgba(0,0,0,0.08)" strokeWidth="0.7"/>
          </svg>

          {/* Bottom flap — separate element so drop-shadow falls onto left/right panels */}
          <div className="css-env-bottom">
            <svg viewBox="0 0 360 122" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: 'auto' }}>
              <defs>
                <linearGradient id="bottomGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#EDE8DB"/>
                  <stop offset="100%" stopColor="#E4DDD0"/>
                </linearGradient>
                <filter id="bottomShadow" x="-5%" y="-20%" width="110%" height="130%">
                  <feDropShadow dx="0" dy="-8" stdDeviation="3" floodColor="rgba(80,55,20,0.09)"/>
                </filter>
              </defs>
              <polygon points="0,122 360,122 180,0" fill="url(#bottomGrad)" filter="url(#bottomShadow)"/>
              <line x1="0"   y1="122" x2="180" y2="0" stroke="rgba(0,0,0,0.13)" strokeWidth="1.1"/>
              <line x1="360" y1="122" x2="180" y2="0" stroke="rgba(0,0,0,0.13)" strokeWidth="1.1"/>
              <line x1="2"   y1="122" x2="180" y2="2"  stroke="rgba(255,255,255,0.30)" strokeWidth="1"/>
              <line x1="358" y1="122" x2="180" y2="2"  stroke="rgba(255,255,255,0.30)" strokeWidth="1"/>
            </svg>
          </div>

          {/* Animated top flap */}
          <div className={`css-env-flap${opened ? ' css-env-flap--open' : ''}`}>
            <svg viewBox="0 0 360 156" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: 'auto' }}>
              <defs>
                <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5F0E4"/>
                  <stop offset="100%" stopColor="#E0D9CC"/>
                </linearGradient>
                <filter id="flapShadow" x="-5%" y="-5%" width="110%" height="115%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(80,55,20,0.22)"/>
                </filter>
              </defs>
              <polygon points="0,0 360,0 180,156" fill="url(#flapGrad)" filter="url(#flapShadow)"/>
              <line x1="0"   y1="0" x2="180" y2="156" stroke="rgba(0,0,0,0.14)" strokeWidth="1.2"/>
              <line x1="360" y1="0" x2="180" y2="156" stroke="rgba(0,0,0,0.14)" strokeWidth="1.2"/>
              <line x1="2"   y1="0" x2="180" y2="154" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
              <line x1="358" y1="0" x2="180" y2="154" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
            </svg>
          </div>

          {/* Wax seal */}
          <img
            className={`css-env-seal${opened ? ' css-env-seal--gone' : ''}`}
            src={sealSrc}
            alt=""
            draggable={false}
          />
        </div>
      </div>

      {phase === 'idle' && (
        <p className="splash__prompt">
          <AdsClickOutlinedIcon sx={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: '8px' }} />
          відкрийте конверт
        </p>
      )}
    </div>
  )
}
