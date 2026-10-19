import type { CSSProperties } from 'react'
import { skillGroups } from '../data/content'
import { getGroupIcon, getSkillIcon } from '../utils/skillIcons'
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
          {skillGroups.map((group) => {
            const GroupIcon = getGroupIcon(group.title)
            return (
              <article
                key={group.title}
                className={styles.card}
                style={{ '--accent': group.accent } as CSSProperties}
              >
                <h3 className={styles.cardTitle}>
                  <span className={styles.cardTitleIcon} aria-hidden>
                    <GroupIcon />
                  </span>
                  {group.title}
                </h3>
                <ul className={styles.list}>
                  {group.items.map((item) => {
                    const SkillIcon = getSkillIcon(item)
                    return (
                      <li key={item}>
                        <SkillIcon className={styles.chipIcon} aria-hidden />
                        <span>{item}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
