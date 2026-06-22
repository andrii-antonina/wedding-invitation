import { useRef, useEffect } from 'react'
import goldSrc from '../assets/back2.jpg'

const SIZE = 420
const BRUSH = 34

function heartPath(ctx, cx, cy, r) {
  ctx.beginPath()
  ctx.moveTo(cx, cy - r * 0.55)
  ctx.bezierCurveTo(cx + r * 0.45, cy - r,        cx + r,        cy - r * 0.75, cx + r,        cy - r * 0.2)
  ctx.bezierCurveTo(cx + r * 1.05, cy + r * 0.22, cx + r * 0.38, cy + r * 0.84, cx,            cy + r * 0.88)
  ctx.bezierCurveTo(cx - r * 0.38, cy + r * 0.84, cx - r * 1.05, cy + r * 0.22, cx - r,        cy - r * 0.2)
  ctx.bezierCurveTo(cx - r,        cy - r * 0.75, cx - r * 0.45, cy - r,        cx,            cy - r * 0.55)
  ctx.closePath()
}

/**
 * ScratchHeart — gold canvas heart, scratch to reveal what's underneath.
 *
 * Props:
 *   onScratchStart       — called on first interaction
 *   onProgress(pct)      — called every 8 strokes with fraction scratched (0–1)
 *   onCursorMove({x, y}) — CSS position of pointer (for custom cursor)
 *   onCursorLeave        — pointer left the canvas
 *   className            — extra CSS class on the <canvas>
 */
export default function ScratchHeart({ onScratchStart, onProgress, onCursorMove, onCursorLeave, onReady, className = '' }) {
  const canvasRef   = useRef(null)
  const drawing     = useRef(false)
  const strokeCount = useRef(0)
  const initialOpaque = useRef(0)
  const hasStarted  = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2 + 8
    const r  = SIZE * 0.44

    // Fill background immediately so canvas is never transparent
    ctx.fillStyle = '#F5F0E8'
    ctx.fillRect(0, 0, W, H)
    onReady?.()

    const img = new Image()
    img.src = goldSrc
    img.onload = () => {
      // Redraw background + gold heart
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#F5F0E8'
      ctx.fillRect(0, 0, W, H)

      // Draw gold heart on top
      ctx.save()
      heartPath(ctx, cx, cy, r)
      ctx.clip()
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight)
      const iw = img.naturalWidth  * scale
      const ih = img.naturalHeight * scale
      ctx.drawImage(img, (W - iw) / 2, (H - ih) / 2, iw, ih)
      const vignette = ctx.createRadialGradient(cx, cy - r * 0.1, r * 0.25, cx, cy, r * 1.08)
      vignette.addColorStop(0,    'rgba(0,0,0,0)')
      vignette.addColorStop(0.65, 'rgba(0,0,0,0)')
      vignette.addColorStop(1,    'rgba(0,0,0,0.22)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, W, H)
      ctx.restore()

      // Heart area in pixels (used for progress %)
      initialOpaque.current = Math.PI * r * r
    }
  }, [])

  function getCSSPos(e) {
    const canvas = canvasRef.current
    const rect   = canvas.getBoundingClientRect()
    const src    = e.touches ? e.touches[0] : e
    return { x: src.clientX - rect.left, y: src.clientY - rect.top }
  }

  function getCanvasXY(e) {
    const canvas = canvasRef.current
    const rect   = canvas.getBoundingClientRect()
    const sx     = canvas.width  / rect.width
    const sy     = canvas.height / rect.height
    const src    = e.touches ? e.touches[0] : e
    return {
      x: (src.clientX - rect.left) * sx,
      y: (src.clientY - rect.top)  * sy,
    }
  }

  function scratch(e) {
    if (!drawing.current) return
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    const { x, y } = getCanvasXY(e)

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, BRUSH, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalCompositeOperation = 'source-over'

    if (!hasStarted.current) {
      hasStarted.current = true
      onScratchStart?.()
    }

    strokeCount.current++
    if (strokeCount.current % 8 === 0 && initialOpaque.current > 0) {
      const data = ctx.getImageData(0, 0, SIZE, SIZE).data
      let transparent = 0
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 10) transparent++
      }
      onProgress?.(transparent / initialOpaque.current)
    }
  }

  const onMouseDown = (e) => { drawing.current = true; onCursorMove?.(getCSSPos(e)); scratch(e) }
  const onMouseMove = (e) => { onCursorMove?.(getCSSPos(e)); scratch(e) }
  const onEnd       = ()  => { drawing.current = false; onCursorLeave?.() }

  // Touch events must be added manually with passive:false to allow preventDefault
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const onTouchStart = (e) => { e.preventDefault(); drawing.current = true; onCursorMove?.(getCSSPos(e)); scratch(e) }
    const onTouchMove  = (e) => { e.preventDefault(); onCursorMove?.(getCSSPos(e)); scratch(e) }
    const onTouchEnd   = ()  => { drawing.current = false; onCursorLeave?.() }

    canvas.addEventListener('touchstart', onTouchStart, { passive: false })
    canvas.addEventListener('touchmove',  onTouchMove,  { passive: false })
    canvas.addEventListener('touchend',   onTouchEnd,   { passive: false })

    return () => {
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove',  onTouchMove)
      canvas.removeEventListener('touchend',   onTouchEnd)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={SIZE}
      height={SIZE}
      className={`scratch-heart-canvas${className ? ` ${className}` : ''}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      style={{ touchAction: 'none', cursor: 'none' }}
    />
  )
}
