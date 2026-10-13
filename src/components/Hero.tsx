import { profile } from '../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.flare} aria-hidden />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{profile.location}</p>
        <h1 className={styles.title}>{profile.name}</h1>
        <p className={styles.subtitle}>{profile.title}</p>
        <p className={styles.tagline}>{profile.tagline}</p>
        <a href="#about" className={`btn-glow ${styles.cta}`}>
          Explore
        </a>
      </div>
    </section>
  )
}
