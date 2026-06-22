import { useState } from 'react'
import envelopeSrc from '../assets/envelope.png'
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined'

export default function Splash({ onOpen }) {
  const [exiting, setExiting] = useState(false)

  function handleTap() {
    if (exiting) return
    setExiting(true)
    setTimeout(onOpen, 900)
  }

  return (
    <div
      className={`splash${exiting ? ' splash--exit' : ''}`}
      onClick={handleTap}
      onTouchEnd={handleTap}
      style={{ touchAction: 'none', overscrollBehavior: 'none' }}
    >
      <div className="splash-envelope">
        <img src={envelopeSrc} alt="" draggable={false} />
      </div>

      <p className="splash__prompt">
        <AdsClickOutlinedIcon sx={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: '8px' }} />
        відкрийте конверт
      </p>
    </div>
  )
}
