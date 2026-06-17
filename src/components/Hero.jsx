import { useState, useEffect } from 'react'
import Ornament from './Ornament.jsx'

const WEDDING_DATE = new Date('2026-09-13T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return { days, hours, minutes }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section hero-section">
      <Ornament />
      <p className="hero-label">Запрошення на весілля</p>
      <h1 className="hero-names">
        <span>Андрій</span>
        <span className="ampersand"> &amp; </span>
        <span>Антоніна</span>
      </h1>
      <p className="hero-date">13 ВЕРЕСНЯ 2026</p>
      <p className="hero-venue">РЕСТОРАН &laquo;МАЄТОК&raquo;</p>
      <div className="hero-divider" />
      <div className="countdown">
        <div className="countdown-box">
          <span className="countdown-number">{pad(timeLeft.days)}</span>
          <span className="countdown-label">ДНІВ</span>
        </div>
        <span className="countdown-sep">·</span>
        <div className="countdown-box">
          <span className="countdown-number">{pad(timeLeft.hours)}</span>
          <span className="countdown-label">ГОДИН</span>
        </div>
        <span className="countdown-sep">·</span>
        <div className="countdown-box">
          <span className="countdown-number">{pad(timeLeft.minutes)}</span>
          <span className="countdown-label">ХВИЛИН</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
