import { useState } from 'react'
import { navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import styles from './Header.module.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.id))

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMark}>BE</span>
          <span className={styles.logoText}>Bálint Eszter</span>
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? styles.active : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
