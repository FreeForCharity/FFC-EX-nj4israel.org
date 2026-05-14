import React from 'react'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * SVG mark + wordmark for New Jersey Support Israel.
 * Uses Israeli flag blue (#0038B8) with a Star of David inside a shield silhouette
 * suggesting protection/support.
 */
export default function Logo({ variant = 'dark', className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { mark: 28, text: 14, sub: 9 },
    md: { mark: 40, text: 18, sub: 11 },
    lg: { mark: 56, text: 24, sub: 14 },
  } as const
  const s = sizes[size]
  const textColor = variant === 'light' ? '#ffffff' : '#0A1F44'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.85)' : '#0038B8'
  const markFill = '#0038B8'

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="New Jersey Support Israel">
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <path
          d="M32 2 L58 12 V32 C58 47 46 58 32 62 C18 58 6 47 6 32 V12 L32 2 Z"
          fill={markFill}
        />
        {/* Star of David - two overlapping triangles */}
        <g fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round">
          <polygon points="32,16 44,36 20,36" />
          <polygon points="32,46 20,26 44,26" />
        </g>
      </svg>
      <div className="leading-tight">
        <div
          className="font-semibold tracking-tight"
          style={{ color: textColor, fontSize: s.text }}
        >
          New Jersey Support Israel
        </div>
        <div
          className="uppercase tracking-[0.18em] font-medium"
          style={{ color: subColor, fontSize: s.sub }}
        >
          Humanitarian Relief · 501(c)(3)
        </div>
      </div>
    </div>
  )
}
