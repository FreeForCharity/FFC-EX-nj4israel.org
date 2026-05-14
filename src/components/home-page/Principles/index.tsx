import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const principles = [
  '100% of collected funds are distributed to victims and wounded soldiers.',
  'Help is delivered directly, in person whenever possible.',
  'Board and officers serve as unpaid volunteers and cover administrative costs personally.',
  'Aid is prioritized for the most recent terror victims and recently wounded soldiers.',
  'Support bridges the gap while families wait for delayed government assistance.',
  'Special focus on lone soldiers with no family in Israel.',
  'No discrimination by ethnic or religious background — we support Druze and Bedouin families as well.',
  'Detailed financial reports are publicly available.',
]

const Principles = () => {
  return (
    <section
      id="principles"
      className="bg-[#F7F8FC] py-20 md:py-24"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="text-[#0038B8] text-[13px] font-semibold uppercase tracking-[0.2em] mb-3">
            How We Operate
          </p>
          <h2
            id="principles-heading"
            className="font-display text-[34px] md:text-[42px] leading-tight font-semibold text-[#0A1F44] mb-5"
          >
            Principles you can verify in our books.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#27315A] mb-6">
            We operate with discipline so donors can be confident their generosity reaches the
            people who need it. These principles guide every decision we make.
          </p>
          <Link
            href="/operating-principles"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#0038B8] text-white text-[15px] font-semibold hover:bg-[#002a8c] transition-colors"
          >
            Read our full Operating Principles
          </Link>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {principles.map((text) => (
              <li key={text} className="flex gap-3 items-start">
                <span
                  className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#0038B8] text-white flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-[15px] leading-snug text-[#0A1F44]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Principles
