import type { CSSProperties } from 'react'
import { SiKong, SiStripe } from 'react-icons/si'
import { TbBrandAzure } from 'react-icons/tb'
import styles from './Projects.module.css'

function asset(path: string) {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}

type ProjectTheme = 'azure' | 'kong' | 'harness' | 'stripe'

const themeColors: Record<ProjectTheme, string> = {
  azure: '#0078D4',
  kong: '#003459',
  harness: '#00ADE4',
  stripe: '#635BFF',
}

export function ProjectBrandIcon({ theme }: { theme: ProjectTheme }) {
  const color = themeColors[theme]
  const iconStyle = { color, width: '1.05rem', height: '1.05rem' } satisfies CSSProperties

  switch (theme) {
    case 'azure':
      return (
        <img
          src={asset('brands/azure.svg')}
          alt=""
          width={20}
          height={20}
          className={styles.brandIconImg}
        />
      )
    case 'kong':
      return <SiKong style={iconStyle} aria-hidden />
    case 'stripe':
      return <SiStripe style={iconStyle} aria-hidden />
    case 'harness':
      return (
        <img
          src={asset('brands/harness.svg')}
          alt=""
          width={20}
          height={20}
          className={styles.brandIconImg}
        />
      )
    default:
      return <TbBrandAzure style={iconStyle} aria-hidden />
  }
}
