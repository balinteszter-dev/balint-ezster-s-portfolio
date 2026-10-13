import styles from './SectionHeading.module.css'

type Props = {
  label: string
  title?: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <header className={styles.header}>
      <h2 className={styles.label}>{label}</h2>
      {title ? <p className={styles.title}>{title}</p> : null}
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  )
}
