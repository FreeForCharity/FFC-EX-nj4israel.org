import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { site } from '@/lib/site'
import { Calendar, Megaphone, Plane, HandHeart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Volunteer opportunities with New Jersey Support Israel — fundraising events, outreach, translation, and in-person delivery trips to Israel.',
}

const roles = [
  {
    icon: Calendar,
    title: 'Fundraising events',
    body: 'Help plan and run our concerts, dinners, and community gatherings here in New Jersey.',
  },
  {
    icon: Megaphone,
    title: 'Community outreach',
    body: 'Speak in synagogues, schools, and community groups about families we serve and how to help.',
  },
  {
    icon: Plane,
    title: 'Delivery trips to Israel',
    body: 'Join Officers and Board members on our 2–3 trips per year to deliver aid in person and visit the wounded.',
  },
  {
    icon: HandHeart,
    title: 'Translation & writing',
    body: 'Russian, Hebrew, and English skills welcome. Help us share stories and reach more families.',
  },
]

export default function VolunteerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get Involved"
        title="Volunteer with us."
        subtitle="There are many ways to be part of this work, whether you have an hour, an evening, or a week."
      />
      <section className="max-w-[1200px] mx-auto px-6 py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {roles.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E3E7F3] bg-white p-7 hover:shadow-md transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl bg-[#F3F6FF] text-[#0038B8] flex items-center justify-center mb-5"
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-3">
                {title}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#27315A]">{body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[#0A1F44] text-white p-8 md:p-10 text-center">
          <h2 className="font-display text-[26px] md:text-[30px] font-semibold mb-3">
            Ready to help?
          </h2>
          <p className="text-[16px] leading-relaxed text-white/85 max-w-[640px] mx-auto mb-6">
            Get in touch — tell us a little about your interests and availability and we&apos;ll
            match you with an opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${site.contact.email}?subject=Volunteer%20interest`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#0038B8] text-[15px] font-semibold hover:bg-[#FFE9A8] hover:text-[#0A1F44] transition-colors"
            >
              Email us
            </a>
            <a
              href={`tel:${site.contact.phoneTel}`}
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/70 text-white text-[15px] font-semibold hover:bg-white/10 transition-colors"
            >
              Call {site.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
