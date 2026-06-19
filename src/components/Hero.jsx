import { useState, useEffect } from 'react'

const WEDDING_DATE = new Date('2026-09-13T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  }
}

function pad(n) { return String(n).padStart(2, '0') }

function HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 60000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="hero-countdown">
      <p className="hero-countdown-label">до урочистого дня залишилось</p>
      <div className="hero-countdown-strip">
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(timeLeft.days)}</span>
          <span className="hero-countdown-key">днів</span>
        </div>
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(timeLeft.hours)}</span>
          <span className="hero-countdown-key">годин</span>
        </div>
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(timeLeft.minutes)}</span>
          <span className="hero-countdown-key">хвилин</span>
        </div>
      </div>
    </div>
  )
}

function Rings() {
  return (
    <svg className="hero-rings" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="42" cy="30" r="24" stroke="#C4A35A" strokeWidth="4"/>
      <circle cx="42" cy="30" r="20" stroke="#C4A35A" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="42" cy="30" r="27.5" stroke="#C4A35A" strokeWidth="0.5" opacity="0.35"/>
      <circle cx="78" cy="30" r="24" stroke="#C4A35A" strokeWidth="4"/>
      <circle cx="78" cy="30" r="20" stroke="#C4A35A" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="78" cy="30" r="27.5" stroke="#C4A35A" strokeWidth="0.5" opacity="0.35"/>
    </svg>
  )
}

function Hero() {
  return (
    <section className="section hero-section">
      <Rings />
      <p className="hero-script">Wedding day</p>

      <h1 className="hero-names">
        <span className="hero-names-first">Андрій</span>
        <span className="hero-names-divider">
          <span className="hero-names-line" />
          <span className="hero-names-ta">та</span>
          <span className="hero-names-line" />
        </span>
        <span className="hero-names-last">Антоніна</span>
      </h1>

      <div className="hero-photo">
        <div className="hero-photo-placeholder">
          <span>Ваше фото</span>
        </div>
      </div>

      <HeroCountdown />
    </section>
  )
}

export default Hero
