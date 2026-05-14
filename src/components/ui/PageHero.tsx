import React from 'react'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[140px] pb-16 md:pt-[170px] md:pb-20 bg-gradient-to-br from-[#0038B8] via-[#003F9F] to-[#0A1F44] text-white">
      <svg
        aria-hidden="true"
        className="absolute right-[-40px] top-[20px] opacity-[0.08] hidden md:block"
        width="360"
        height="360"
        viewBox="0 0 64 64"
      >
        <g fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
          <polygon points="32,4 60,52 4,52" />
          <polygon points="32,60 4,12 60,12" />
        </g>
      </svg>
      <svg
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 right-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        height="40"
      >
        <path fill="#ffffff" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>
      <div className="relative max-w-[1200px] mx-auto px-6">
        {eyebrow && (
          <p className="text-white/80 text-[12px] font-semibold uppercase tracking-[0.2em] mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[36px] md:text-[52px] leading-tight font-semibold tracking-tight mb-4 max-w-[820px]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90 max-w-[760px]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
