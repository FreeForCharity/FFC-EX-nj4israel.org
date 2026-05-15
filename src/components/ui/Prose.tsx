import React from 'react'

interface ProseProps {
  children: React.ReactNode
  className?: string
}

/**
 * Shared typographic container for long-form content pages
 * (About, History, Operating Principles, etc.).
 */
export default function Prose({ children, className = '' }: ProseProps) {
  return (
    <div
      className={`max-w-3xl mx-auto px-6 py-14 md:py-20 text-[17px] leading-[1.75] text-[#27315A] [&_h2]:font-display [&_h2]:text-[28px] [&_h2]:md:text-[32px] [&_h2]:font-semibold [&_h2]:text-[#0A1F44] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-[22px] [&_h3]:font-semibold [&_h3]:text-[#0A1F44] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_a]:text-[#0038B8] [&_a]:underline hover:[&_a]:text-[#002a8c] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-[#0A1F44] ${className}`}
    >
      {children}
    </div>
  )
}
