import { useState, useEffect } from 'react'
import heroPhoto from '../assets/hero.jpg'

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
      <p className="hero-countdown-label">до дня весілля залишилось</p>
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

function Hero() {
  return (
    <section className="hero-section">
      {/* Background photo */}
      <img className="hero-bg" src={heroPhoto} alt="Андрій та Антоніна" />

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-top-invite">Запрошуємо вас на наше весілля</p>
        <div className="hero-bottom-block">
          <p className="hero-top-date">Андрій та Антоніна</p>
          <HeroCountdown />
        </div>
      </div>
    </section>
  )
}

export default Hero
