import { useState } from 'react'
import Ornament from './Ornament.jsx'

function RSVP() {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const isValid = name.trim().length > 0 && attendance !== ''

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValid) return
    setSubmitted(true)
  }

  const thanksMessage = attendance === 'no'
    ? 'Нам дуже шкода, що в вас не вийде бути з нами!'
    : 'Дякуємо! Ми вас чекаємо!'

  return (
    <section className="section rsvp-section">
      <div className="section-inner">
        <Ornament />
        <div className="rsvp-columns">
          <div className="rsvp-left">
            <h2 className="rsvp-heading">ЧЕКАЄМО НА ВАШУ ВІДПОВІДЬ</h2>
            <p className="rsvp-text">
              Будь ласка, заповніть цю коротку анкету, щоб допомогти нам врахувати кожну деталь нашої святкової зустрічі.
            </p>
          </div>
          <div className="rsvp-card">
            {submitted ? (
              <div className="rsvp-thanks">{thanksMessage}</div>
            ) : (
              <form className="rsvp-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="rsvp-name">
                    ВАШЕ ІМ&apos;Я ТА ПРІЗВИЩЕ
                  </label>
                  <input
                    id="rsvp-name"
                    className="form-input"
                    type="text"
                    placeholder="Будь ласка, вкажіть..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <span className="form-label">ЧИ ЗМОЖЕТЕ ЗАВІТАТИ?</span>
                  <div className="radio-group">
                    <label className="radio-option" htmlFor="rsvp-yes">
                      <input
                        id="rsvp-yes"
                        className="radio-input"
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={attendance === 'yes'}
                        onChange={() => setAttendance('yes')}
                      />
                      <div className={`radio-circle${attendance === 'yes' ? ' selected' : ''}`}>
                        {attendance === 'yes' && <div className="radio-circle-inner" />}
                      </div>
                      <span className="radio-text">Прийду з радістю</span>
                    </label>
                    <label className="radio-option" htmlFor="rsvp-no">
                      <input
                        id="rsvp-no"
                        className="radio-input"
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={attendance === 'no'}
                        onChange={() => setAttendance('no')}
                      />
                      <div className={`radio-circle${attendance === 'no' ? ' selected' : ''}`}>
                        {attendance === 'no' && <div className="radio-circle-inner" />}
                      </div>
                      <span className="radio-text">На жаль, не вдасться</span>
                    </label>
                  </div>
                </div>
                <button className="btn-submit" type="submit" disabled={!isValid}>
                  ВІДПРАВИТИ ВІДПОВІДЬ
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVP
