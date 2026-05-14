import React from 'react'
import Link from 'next/link'
import { site } from '@/lib/site'

const DonateCTA = () => {
  return (
    <section
      id="donate-cta"
      className="relative bg-white py-20 md:py-24"
      aria-labelledby="donate-cta-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0038B8] to-[#002a8c] text-white p-10 md:p-14">
          <div className="absolute right-[-80px] top-[-40px] opacity-10" aria-hidden="true">
            <svg width="320" height="320" viewBox="0 0 64 64">
              <g fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
                <polygon points="32,4 60,52 4,52" />
                <polygon points="32,60 4,12 60,12" />
              </g>
            </svg>
          </div>

          <div className="relative max-w-[760px]">
            <p className="text-white/80 text-[13px] font-semibold uppercase tracking-[0.2em] mb-3">
              Stand With Israel
            </p>
            <h2
              id="donate-cta-heading"
              className="font-display text-[32px] md:text-[44px] leading-tight font-semibold mb-5"
            >
              Your gift goes directly to a family in Israel.
            </h2>
            <p className="text-[17px] md:text-[18px] leading-relaxed text-white/90 mb-8">
              Donate through PayPal Giving Fund (no processing fees), The Donors Fund (DAF), or
              Venmo. Every dollar collected is distributed to families of terror victims and wounded
              IDF soldiers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-white text-[#0038B8] text-[16px] font-semibold hover:bg-[#FFE9A8] hover:text-[#0A1F44] transition-colors shadow-lg"
              >
                Donate Now
              </Link>
              <a
                href={site.donate.paypal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-white/70 text-white text-[16px] font-semibold hover:bg-white/10 transition-colors"
              >
                Give via PayPal
              </a>
            </div>
            <p className="mt-5 text-[13px] text-white/70">
              EIN {site.ein} · Donations are tax-deductible to the fullest extent allowed by law.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateCTA
