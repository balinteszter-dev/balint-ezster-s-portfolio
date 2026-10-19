import { useState } from 'react'
import { FiCpu, FiUsers, FiZap } from 'react-icons/fi'
import { heroFeatures, profile, techStack } from '../data/content'
import styles from './AboutAndSkills.module.css'

const featureIcons = [FiCpu, FiUsers, FiZap]

export function AboutAndSkills() {
  return (
    <section className="section-light">
      <div className={`container ${styles.grid}`}>
        <div id="about" className={styles.about}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Crafting digital experiences with code</h2>
          <p className={styles.text}>{profile.summary}</p>
          <p className={styles.text}>{profile.aboutExtra}</p>
          <ul className={styles.features}>
            {heroFeatures.map((item, i) => {
              const Icon = featureIcons[i] ?? FiCpu
              return (
                <li key={item.title}>
                  <span className={styles.featureIcon}>
                    <Icon aria-hidden />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div id="skills" className={styles.skills}>
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Technologies I work with</h2>
          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <TechChip key={tech.name} name={tech.name} brand={tech.brand} color={tech.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TechChip({
  name,
  brand,
  color,
}: {
  name: string
  brand: string
  color: string
}) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={styles.techCard}>
      {!failed ? (
        <img
          src={`https://cdn.simpleicons.org/${brand}/${color}`}
          alt=""
          width={22}
          height={22}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={styles.techFallback} aria-hidden />
      )}
      <span>{name}</span>
    </div>
  )
}
