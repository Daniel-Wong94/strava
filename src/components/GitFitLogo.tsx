interface GitFitLogoProps {
  width?: number
  variant?: 'light' | 'dark'
}

export function GitFitLogo({ width = 172, variant = 'light' }: GitFitLogoProps) {
  const height = Math.round(width * (44 / 172))
  const textFill = variant === 'dark' ? 'white' : '#111827'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 172 44"
      width={width}
      height={height}
      aria-label="GitFit"
    >
      <defs>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap');
          .cursor { animation: blink 1.1s step-end infinite; }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </defs>
      <text
        x="0"
        y="36"
        fontFamily="'JetBrains Mono', 'Courier New', monospace"
        fontSize="38"
        fontWeight="800"
        fill={textFill}
        letterSpacing="-1"
      >
        Git<tspan fill="#FC4C02">Fit</tspan>
      </text>
      <rect className="cursor" x="144" y="4" width="22" height="36" rx="2" fill="#FC4C02" />
    </svg>
  )
}
