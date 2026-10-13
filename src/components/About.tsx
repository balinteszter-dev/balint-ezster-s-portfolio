import { profile } from '../data/content'
import { SectionHeading } from './SectionHeading'
import styles from './About.module.css'

export function About() {
  const firstName = profile.name.split(' ')[0]

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeading label="About me" />
        <div className={`glass-panel ${styles.panel}`}>
          <p className={styles.greeting}>
            Hi, I&apos;m <span>{firstName}</span> — {profile.title.toLowerCase()} based in{' '}
            {profile.location}.
          </p>
          <p className={styles.body}>{profile.summary}</p>
          <p className={styles.body}>
            I work with product and engineering teams to ship maintainable systems: polished React
            experiences, resilient APIs, and AI features that fit real workflows—not demos.
          </p>
          <div className={styles.metaGrid}>
            <div className={styles.metaBlock}>
              <h3>Education</h3>
              <p className={styles.metaMain}>{profile.education.degree}</p>
              <p className={styles.metaSub}>
                {profile.education.school} · {profile.education.period}
              </p>
            </div>
            <div className={styles.metaBlock}>
              <h3>Languages</h3>
              {profile.languages.map((lang) => (
                <p key={lang.name} className={styles.langRow}>
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
