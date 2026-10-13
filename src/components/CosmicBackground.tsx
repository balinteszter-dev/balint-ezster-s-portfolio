import styles from './CosmicBackground.module.css'

export function CosmicBackground() {
  return (
    <div className={styles.root} aria-hidden>
      <div className={styles.stars} />
      <div className={styles.stars2} />
      <div className={`${styles.nebula} ${styles.nebulaPurple}`} />
      <div className={`${styles.nebula} ${styles.nebulaBlue}`} />
      <div className={`${styles.nebula} ${styles.nebulaPink}`} />
      <div className={styles.vignette} />
    </div>
  )
}
