import { useState } from 'react'
import type { CSSProperties } from 'react'
import { TbExternalLink } from 'react-icons/tb'
import { projects } from '../data/content'
import { projectScreenshot } from '../utils/projectScreenshot'
import { SectionHeading } from './SectionHeading'
import styles from './Projects.module.css'

function projectPreviewSrc(project: (typeof projects)[number]): string | null {
  if ('image' in project && project.image) return project.image
  if (project.link.startsWith('http') && !project.link.includes('github.com')) {
    return projectScreenshot(project.link)
  }
  return null
}

function ProjectThumb({ project }: { project: (typeof projects)[number] }) {
  const initial = projectPreviewSrc(project)
  const [src, setSrc] = useState<string | null>(initial)
  const thumb = 'thumb' in project ? project.thumb : undefined

  if (src) {
    return (
      <img
        src={src}
        alt={`${project.title} preview`}
        className={styles.thumbImg}
        loading="lazy"
        decoding="async"
        onError={() => {
          if (src.includes('thum.io') && src.includes('/crop/')) {
            setSrc(projectScreenshot(project.link, false))
            return
          }
          setSrc(null)
        }}
      />
    )
  }

  return (
    <>
      <div className={styles.thumbFallback} style={{ background: thumb } as CSSProperties} />
      <div className={styles.thumbOverlay} />
      <span className={styles.thumbLabel}>{project.tags[0]}</span>
    </>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionHeading
          label="My projects"
          subtitle="Production-oriented work across AI, APIs, cloud delivery, and customer-facing applications."
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.thumb}>
                <ProjectThumb project={project} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                {'category' in project && project.category ? (
                  <span className={styles.category}>{project.category}</span>
                ) : null}
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
                  <TbExternalLink aria-hidden />
                  Visit Website
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
