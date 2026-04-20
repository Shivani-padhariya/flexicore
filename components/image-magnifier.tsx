"use client"

import { useRef, useState } from "react"

type Props = {
  src: string
  alt: string
  zoom?: number
  className?: string
}

export function ImageMagnifier({ src, alt, zoom = 2.5, className = "" }: Props) {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const lensSize = 160

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const halfLens = lensSize / 2
    const lensX = Math.max(halfLens, Math.min(x, rect.width - halfLens))
    const lensY = Math.max(halfLens, Math.min(y, rect.height - halfLens))
    setPos({ x: lensX, y: lensY })

    const bgX = ((lensX - halfLens) / (rect.width - lensSize)) * 100
    const bgY = ((lensY - halfLens) / (rect.height - lensSize)) * 100
    setBgPos({ x: bgX, y: bgY })
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden cursor-crosshair select-none ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
    >
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" draggable={false} />
      {show && (
        <div
          className="pointer-events-none absolute rounded-full border-2 border-white shadow-xl"
          style={{
            width: lensSize,
            height: lensSize,
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${zoom * 100}%`,
            backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
            boxShadow: "0 0 0 9999px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.3)",
          }}
        />
      )}
      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] uppercase tracking-wider px-2 py-1">
        Hover to zoom
      </div>
    </div>
  )
}
