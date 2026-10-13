import { experiences } from '../data/content'
import { SectionHeading } from './SectionHeading'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="section-inner">
        <SectionHeading
          label="Experiences"
          subtitle="Roles where I led delivery, architecture, and AI-enabled product work."
        />
        <ol className={styles.timeline}>
          {experiences.map((job, index) => (
            <li key={`${job.company}-${job.period}`} className={styles.item}>
              <div className={styles.rail} aria-hidden>
                <span className={styles.dot} />
                {index < experiences.length - 1 ? <span className={styles.line} /> : null}
              </div>
              <article className={`glass-panel ${styles.card}`}>
                <header className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>{job.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </header>
                <ul className={styles.highlights}>
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
