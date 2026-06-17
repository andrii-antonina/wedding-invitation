function Branch() {
  return (
    <svg width="160" height="48" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main stem */}
      <path d="M 8 24 Q 50 22 80 24 Q 110 26 152 24" stroke="#C4A35A" strokeWidth="1" strokeLinecap="round"/>
      {/* Leaves left side */}
      <path d="M 30 24 Q 24 14 18 16 Q 22 22 30 24Z" fill="#C4A35A" opacity="0.7"/>
      <path d="M 52 23 Q 46 12 38 15 Q 43 20 52 23Z" fill="#C4A35A" opacity="0.7"/>
      <path d="M 74 24 Q 68 13 60 15 Q 65 21 74 24Z" fill="#C4A35A" opacity="0.7"/>
      {/* Leaves right side */}
      <path d="M 30 24 Q 24 34 18 32 Q 22 26 30 24Z" fill="#C4A35A" opacity="0.45"/>
      <path d="M 52 25 Q 46 36 38 33 Q 43 28 52 25Z" fill="#C4A35A" opacity="0.45"/>
      <path d="M 74 24 Q 68 35 60 33 Q 65 27 74 24Z" fill="#C4A35A" opacity="0.45"/>
      {/* Small flower at right end */}
      <circle cx="152" cy="24" r="3" fill="#C4A35A" opacity="0.8"/>
      <circle cx="152" cy="24" r="5.5" stroke="#C4A35A" strokeWidth="0.8" opacity="0.5"/>
      {/* Berry dots */}
      <circle cx="96" cy="19" r="1.8" fill="#C4A35A" opacity="0.6"/>
      <circle cx="108" cy="27" r="1.5" fill="#C4A35A" opacity="0.5"/>
      <circle cx="120" cy="20" r="1.8" fill="#C4A35A" opacity="0.6"/>
      <circle cx="134" cy="26" r="1.5" fill="#C4A35A" opacity="0.5"/>
    </svg>
  )
}

function WeddingDate() {
  return (
    <section className="section wd-section">
      <div className="wd-inner">

        <div className="wd-date-block">
          <div className="wd-branch-row">
            <Branch />
            <div className="wd-diamond" />
            <div style={{ transform: 'scaleX(-1)' }}><Branch /></div>
          </div>

          <div className="wd-date-center">
            <span className="wd-day">13</span>
            <span className="wd-month">Вересня</span>
            <span className="wd-year">2026</span>
          </div>

          <div className="wd-branch-row">
            <Branch />
            <div className="wd-diamond" />
            <div style={{ transform: 'scaleX(-1)' }}><Branch /></div>
          </div>
        </div>

        <p className="wd-text">
          Цей вересневий день стане точкою відліку нашої нової сімейної
          історії. Ми будемо щиро раді розділити ці незабутні хвилини
          радості, затишку та щирості разом з вами.
        </p>

      </div>
    </section>
  )
}

export default WeddingDate
