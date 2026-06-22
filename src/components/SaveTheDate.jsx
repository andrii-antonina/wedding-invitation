import { useState } from 'react'
import Ornament from './Ornament.jsx'
import ScratchHeart from './ScratchHeart.jsx'
import SwipeOutlinedIcon from '@mui/icons-material/SwipeOutlined'

const ScratchCursor = ({ dark }) => (
  <SwipeOutlinedIcon
    sx={{ width: '35px', height: '35px', color: dark ? 'rgba(30,24,16,0.75)' : 'rgba(255,255,255,0.95)' }}
  />
)

export default function SaveTheDate() {
  const [hinted, setHinted] = useState(false)
  const [cursorPos, setCursorPos] = useState(null)

  return (
    <section className="section save-date-section">
      <Ornament />
      <p className="save-date-label">Збережіть цю дату</p>
      <div className="save-date-wrap">
        <div className="save-date-text" aria-hidden="true">
          <span className="save-date-day">13</span>
          <span className="save-date-month">Вересня</span>
          <span className="save-date-year-text">2026</span>
        </div>

        <ScratchHeart
          className="save-date-canvas"
          onScratchStart={() => setHinted(true)}
          onCursorMove={setCursorPos}
          onCursorLeave={() => setCursorPos(null)}
        />

        {!hinted && cursorPos && (
          <div className="save-date-cursor"
               style={{ left: cursorPos.x, top: cursorPos.y }}
               aria-hidden="true">
            <ScratchCursor dark={false} />
          </div>
        )}

        {!hinted && !cursorPos && (
          <div className="save-date-hint" aria-hidden="true">
            <ScratchCursor dark={true} />
          </div>
        )}
      </div>
    </section>
  )
}
