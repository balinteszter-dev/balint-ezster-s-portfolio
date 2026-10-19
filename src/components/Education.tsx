import { FiGlobe, FiBookOpen } from 'react-icons/fi'
import { profile } from '../data/content'
import styles from './Education.module.css'

export function Education() {
  return (
    <section className="section-light">
      <div className={`container ${styles.grid}`}>
        <div className={styles.block}>
          <div className={styles.iconWrap}>
            <FiBookOpen aria-hidden />
          </div>
          <p className="section-label">Education</p>
          <h2 className="section-title">{profile.education.school}</h2>
          <p className={styles.main}>{profile.education.degree}</p>
          <p className={styles.sub}>{profile.education.period}</p>
        </div>

        <div className={styles.block}>
          <div className={styles.iconWrap}>
            <FiGlobe aria-hidden />
          </div>
          <p className="section-label">Languages</p>
          <h2 className="section-title">Communication</h2>
          {profile.languages.map((lang) => (
            <div key={lang.name} className={styles.lang}>
              <div className={styles.langHead}>
                <span>{lang.name}</span>
                <span>{lang.level}</span>
              </div>
              <div className={styles.bar}>
                <span style={{ width: `${lang.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
