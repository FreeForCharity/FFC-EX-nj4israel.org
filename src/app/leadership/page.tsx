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
  return (
    <div className="rounded-2xl border border-[#E3E7F3] bg-white p-6 hover:shadow-md transition-all">
      <div
        className="w-14 h-14 rounded-full bg-[#0038B8] text-white flex items-center justify-center font-display text-[22px] font-semibold mb-4"
        aria-hidden="true"
      >
        {name
          .split(' ')
          .map((n) => n[0])
          .slice(0, 2)
          .join('')}
      </div>
      <h3 className="font-display text-[20px] font-semibold text-[#0A1F44] mb-1">{name}</h3>
      <p className="text-[14px] text-[#27315A]">{role}</p>
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
