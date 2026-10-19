import type { CSSProperties } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { projects } from '../data/content'
import { ProjectBrandIcon } from './ProjectBrandIcon'
import { SectionHeading } from './SectionHeading'
import styles from './Projects.module.css'

function asset(path: string) {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}

function ProjectMockup({
  image,
  alt,
  tone,
  preview,
}: {
  image: string
  alt: string
  tone: 'light' | 'dark'
  preview?: { objectPosition: string }
}) {
  return (
    <div className={styles.mockup}>
      <div
        className={`${styles.mockupScreen} ${tone === 'dark' ? styles.mockupDark : styles.mockupLight}`}
      >
        <img
          src={asset(image)}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={
            {
              objectPosition: preview?.objectPosition ?? 'left top',
            } as CSSProperties
          }
        />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className={`section-inner ${styles.inner}`}>
        <SectionHeading
          label="My projects"
          subtitle="Built and integrated enterprise-grade solutions using leading cloud and AI technologies."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.title}
              className={`${styles.card} ${styles[`theme_${project.theme}`]}`}
            >
              <ProjectMockup
                image={project.image}
                alt={project.title}
                tone={project.mockupTone}
                preview={project.preview}
              />
              <div className={styles.body}>
                <div className={styles.brandRow}>
                  <ProjectBrandIcon theme={project.theme} />
                  <span>{project.brand}</span>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <HiArrowRight aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
