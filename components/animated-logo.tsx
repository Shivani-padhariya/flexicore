"use client"

export function AnimatedLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? "scale-75" : ""}`}>
      <svg
        viewBox="0 0 200 60"
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flexicore animated logo"
      >
        {/* Red top-left and bottom-right bracket */}
        <path
          d="M 8 4 L 2 4 L 2 16"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="square"
          className="origin-top-left"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: 24,
            animation: "drawIn 1s ease-out 0.1s forwards",
          }}
        />
        <path
          d="M 192 44 L 198 44 L 198 56"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="square"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: 24,
            animation: "drawIn 1s ease-out 0.3s forwards",
          }}
        />

        {/* Letter animation using text */}
        <text
          x="100"
          y="30"
          textAnchor="middle"
          className="fill-foreground"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "1px",
            opacity: 0,
            animation: "fadeInLetters 0.8s ease-out 0.5s forwards",
          }}
        >
          FLEXICORE
          <tspan
            className="fill-primary"
            style={{ fontSize: "11px", baselineShift: "super" }}
            dx="1"
            dy="-6"
          >
            ®
          </tspan>
        </text>

        <text
          x="100"
          y="48"
          textAnchor="middle"
          className="fill-primary"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "9px",
            fontWeight: 500,
            letterSpacing: "3.5px",
            opacity: 0,
            animation: "fadeInLetters 0.8s ease-out 0.8s forwards",
          }}
        >
          SOLID SURFACE
        </text>
      </svg>

      <style jsx>{`
        @keyframes drawIn {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeInLetters {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
