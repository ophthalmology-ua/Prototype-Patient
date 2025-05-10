import { useState } from 'react'
import { FileText, Calendar, X } from 'lucide-react'

const ESTUDIOS = [
  {
    tipo: 'estudio',
    nombre: 'OCT mácula OD',
    fecha: '2024-06-10',
    imagen: '/oct_sample.png',
    descripcion: 'OCT mácula ojo derecho: persiste líquido subretiniano. Se recomienda continuar tratamiento con anti-VEGF.'
  },
  {
    tipo: 'estudio',
    nombre: 'OCT mácula OI',
    fecha: '2024-06-10',
    imagen: '/oct_sample.png',
    descripcion: 'OCT mácula ojo izquierdo: sin líquido, mácula seca.'
  },
  {
    tipo: 'turno',
    nombre: 'García',
    especialidad: 'Oftalmología',
    fecha: '2024-06-10',
    hora: '09:30',
    agudeza: 'OD: 20/60, OI: 20/30',
    notas: 'Paciente refiere visión borrosa en OD. Se aplica inyección de Ranibizumab. Control en 4 semanas.'
  },
  {
    tipo: 'estudio',
    nombre: 'OCT mácula OD',
    fecha: '2024-05-13',
    imagen: '/oct_sample.png',
    descripcion: 'OCT mácula ojo derecho: leve mejoría, disminución de líquido.'
  },
  {
    tipo: 'turno',
    nombre: 'García',
    especialidad: 'Oftalmología',
    fecha: '2024-05-13',
    hora: '10:00',
    agudeza: 'OD: 20/50, OI: 20/25',
    notas: 'Se observa mejoría clínica. Se decide espaciar las inyecciones a 6 semanas.'
  },
  {
    tipo: 'estudio',
    nombre: 'OCT mácula OD',
    fecha: '2024-04-01',
    imagen: '/oct_sample.png',
    descripcion: 'OCT mácula ojo derecho: edema macular importante previo a inicio de tratamiento.'
  },
  {
    tipo: 'turno',
    nombre: 'García',
    especialidad: 'Oftalmología',
    fecha: '2024-04-01',
    hora: '11:00',
    agudeza: 'OD: 20/80, OI: 20/30',
    notas: 'Primera consulta. Diagnóstico de DMAE exudativa. Se indica inicio de antiangiogénicos.'
  },
]

export function Estudios() {
  const [modal, setModal] = useState<null | typeof ESTUDIOS[0]>(null)

  return (
    <div className="estudios">
      <h1 className="estudios__title">Mis estudios y turnos</h1>
      <div className="estudios__list">
        {ESTUDIOS.map((item, i) => (
          <div className="estudio-card" key={i} onClick={() => setModal(item)} tabIndex={0} role="button">
            <div className="estudio-card__icon">
              {item.tipo === 'estudio' ? <FileText /> : <Calendar />}
            </div>
            <div className="estudio-card__info">
              <div className="estudio-card__nombre">
                {item.tipo === 'estudio'
                  ? item.nombre
                  : `Turno con el Dr. ${item.nombre}`}
              </div>
              {item.tipo === 'turno' && (
                <div className="estudio-card__especialidad">{item.especialidad}</div>
              )}
              <div className="estudio-card__fecha">
                {item.fecha}{item.tipo === 'turno' && item.hora ? ` - ${item.hora}` : ''}
              </div>
              {item.tipo === 'turno' && item.agudeza && (
                <div className="estudio-card__agudeza">Agudeza visual: {item.agudeza}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <div className="popup-overlay">
          <div className="popup estudio-modal">
            <button className="popup__close" onClick={() => setModal(null)} aria-label="Cerrar">
              <X />
            </button>
            <div className="popup__content">
              {modal.tipo === 'estudio' ? (
                <>
                  <h2>{modal.nombre}</h2>
                  <div className="estudio-modal__img-wrap">
                    <img src={modal.imagen} alt={modal.nombre} className="estudio-modal__img" />
                  </div>
                  <div className="estudio-modal__fecha">Fecha: {modal.fecha}</div>
                  <div className="estudio-modal__desc">{modal.descripcion}</div>
                </>
              ) : (
                <>
                  <h2>Notas de consulta</h2>
                  <div className="estudio-modal__nombre">Dr. {modal.nombre}</div>
                  <div className="estudio-modal__especialidad">Especialidad: {modal.especialidad}</div>
                  <div className="estudio-modal__fecha">Fecha: {modal.fecha} - {modal.hora}</div>
                  <div className="estudio-modal__agudeza">Agudeza visual: {modal.agudeza}</div>
                  <div className="estudio-modal__notas">{modal.notas}</div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 