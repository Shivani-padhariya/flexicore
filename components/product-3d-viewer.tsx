"use client"

import { useEffect, useRef, useState } from "react"
import { RotateCw, Box } from "lucide-react"

type Props = {
  image: string
  alt: string
  frames?: number
}

/**
 * A 360-degree style rotating product viewer using CSS 3D transforms.
 * Since we don't have a true .glb asset, we simulate 3D by rotating
 * a stylized slab with depth, and allowing click-and-drag rotation.
 * In production, replace with <model-viewer> web component + a .glb file.
 */
export function Product3DViewer({ image, alt }: Props) {
  const [rotY, setRotY] = useState(20)
  const [rotX, setRotX] = useState(-10)
  const [auto, setAuto] = useState(true)
  const draggingRef = useRef(false)
  const lastRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!auto) return
    let raf = 0
    const tick = () => {
      setRotY((v) => v + 0.3)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [auto])

  const onDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    lastRef.current = { x: e.clientX, y: e.clientY }
    setAuto(false)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    const dx = e.clientX - lastRef.current.x
    const dy = e.clientY - lastRef.current.y
    setRotY((v) => v + dx * 0.5)
    setRotX((v) => Math.max(-45, Math.min(45, v - dy * 0.3)))
    lastRef.current = { x: e.clientX, y: e.clientY }
  }
  const onUp = () => {
    draggingRef.current = false
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-muted to-secondary overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center touch-none"
        style={{ perspective: "1200px" }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <div
          className="relative"
          style={{
            width: "60%",
            height: "60%",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transition: auto ? "none" : "transform 0.05s linear",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 shadow-2xl"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "translateZ(20px)",
            }}
          />
          {/* Back */}
          <div
            className="absolute inset-0 bg-foreground/80"
            style={{ transform: "translateZ(-20px) rotateY(180deg)" }}
          />
          {/* Top edge */}
          <div
            className="absolute left-0 right-0 top-0 bg-foreground/40"
            style={{
              height: 40,
              transform: "rotateX(90deg) translateZ(20px)",
              transformOrigin: "top",
            }}
          />
          {/* Bottom edge */}
          <div
            className="absolute left-0 right-0 bottom-0 bg-foreground/30"
            style={{
              height: 40,
              transform: "rotateX(-90deg) translateZ(20px)",
              transformOrigin: "bottom",
            }}
          />
          {/* Left edge */}
          <div
            className="absolute top-0 bottom-0 left-0 bg-foreground/50"
            style={{
              width: 40,
              transform: "rotateY(-90deg) translateZ(20px)",
              transformOrigin: "left",
            }}
          />
          {/* Right edge */}
          <div
            className="absolute top-0 bottom-0 right-0 bg-foreground/50"
            style={{
              width: 40,
              transform: "rotateY(90deg) translateZ(20px)",
              transformOrigin: "right",
            }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <div className="bg-black/70 text-white text-[10px] uppercase tracking-wider px-2 py-1 flex items-center gap-1.5">
          <Box className="h-3 w-3" /> 3D View
        </div>
      </div>
      <button
        onClick={() => setAuto((a) => !a)}
        className="absolute bottom-3 right-3 bg-white text-foreground text-xs font-semibold px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5 shadow"
      >
        <RotateCw className={`h-3.5 w-3.5 ${auto ? "animate-spin" : ""}`} />
        {auto ? "Pause" : "Auto-rotate"}
      </button>
      <div className="absolute top-3 right-3 bg-white/90 text-foreground text-[10px] px-2 py-1 tracking-wide">
        Drag to rotate
      </div>
      <span className="sr-only">{alt}</span>
    </div>
  )
}
