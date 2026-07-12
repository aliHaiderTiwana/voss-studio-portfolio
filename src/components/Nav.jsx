import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          Voss Studio
        </NavLink>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">Toggle menu</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <nav id="primary-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
