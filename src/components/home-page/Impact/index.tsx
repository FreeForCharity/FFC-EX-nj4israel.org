import React from 'react'

interface Stat {
  value: string
  label: string
  sub?: string
}

const stats: Stat[] = [
  { value: '762', label: 'Families assisted', sub: '2008–2023' },
  { value: '$576,458', label: 'Distributed directly', sub: '16 years of giving' },
  { value: '100%', label: 'Of donations', sub: 'Reach the families' },
  { value: '2–3×', label: 'Trips to Israel', sub: 'Per year, in person' },
]

const Impact = () => {
  return (
    <section
      id="impact"
      className="relative bg-[#0A1F44] text-white py-20 md:py-24 overflow-hidden"
      aria-labelledby="impact-heading"
    >
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="stars" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#ffffff" strokeWidth="1.5">
                <polygon points="60,18 96,82 24,82" />
                <polygon points="60,102 24,38 96,38" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-[820px] mb-12">
          <p className="text-[#7AA9FF] text-[13px] font-semibold uppercase tracking-[0.2em] mb-3">
            Our Impact
          </p>
          <h2
            id="impact-heading"
            className="font-display text-[34px] md:text-[44px] leading-tight font-semibold mb-5"
          >
            Sixteen years of help that arrives where it&apos;s needed most.
          </h2>
          <p className="text-[17px] md:text-[18px] leading-relaxed text-white/85">
            In the past sixteen years (2008–2023), New Jersey Support Israel has provided assistance
            to 762 families — distributing a total of $576,458 directly to terror victims and
            wounded IDF soldiers and their families.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="font-display text-[40px] md:text-[44px] font-semibold text-white leading-none mb-2">
                {s.value}
              </div>
              <div className="text-[15px] font-semibold text-white">{s.label}</div>
              {s.sub && <div className="text-[13px] text-white/65 mt-1">{s.sub}</div>}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-7">
            <h3 className="font-display text-[22px] font-semibold mb-3">2023 in numbers</h3>
            <ul className="space-y-2 text-[15px] text-white/85">
              <li>
                <span className="text-white font-semibold">66 families</span> received direct
                assistance — $54,600 distributed.
              </li>
              <li>
                <span className="text-white font-semibold">7 additional families</span> supported
                with $7,000 in emergency aid.
              </li>
              <li>
                <span className="text-white font-semibold">$15,768</span> contributed to Israeli
                non-profit organizations responding to the war.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-7">
            <h3 className="font-display text-[22px] font-semibold mb-3">2022 in numbers</h3>
            <ul className="space-y-2 text-[15px] text-white/85">
              <li>
                <span className="text-white font-semibold">51 families</span> received direct
                assistance — $52,926 distributed.
              </li>
              <li>
                Ukraine refugee support and additional emergency aid provided through partner
                organizations.
              </li>
              <li>
                In-person delivery trips by Officers and Board members made throughout the year.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
