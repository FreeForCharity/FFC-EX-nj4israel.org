import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Our Leadership',
  description:
    'The volunteer Executive Committee and Board of Directors leading New Jersey Support Israel.',
}

const executive = [
  { name: 'Inna Arolovich', role: 'President' },
  { name: 'Michael Levitt', role: 'Vice President' },
  {
    name: 'Anna Grinberg',
    role: 'Chief Financial Officer & Fundraising Events Organizer',
  },
]

const board = [
  { name: 'Eugene Weinstein', role: 'Chairman' },
  { name: 'Anna Rozenberg', role: 'Director' },
  { name: 'Igor V. Yeliseyev', role: 'Director' },
  { name: 'Larisa Brook', role: 'Director' },
  { name: 'Zina Etkina', role: 'Director' },
]

function PersonCard({ name, role }: { name: string; role: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="rounded-2xl border border-[#E3E7F3] bg-white p-6 hover:shadow-md hover:border-[#0038B8]/30 transition-all flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0038B8] via-[#003F9F] to-[#0A1F44] flex items-center justify-center font-display text-[24px] font-bold text-white flex-shrink-0 shadow-sm"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <h3 className="font-display text-[19px] font-semibold text-[#0A1F44] leading-tight">
            {name}
          </h3>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#0038B8] text-[12px] font-semibold tracking-wide">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function LeadershipPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Team"
        title="Leadership"
        subtitle="Officers and Board members serve as unpaid volunteers and cover administrative expenses personally."
      />
      <section className="max-w-[1200px] mx-auto px-6 py-14 md:py-20 space-y-14">
        <div>
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-[#0A1F44] mb-6">
            Executive Committee
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {executive.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-[#0A1F44] mb-6">
            Board of Directors
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {board.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
