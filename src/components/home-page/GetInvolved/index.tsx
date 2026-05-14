import React from 'react'
import Link from 'next/link'
import { HandHeart, Mail, Megaphone, ArrowRight } from 'lucide-react'

const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    body: 'Help with fundraising events, outreach, translation, and in-person visits during trips to Israel.',
    href: '/volunteer',
    cta: 'Find a role',
  },
  {
    icon: Megaphone,
    title: 'Spread the word',
    body: 'Share our work with your community, synagogue, school, or workplace. Awareness drives support.',
    href: '/contact',
    cta: 'Request materials',
  },
  {
    icon: Mail,
    title: 'Partner with us',
    body: 'We collaborate with synagogues, foundations, and businesses on matching gift and sponsorship programs.',
    href: '/contact',
    cta: 'Start a conversation',
  },
]

const GetInvolved = () => {
  return (
    <section
      id="get-involved"
      className="bg-[#F7F8FC] py-20 md:py-24"
      aria-labelledby="get-involved-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[760px] mx-auto">
          <p className="text-[#0038B8] text-[13px] font-semibold uppercase tracking-[0.2em] mb-3">
            Get Involved
          </p>
          <h2
            id="get-involved-heading"
            className="font-display text-[34px] md:text-[44px] leading-tight font-semibold text-[#0A1F44] mb-5"
          >
            More than donations — community.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#27315A]">
            New Jersey Support Israel is built by neighbors helping neighbors. There are many ways
            to be part of that.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ways.map(({ icon: Icon, title, body, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl border border-[#E3E7F3] bg-white p-7 hover:border-[#0038B8] hover:shadow-lg transition-all flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl bg-[#F3F6FF] text-[#0038B8] flex items-center justify-center mb-5"
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-3">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#27315A] mb-5 flex-1">{body}</p>
              <span className="inline-flex items-center gap-2 text-[#0038B8] font-semibold text-[14px] group-hover:gap-3 transition-all">
                {cta}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
