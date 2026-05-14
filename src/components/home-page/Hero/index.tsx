import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-[120px] pb-[88px] md:pt-[160px] md:pb-[120px]"
      aria-labelledby="hero-heading"
    >
      {/* Layered blue background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0038B8] via-[#003F9F] to-[#0A1F44]" />
      {/* Star of David watermark */}
      <svg
        aria-hidden="true"
        className="absolute right-[-80px] top-[40px] opacity-[0.08] hidden md:block"
        width="520"
        height="520"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
          <polygon points="32,4 60,52 4,52" />
          <polygon points="32,60 4,12 60,12" />
        </g>
      </svg>
      {/* Soft white wave at bottom */}
      <svg
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 right-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        height="60"
      >
        <path fill="#ffffff" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-[820px]">
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-white/15 text-white text-[12px] font-semibold uppercase tracking-[0.18em]">
            Humanitarian Relief · Since 2014
          </span>
          <h1
            id="hero-heading"
            className="font-display text-white text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] font-semibold tracking-tight mb-6"
          >
            Standing with the families of Israel&apos;s wounded and bereaved.
          </h1>
          <p className="text-white/90 text-[18px] md:text-[21px] leading-relaxed max-w-[680px] mb-8">
            New Jersey Support Israel is a 501(c)(3) humanitarian organization providing direct
            financial aid and moral support to families of terror victims and wounded IDF soldiers
            in Israel. <span className="font-semibold text-white">100% of every donation</span>{' '}
            reaches the families we serve.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#0038B8] text-[16px] font-semibold hover:bg-[#FFE9A8] hover:text-[#0A1F44] transition-colors shadow-lg"
            >
              Make a Donation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-white/70 text-white text-[16px] font-semibold hover:bg-white/10 transition-colors"
            >
              Learn About Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
