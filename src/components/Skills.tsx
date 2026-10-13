import type { CSSProperties } from 'react'
import { skillGroups } from '../data/content'
import { SectionHeading } from './SectionHeading'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="section-inner">
        <SectionHeading
          label="Skills"
          subtitle="Technologies and practices I use across frontend, backend, cloud, and AI delivery."
        />
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={styles.card}
              style={{ '--accent': group.accent } as CSSProperties}
            >
              <div className={styles.cardGrid} aria-hidden />
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
