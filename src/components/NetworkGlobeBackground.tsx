import { useEffect, useRef } from 'react'
import styles from './NetworkGlobeBackground.module.css'

type Vec3 = { x: number; y: number; z: number }

type Node = Vec3 & {
  tier: 'core' | 'synapse' | 'signal'
  pulse: number
}

function randomGaussian(): number {
  let u = 0
  let v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

function generateAbstractAINetwork(count: number): Node[] {
  const nodes: Node[] = []

  nodes.push({ x: 0, y: 0, z: 0, tier: 'core', pulse: 0 })

  const coreCount = Math.floor(count * 0.22)
  for (let i = 0; i < coreCount; i += 1) {
    nodes.push({
      x: randomGaussian() * 0.11,
      y: randomGaussian() * 0.1,
      z: randomGaussian() * 0.11,
      tier: 'core',
      pulse: Math.random() * Math.PI * 2,
    })
  }

  const synapseCount = Math.floor(count * 0.38)
  for (let i = 0; i < synapseCount; i += 1) {
    const angle = Math.random() * Math.PI * 2
    const lane = 0.24 + Math.random() * 0.24
    const wobble = (Math.random() - 0.5) * 0.38
    nodes.push({
      x: Math.cos(angle) * lane + randomGaussian() * 0.055,
      y: wobble + randomGaussian() * 0.085,
      z: Math.sin(angle) * lane * 0.75 + randomGaussian() * 0.07,
      tier: 'synapse',
      pulse: Math.random() * Math.PI * 2,
    })
  }

  while (nodes.length < count) {
    nodes.push({
      x: randomGaussian() * 0.38,
      y: randomGaussian() * 0.26,
      z: randomGaussian() * 0.33,
      tier: 'signal',
      pulse: Math.random() * Math.PI * 2,
    })
  }

  return nodes
}

function distSq(a: Vec3, b: Vec3): number {
  const dx = a.x - b.x
  const dy = a.y - b.y
  const dz = a.z - b.z
  return dx * dx + dy * dy + dz * dz
}

function buildNeuralConnections(nodes: Node[]): [number, number][] {
  const edges = new Set<string>()
  const connections: [number, number][] = []

  const addEdge = (a: number, b: number) => {
    if (a === b) return
    const key = a < b ? `${a}-${b}` : `${b}-${a}`
    if (edges.has(key)) return
    edges.add(key)
    connections.push([a, b])
  }

  for (let i = 0; i < nodes.length; i += 1) {
    const distances = nodes
      .map((node, index) => ({ index, d: distSq(nodes[i], node) }))
      .filter((entry) => entry.index !== i)
      .sort((a, b) => a.d - b.d)

    const nearest = nodes[i].tier === 'signal' ? 2 : 4
    for (let k = 0; k < nearest && k < distances.length; k += 1) {
      if (distances[k].d < 0.55) addEdge(i, distances[k].index)
    }
  }

  const coreIndices = nodes.map((node, index) => (node.tier === 'core' ? index : -1)).filter((i) => i >= 0)
  const signalIndices = nodes.map((node, index) => (node.tier === 'signal' ? index : -1)).filter((i) => i >= 0)

  for (const signal of signalIndices) {
    let bestCore = coreIndices[0]
    let best = Number.POSITIVE_INFINITY
    for (const core of coreIndices) {
      const d = distSq(nodes[signal], nodes[core])
      if (d < best) {
        best = d
        bestCore = core
      }
    }
    if (best < 1.1) addEdge(signal, bestCore)
  }

  for (let i = 0; i < nodes.length; i += 3) {
    const j = (i + Math.floor(nodes.length * 0.37)) % nodes.length
    if (distSq(nodes[i], nodes[j]) < 0.95) addEdge(i, j)
  }

  return connections
}

function rotateX(point: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return {
    x: point.x,
    y: point.y * cos - point.z * sin,
    z: point.y * sin + point.z * cos,
  }
}

function rotateY(point: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return {
    x: point.x * cos + point.z * sin,
    y: point.y,
    z: -point.x * sin + point.z * cos,
  }
}

function rotateZ(point: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return {
    x: point.x * cos - point.y * sin,
    y: point.x * sin + point.y * cos,
    z: point.z,
  }
}

export function NetworkGlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointCount = window.innerWidth < 768 ? 96 : 155
    const nodes = generateAbstractAINetwork(pointCount)
    const connections = buildNeuralConnections(nodes)

    let width = 0
    let height = 0
    let dpr = 1
    let angleY = 0
    let angleX = 0.28
    let angleZ = 0
    let time = 0
    let animationId = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#04060c'
      ctx.fillRect(0, 0, width, height)

      time += 1
      if (!reducedMotion) {
        angleY += 0.00095
        angleX = 0.24 + Math.sin(time * 0.004) * 0.05
        angleZ = Math.sin(time * 0.0025) * 0.04
      }

      const focal = 3.1
      const centerX = width * 0.5
      const centerY = height * 0.5
      const stretch = { x: 1.32, y: 0.98, z: 1.1 }

      const base = nodes.map((node) => {
        const stretched = {
          x: node.x * stretch.x,
          y: node.y * stretch.y,
          z: node.z * stretch.z,
        }
        const rotated = rotateZ(rotateY(rotateX(stretched, angleX), angleY), angleZ)
        const depth = rotated.z + focal
        const persp = focal / depth
        return {
          nx: rotated.x * persp,
          ny: rotated.y * persp,
          z: rotated.z,
          persp,
          tier: node.tier,
          pulse: node.pulse,
        }
      })

      let maxAbsX = 0.001
      let maxAbsY = 0.001
      for (const p of base) {
        maxAbsX = Math.max(maxAbsX, Math.abs(p.nx))
        maxAbsY = Math.max(maxAbsY, Math.abs(p.ny))
      }

      const coverPad = 1.06
      const networkScale = Math.max(
        (width * 0.5 * coverPad) / maxAbsX,
        (height * 0.5 * coverPad) / maxAbsY,
      )

      const projected = base.map((p) => ({
        x: centerX + p.nx * networkScale,
        y: centerY + p.ny * networkScale,
        z: p.z,
        scale: p.persp,
        tier: p.tier,
        pulse: p.pulse,
      }))

      const sortedEdges = [...connections].sort((a, b) => {
        const za = (projected[a[0]].z + projected[a[1]].z) * 0.5
        const zb = (projected[b[0]].z + projected[b[1]].z) * 0.5
        return za - zb
      })

      for (const [a, b] of sortedEdges) {
        const p1 = projected[a]
        const p2 = projected[b]
        const depth = (p1.z + p2.z) * 0.5
        const alpha = Math.max(0.05, Math.min(0.42, 0.14 + (depth + 1) * 0.1))
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
        gradient.addColorStop(0, `rgba(129, 140, 248, ${alpha})`)
        gradient.addColorStop(1, `rgba(56, 189, 248, ${alpha * 0.85})`)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.75
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }

      const hub = projected[0]
      if (hub) {
        const pulse = reducedMotion ? 1 : 1 + Math.sin(time * 0.05) * 0.12
        const glow = ctx.createRadialGradient(hub.x, hub.y, 0, hub.x, hub.y, 54 * pulse)
        glow.addColorStop(0, 'rgba(167, 139, 250, 0.35)')
        glow.addColorStop(0.45, 'rgba(56, 189, 248, 0.12)')
        glow.addColorStop(1, 'rgba(56, 189, 248, 0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(hub.x, hub.y, 54 * pulse, 0, Math.PI * 2)
        ctx.fill()

        ctx.font = '600 11px "Exo 2", system-ui, sans-serif'
        ctx.fillStyle = 'rgba(224, 231, 255, 0.85)'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('AI', hub.x, hub.y)
      }

      for (let i = 0; i < projected.length; i += 1) {
        const p = projected[i]
        const twinkleA = reducedMotion ? 0 : Math.sin(time * 0.045 + p.pulse)
        const twinkleB = reducedMotion ? 0 : Math.sin(time * 0.11 + p.pulse * 1.85)
        const spark = reducedMotion
          ? 0
          : Math.pow(Math.max(0, Math.sin(time * 0.13 + p.pulse * 2.4)), 5)
        const flicker = reducedMotion
          ? 1
          : 0.72 + twinkleA * 0.18 + twinkleB * 0.14 + spark * 0.35
        const alpha = Math.max(0.28, Math.min(1, (0.45 + (p.z + 1) * 0.2) * flicker))
        const size = Math.max(0.85, p.scale * (p.tier === 'core' ? 2.6 : p.tier === 'synapse' ? 1.85 : 1.35))

        let fill = '196, 181, 253'
        let glow = '167, 139, 250'
        if (p.tier === 'synapse') {
          fill = '56, 189, 248'
          glow = '125, 211, 252'
        } else if (p.tier === 'signal') {
          fill = '244, 114, 182'
          glow = '251, 182, 206'
        }

        const glowRadius = size * (2.4 + spark * 3.2)
        const glowAlpha = Math.min(0.55, (0.12 + spark * 0.38) * flicker)
        const outerGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius)
        outerGlow.addColorStop(0, `rgba(${glow}, ${glowAlpha})`)
        outerGlow.addColorStop(0.35, `rgba(${glow}, ${glowAlpha * 0.45})`)
        outerGlow.addColorStop(1, `rgba(${glow}, 0)`)
        ctx.fillStyle = outerGlow
        ctx.beginPath()
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(${fill}, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()

        if (spark > 0.35 || flicker > 1.05) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.95, 0.35 + spark * 0.55)})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, size * (0.35 + spark * 0.25), 0, Math.PI * 2)
          ctx.fill()
        }
      }

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={styles.root} aria-hidden>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.vignette} />
    </div>
  )
}
