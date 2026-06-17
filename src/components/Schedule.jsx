import Ornament from './Ornament.jsx'

const items = [
  {
    time: '13:00',
    title: 'Збір гостей',
    text: 'Welcome drink під звуки живої скрипки та перші красиві фотографії.',
  },
  {
    time: '13:30',
    title: 'Церемонія обітниць',
    text: 'Найбільш хвилююча, щира та романтична мить нашої розписки в зеленому саду.',
  },
  {
    time: '14:30',
    title: 'Весільний бенкет',
    text: 'Святкова вишукана вечеря, теплі вітання, танці, конкурси та приємне спілкування.',
  },
  {
    time: '21:00',
    title: 'Весільний торт',
    text: 'Найсолодша подія вечора під вересневим небом.',
  },
  {
    time: '22:00',
    title: 'Завершення вечора',
    text: 'Теплі обійми та фінал нашого першого сімейного свята.',
  },
]

function Schedule() {
  return (
    <section className="section schedule-section">
      <div className="section-inner">
        <Ornament />
        <h2 className="section-title">ПРОГРАМА НАШОГО ДНЯ</h2>
        <div className="timeline">
          {items.map((item) => (
            <div className="timeline-item" key={item.time}>
              <div className="timeline-time">
                <span>{item.time}</span>
              </div>
              <div className="timeline-dot-col">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <div
                  className="timeline-content-title"
                  data-time={item.time}
                >
                  {item.title}
                </div>
                <div className="timeline-content-text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
