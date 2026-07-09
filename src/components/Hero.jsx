import { useState, useEffect, useRef } from 'react'
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
        <span className="hero-countdown-dot">·</span>
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(timeLeft.hours)}</span>
          <span className="hero-countdown-key">годин</span>
        </div>
        <span className="hero-countdown-dot">·</span>
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(timeLeft.minutes)}</span>
          <span className="hero-countdown-key">хвилин</span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const el = sectionRef.current
    if (el) el.style.height = window.innerHeight + 'px'
  }, [])

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Background photo */}
      <img className="hero-bg" src={heroPhoto} alt="Андрій та Антоніна" />

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-top-block">
          <p className="hero-top-invite">Запрошуємо вас<br />на наше весілля</p>
          <svg className="hero-top-leaf" viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* left line */}
            <line x1="0" y1="10" x2="52" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
            {/* left small diamond */}
            <rect x="50" y="7.5" width="5" height="5" transform="rotate(45 52.5 10)" fill="currentColor" opacity="0.6"/>
            {/* center leaf sprig */}
            <path d="M70 10 C67 6, 61 5, 58 7 C61 7.5, 65 8.5, 70 10Z" fill="currentColor" opacity="0.9"/>
            <path d="M70 10 C73 6, 79 5, 82 7 C79 7.5, 75 8.5, 70 10Z" fill="currentColor" opacity="0.9"/>
            <path d="M70 10 C68 7, 64 6, 62 8 C64.5 8.5, 67 9, 70 10Z" fill="currentColor" opacity="0.55"/>
            <path d="M70 10 C72 7, 76 6, 78 8 C75.5 8.5, 73 9, 70 10Z" fill="currentColor" opacity="0.55"/>
            <line x1="70" y1="3" x2="70" y2="17" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
            {/* right small diamond */}
            <rect x="83" y="7.5" width="5" height="5" transform="rotate(45 85.5 10)" fill="currentColor" opacity="0.6"/>
            {/* right line */}
            <line x1="88" y1="10" x2="140" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
          </svg>
        </div>
        <div className="hero-bottom-block">
          <div className="hero-names-wrap">
            <p className="hero-top-date">Андрій та Антоніна</p>
            <div className="hero-branch" />
          </div>
          <HeroCountdown />
          <div className="hero-bottom-caption">
            <span className="hero-scroll-arrow">↓</span>
            <p className="hero-bottom-text">Наш найважливіший день ми хочемо розділити з вами ♥ </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
