import type { CSSProperties } from 'react'
import { profile } from '../data/content'
import { SectionHeading } from './SectionHeading'
import styles from './Contact.module.css'

const links = [
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: profile.linkedin,
    icon: 'in',
    accent: '#0ea5e9',
  },
  {
    label: 'GitHub',
    value: '@balinteszter215',
    href: profile.github,
    icon: 'gh',
    accent: '#a78bfa',
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: '@',
    accent: '#f472b6',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: '☎',
    accent: '#4ade80',
  },
] as const

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="section-inner">
        <SectionHeading
          label="Contact me"
          subtitle="Open to senior roles, consulting, and collaborations on full-stack and AI-enabled products."
        />
        <div className={styles.grid}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.card}
              style={{ '--link-accent': link.accent } as CSSProperties}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.label}>{link.label}</span>
              <span className={styles.value}>{link.value}</span>
            </a>
          ))}
        </div>
        <div className={styles.ctaWrap}>
          <a href={`mailto:${profile.email}`} className="btn-glow">
            Send a message
          </a>
        </div>
      </div>
    </section>
  )
}
