"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      hue: number
      alpha: number
      type: "node" | "data"
    }

    interface Wave {
      y: number
      amplitude: number
      frequency: number
      phase: number
      speed: number
    }

    const particles: Particle[] = []
    const waves: Wave[] = []
    const gridLines: Array<{ x1: number; y1: number; x2: number; y2: number; alpha: number; phase: number }> = []

    // Create sophisticated particle system
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        hue: [280, 300, 320, 340, 20][Math.floor(Math.random() * 5)],
        alpha: Math.random() * 0.4 + 0.3,
        type: Math.random() > 0.7 ? "data" : "node",
      })
    }

    // Create flowing waves
    for (let i = 0; i < 4; i++) {
      waves.push({
        y: (canvas.height / 5) * (i + 1),
        amplitude: 30 + Math.random() * 20,
        frequency: 0.002 + Math.random() * 0.001,
        phase: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.01,
      })
    }

    // Create subtle grid lines
    const gridSpacing = 100
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      gridLines.push({
        x1: x,
        y1: 0,
        x2: x,
        y2: canvas.height,
        alpha: 0.03,
        phase: Math.random() * Math.PI * 2,
      })
    }
    for (let y = 0; y < canvas.height; y += gridSpacing) {
      gridLines.push({
        x1: 0,
        y1: y,
        x2: canvas.width,
        y2: y,
        alpha: 0.03,
        phase: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number
    let frame = 0
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      frame++

      // Elegant dark gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height),
      )
      bgGradient.addColorStop(0, "rgba(18, 12, 35, 0.98)")
      bgGradient.addColorStop(0.5, "rgba(15, 10, 30, 0.99)")
      bgGradient.addColorStop(1, "rgba(12, 8, 25, 1)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid
      gridLines.forEach((line) => {
        const pulseAlpha = line.alpha + Math.sin(frame * 0.02 + line.phase) * 0.015
        ctx.strokeStyle = `rgba(150, 100, 200, ${pulseAlpha})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()
      })

      // Draw flowing waves
      waves.forEach((wave, index) => {
        wave.phase += wave.speed

        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude
          ctx.lineTo(x, y)
        }

        const waveHue = 280 + index * 20
        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, wave.y + wave.amplitude)
        gradient.addColorStop(0, `hsla(${waveHue}, 60%, 50%, 0)`)
        gradient.addColorStop(0.5, `hsla(${waveHue}, 60%, 50%, 0.08)`)
        gradient.addColorStop(1, `hsla(${waveHue}, 60%, 50%, 0)`)

        ctx.strokeStyle = `hsla(${waveHue}, 70%, 60%, 0.15)`
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Fill below the wave with subtle gradient
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Gentle attraction to mouse
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 200) {
          const force = (200 - distance) / 200
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01
        }

        // Apply velocity with damping
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Wrap around edges smoothly
        if (particle.x < -20) particle.x = canvas.width + 20
        if (particle.x > canvas.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = canvas.height + 20
        if (particle.y > canvas.height + 20) particle.y = -20

        // Draw sophisticated connections
        particles.forEach((other, j) => {
          if (i < j) {
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              const opacity = (1 - distance / 120) * 0.25
              const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y)
              gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 65%, ${opacity})`)
              gradient.addColorStop(0.5, `hsla(${(particle.hue + other.hue) / 2}, 80%, 70%, ${opacity * 1.2})`)
              gradient.addColorStop(1, `hsla(${other.hue}, 70%, 65%, ${opacity})`)

              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.8
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })

        // Draw particle based on type
        if (particle.type === "node") {
          // Outer glow
          const glowGradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius * 6,
          )
          glowGradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${particle.alpha * 0.4})`)
          glowGradient.addColorStop(1, "transparent")
          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * 6, 0, Math.PI * 2)
          ctx.fill()

          // Inner core
          const coreGradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius * 2,
          )
          coreGradient.addColorStop(0, `hsla(${particle.hue}, 90%, 80%, ${particle.alpha})`)
          coreGradient.addColorStop(1, `hsla(${particle.hue}, 80%, 70%, ${particle.alpha * 0.6})`)
          ctx.fillStyle = coreGradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
          ctx.fill()

          // Outer ring
          ctx.strokeStyle = `hsla(${particle.hue}, 90%, 80%, ${particle.alpha * 0.8})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
          ctx.stroke()
        } else {
          // Data particle - rotating square
          ctx.save()
          ctx.translate(particle.x, particle.y)
          ctx.rotate(frame * 0.02)

          const size = particle.radius * 3
          const gradient = ctx.createLinearGradient(-size, -size, size, size)
          gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${particle.alpha * 0.6})`)
          gradient.addColorStop(1, `hsla(${particle.hue + 40}, 80%, 70%, ${particle.alpha * 0.6})`)

          ctx.fillStyle = gradient
          ctx.fillRect(-size / 2, -size / 2, size, size)

          ctx.strokeStyle = `hsla(${particle.hue}, 90%, 80%, ${particle.alpha})`
          ctx.lineWidth = 1
          ctx.strokeRect(-size / 2, -size / 2, size, size)

          ctx.restore()
        }
      })

      // Draw floating data points
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 6) * (i + 1)
        const y = canvas.height / 2 + Math.sin(frame * 0.02 + i) * 50
        const size = 4

        const pulseSize = size + Math.sin(frame * 0.05 + i) * 2

        const dataGradient = ctx.createRadialGradient(x, y, 0, x, y, pulseSize * 4)
        dataGradient.addColorStop(0, `hsla(${300 + i * 15}, 80%, 70%, 0.3)`)
        dataGradient.addColorStop(1, "transparent")

        ctx.fillStyle = dataGradient
        ctx.beginPath()
        ctx.arc(x, y, pulseSize * 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `hsla(${300 + i * 15}, 90%, 80%, 0.8)`
        ctx.beginPath()
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
        ctx.fill()
      }

      // Subtle ambient light effect
      const ambientGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300)
      ambientGradient.addColorStop(0, "rgba(150, 100, 220, 0.03)")
      ambientGradient.addColorStop(1, "transparent")
      ctx.fillStyle = ambientGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" />
}
