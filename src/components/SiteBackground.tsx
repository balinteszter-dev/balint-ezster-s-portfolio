import styles from './SiteBackground.module.css'

export function SiteBackground() {
  const src = `${import.meta.env.BASE_URL}site-background.png`

  return (
    <div className={styles.root} aria-hidden>
      <div className={styles.orbit}>
        <img src={src} alt="" className={styles.bgImage} />
      </div>
      <div className={styles.vignette} />
    </div>
  )
}
