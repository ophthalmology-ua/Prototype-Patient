import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react'

export function Home() {
  return (
    <div className="home">
      <h1 className="home__title">¡Bienvenido, Juan!</h1>
      {/* Próximo turno */}
      <div className="card card--appointment">
        <h2 className="card__title">Próximo turno</h2>
        <div className="card__details">
          <div className="card__row">
            <Calendar className="card__icon card__icon--calendar" />
            <span>15 de mayo de 2024</span>
          </div>
          <div className="card__row">
            <Clock className="card__icon card__icon--clock" />
            <span>10:00</span>
          </div>
          <div className="card__row">
            <MapPin className="card__icon card__icon--map" />
            <span>Dr. Juan Pablo - Cardiología</span>
          </div>
        </div>
      </div>
      {/* Pendientes */}
      <div className="card card--pending">
        <h2 className="card__title">Pendientes</h2>
        <div className="pending-list">
          <button className="pending-list__item">
            <span>Resultados de laboratorio</span>
            <span className="pending-list__action">Ver <ChevronRight className="pending-list__chevron" /></span>
          </button>
          <button className="pending-list__item">
            <span>Renovar receta</span>
            <span className="pending-list__action">Solicitar <ChevronRight className="pending-list__chevron" /></span>
          </button>
          <button className="pending-list__item">
            <span>Actualizar obra social</span>
            <span className="pending-list__action">Actualizar <ChevronRight className="pending-list__chevron" /></span>
          </button>
        </div>
      </div>
    </div>
  )
} 