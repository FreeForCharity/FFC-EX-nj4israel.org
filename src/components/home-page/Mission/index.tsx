import React from 'react'
import { Heart, Users, Flag } from 'lucide-react'

const pillars = [
  {
    icon: Heart,
    title: 'Financial Aid',
    body: 'We provide direct financial assistance to families of terror victims and wounded IDF soldiers while they wait for long-delayed government support.',
  },
  {
    icon: Users,
    title: 'Solidarity in Person',
    body: 'Officers and Board members travel to Israel two to three times a year to deliver aid in person, visit the wounded, and raise their spirits.',
  },
  {
    icon: Flag,
    title: 'Public Advocacy',
    body: 'We participate in public events in support of the safety and security of the people of Israel and amplify their stories here in New Jersey.',
  },
]

const Mission = () => {
  return (
    <section id="mission" className="bg-white py-20 md:py-24" aria-labelledby="mission-heading">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[820px] mx-auto">
          <p className="text-[#0038B8] text-[13px] font-semibold uppercase tracking-[0.2em] mb-3">
            Our Mission
          </p>
          <h2
            id="mission-heading"
            className="font-display text-[34px] md:text-[44px] leading-tight font-semibold text-[#0A1F44] mb-5"
          >
            Direct help. Personal delivery. Lasting solidarity.
          </h2>
          <p className="text-[17px] md:text-[18px] leading-relaxed text-[#27315A]">
            New Jersey Support Israel exists to ease the burden on families navigating the hardest
            moments of their lives — and to make sure no wounded soldier or grieving family feels
            forgotten.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E3E7F3] bg-[#F7F8FC] p-7 hover:shadow-lg hover:border-[#0038B8] transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl bg-[#0038B8] text-white flex items-center justify-center mb-5"
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-3">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#27315A]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
