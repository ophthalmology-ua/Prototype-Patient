import { useState } from 'react'
import { Calendar, User, Clock, X, ChevronRight } from 'lucide-react'

const SPECIALTIES = [
  'Cardiología',
  'Dermatología',
  'Pediatría',
  'Neurología',
]
const DOCTORS: Record<string, string[]> = {
  Cardiología: ['Dr. Martínez', 'Dra. Rodríguez'],
  Dermatología: ['Dr. García', 'Dra. López'],
  Pediatría: ['Dr. Sánchez', 'Dra. Fernández'],
  Neurología: ['Dr. Pérez', 'Dra. Gómez']
}
const DATES = ['2024-05-20', '2024-05-21', '2024-05-22']
const TIMES = ['09:00', '10:00', '11:00', '14:00', '15:00']

const APPOINTMENTS = [
  { date: '2024-05-15', time: '10:00', doctor: 'Dr. Juan Pablo', specialty: 'Cardiología' },
  { date: '2024-05-18', time: '09:00', doctor: 'Dr. Patel', specialty: 'Dermatología' },
]

export function Appointments() {
  const [showPopup, setShowPopup] = useState(false)
  const [step, setStep] = useState(0)
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const resetPopup = () => {
    setStep(0)
    setSelectedSpecialty('')
    setSelectedDoctor('')
    setSelectedDate('')
    setSelectedTime('')
  }

  const closePopup = () => {
    setShowPopup(false)
    resetPopup()
  }

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  return (
    <div className="appointments">
      <h1 className="appointments__title">Mis Turnos</h1>
      <div className="appointments__list">
        {APPOINTMENTS.map((appt, i) => (
          <div className="turno-card" key={i}>
            <div className="turno-card__fecha">
              <Calendar className="turno-card__icon" />
              <span>{appt.date}</span>
            </div>
            <div className="turno-card__hora">
              <Clock className="turno-card__icon" />
              <span>{appt.time}</span>
            </div>
            <div className="turno-card__doctor">
              <User className="turno-card__icon" />
              <span>{appt.doctor} ({appt.specialty})</span>
            </div>
          </div>
        ))}
      </div>
      <button className="appointments__agendar-btn" onClick={() => setShowPopup(true)}>
        Agendar turno
      </button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup__close" onClick={closePopup} aria-label="Cerrar">
              <X />
            </button>
            <div className="popup__content">
              {step === 0 && (
                <>
                  <h2>Elegí la especialidad</h2>
                  <div className="popup__list">
                    {SPECIALTIES.map(s => (
                      <button key={s} className={`popup__pill${selectedSpecialty === s ? ' popup__pill--active' : ''}`} onClick={() => { setSelectedSpecialty(s); handleNext(); }}>
                        {s}
                        <ChevronRight />
                      </button>
                    ))}
                  </div>
                </>
              )}
              {step === 1 && (
                <>
                  <h2>Elegí el profesional</h2>
                  <div className="popup__list">
                    {DOCTORS[selectedSpecialty]?.map((d: string) => (
                      <button key={d} className={`popup__pill${selectedDoctor === d ? ' popup__pill--active' : ''}`} onClick={() => { setSelectedDoctor(d); handleNext(); }}>
                        {d}
                        <ChevronRight />
                      </button>
                    ))}
                  </div>
                  <button className="popup__back" onClick={handleBack}>Atrás</button>
                </>
              )}
              {step === 2 && (
                <>
                  <h2>Elegí la fecha</h2>
                  <div className="popup__list">
                    {DATES.map(date => (
                      <button key={date} className={`popup__pill${selectedDate === date ? ' popup__pill--active' : ''}`} onClick={() => { setSelectedDate(date); handleNext(); }}>
                        {date}
                        <ChevronRight />
                      </button>
                    ))}
                  </div>
                  <button className="popup__back" onClick={handleBack}>Atrás</button>
                </>
              )}
              {step === 3 && (
                <>
                  <h2>Elegí el horario</h2>
                  <div className="popup__list popup__list--row">
                    {TIMES.map(time => (
                      <button key={time} className={`popup__pill${selectedTime === time ? ' popup__pill--active' : ''}`} onClick={() => setSelectedTime(time)}>
                        {time}
                      </button>
                    ))}
                  </div>
                  <button className="popup__back" onClick={handleBack}>Atrás</button>
                  <button className="popup__confirm" disabled={!selectedTime} onClick={closePopup}>Confirmar</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 