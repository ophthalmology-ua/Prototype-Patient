import { useState } from 'react'
import { Home, Calendar, FileText, User, Contrast } from 'lucide-react'
import { Appointments } from '../../pages/Appointments'
import { Estudios } from '../../pages/Estudios'

interface MainLayoutProps {
  children: React.ReactNode
}

const navItems = [
  { label: 'Inicio', icon: Home },
  { label: 'Turnos', icon: Calendar },
  { label: 'Estudios', icon: FileText },
  { label: 'Perfil', icon: User },
]

export function MainLayout({ children }: MainLayoutProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [active, setActive] = useState('Inicio')

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
    document.body.classList.toggle('high-contrast')
  }

  return (
    <div className={`main-layout${isHighContrast ? ' high-contrast' : ''}`}> 
      <main className="main-content">
        {active === 'Turnos' ? <Appointments /> : active === 'Estudios' ? <Estudios /> : children}
      </main>
      <nav className="navbar">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`nav-btn${active === label ? ' nav-btn--active' : ''}`}
            aria-label={label}
            onClick={() => setActive(label)}
          >
            <Icon className="nav-btn__icon" />
            <span className="nav-btn__label">{label}</span>
          </button>
        ))}
      </nav>
      <button
        onClick={toggleHighContrast}
        className="contrast-toggle"
        aria-label="Alternar modo alto contraste"
      >
        <Contrast className="contrast-toggle__icon" />
      </button>
    </div>
  )
} 