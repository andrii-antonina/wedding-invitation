import { useRef, useEffect, useState } from 'react'
import Ornament from './Ornament.jsx'
import goldSrc from '../assets/gold.jpg'
import SwipeOutlinedIcon from '@mui/icons-material/SwipeOutlined'

const SIZE = 420
const BRUSH = 34

function heartPath(ctx, cx, cy, r) {
  ctx.beginPath()
  ctx.moveTo(cx, cy - r * 0.55)
  // right bump
  ctx.bezierCurveTo(cx + r * 0.45, cy - r,        cx + r,        cy - r * 0.75, cx + r,        cy - r * 0.2)
  // right side → round bottom
  ctx.bezierCurveTo(cx + r * 1.05, cy + r * 0.22, cx + r * 0.38, cy + r * 0.84, cx,            cy + r * 0.88)
  // round bottom → left side
  ctx.bezierCurveTo(cx - r * 0.38, cy + r * 0.84, cx - r * 1.05, cy + r * 0.22, cx - r,        cy - r * 0.2)
  // left bump
  ctx.bezierCurveTo(cx - r,        cy - r * 0.75, cx - r * 0.45, cy - r,        cx,            cy - r * 0.55)
  ctx.closePath()
}

export default function SaveTheDate() {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const [hinted, setHinted] = useState(false)
  const [cursorPos, setCursorPos] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2 + 8
    const r = SIZE * 0.44

    const img = new Image()
    img.src = goldSrc
    img.onload = () => {
      ctx.save()
      heartPath(ctx, cx, cy, r)
      ctx.clip()

      // Fill heart with gold.jpg, cover-style (center-crop)
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight)
      const iw = img.naturalWidth  * scale
      const ih = img.naturalHeight * scale
      const ix = (W - iw) / 2
      const iy = (H - ih) / 2
      ctx.drawImage(img, ix, iy, iw, ih)

      // Subtle edge vignette for depth
      const vignette = ctx.createRadialGradient(cx, cy - r * 0.1, r * 0.25, cx, cy, r * 1.08)
      vignette.addColorStop(0,   'rgba(0,0,0,0)')
      vignette.addColorStop(0.65,'rgba(0,0,0,0)')
      vignette.addColorStop(1,   'rgba(0,0,0,0.22)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, W, H)

      ctx.restore()
    }
  }, [])

  function getCSSPos(e) {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const src = e.touches ? e.touches[0] : e
    return { x: src.clientX - rect.left, y: src.clientY - rect.top }
  }

  function getCanvasXY(e) {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const sx = canvas.width / rect.width
    const sy = canvas.height / rect.height
    const src = e.touches ? e.touches[0] : e
    return {
      x: (src.clientX - rect.left) * sx,
      y: (src.clientY - rect.top) * sy,
    }
  }

  function scratch(e) {
    if (!drawing.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = getCanvasXY(e)
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, BRUSH, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalCompositeOperation = 'source-over'
    if (!hinted) setHinted(true)
  }

  const onStart = (e) => { e.preventDefault(); drawing.current = true;  setCursorPos(getCSSPos(e)); scratch(e) }
  const onMove  = (e) => { e.preventDefault(); setCursorPos(getCSSPos(e)); scratch(e) }
  const onEnd   = ()  => { drawing.current = false }
  const onLeave = ()  => { drawing.current = false; setCursorPos(null) }

  const ScratchCursor = ({ dark }) => (
    <SwipeOutlinedIcon
      sx={{ width: '35px', height: '35px', color: dark ? 'rgba(30,24,16,0.75)' : 'rgba(255,255,255,0.95)' }}
    />
  )

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

        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="save-date-canvas"
          onMouseDown={onStart}
          onMouseMove={onMove}
          onMouseUp={onEnd}
          onMouseLeave={onLeave}
          onTouchStart={onStart}
          onTouchMove={onMove}
          onTouchEnd={onEnd}
          style={{ touchAction: 'none', cursor: 'none' }}
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
