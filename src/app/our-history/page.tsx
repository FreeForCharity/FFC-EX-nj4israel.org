import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Our History',
  description:
    'From an armored school bus in 2001 to two decades of humanitarian aid — the story of New Jersey Support Israel.',
}

const milestones = [
  {
    year: '2000',
    title: 'Charitable activity begins',
    body: 'A small group of New Jersey neighbors begins coordinating humanitarian aid to Israel under the informal name "New Jersey Committee Support Israel."',
  },
  {
    year: '2001',
    title: 'Armored school bus for Ofra',
    body: '$25,000 is raised to deliver an armored school bus for children of the Israeli settlement of Ofra near Jerusalem. The bus is delivered by Chanukah 2001 bearing the inscription: "To Israeli children from the Russian-speaking Americans and their friends."',
  },
  {
    year: '2002',
    title: 'Support for terror victims',
    body: 'The organization begins collecting funds specifically for families of terror victims — a focus that continues to this day.',
  },
  {
    year: 'July 2014',
    title: 'Formal incorporation',
    body: 'New Jersey Support Israel, Inc. is incorporated as a non-profit in the State of New Jersey.',
  },
  {
    year: 'March 2015',
    title: '501(c)(3) recognition',
    body: 'The IRS recognizes New Jersey Support Israel as a 501(c)(3) charitable organization (EIN 47-1257878).',
  },
  {
    year: '2008–2023',
    title: 'Sixteen years of help',
    body: 'During this period, New Jersey Support Israel provides assistance to 762 families, distributing a total of $576,458 to terror victims, wounded IDF soldiers, and their families.',
  },
]

export default function OurHistoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="From a single school bus to two decades of humanitarian aid."
        subtitle="Our history is one of small, persistent acts of solidarity — and the families on both sides of the ocean who made it possible."
      />
      <section className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <ol className="relative border-l-2 border-[#E3E7F3] pl-8 space-y-10">
          {milestones.map((m) => (
            <li key={m.year + m.title} className="relative">
              <span
                className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-[#0038B8] border-4 border-white shadow"
                aria-hidden="true"
              />
              <p className="text-[#0038B8] text-[13px] font-semibold uppercase tracking-[0.18em] mb-1">
                {m.year}
              </p>
              <h2 className="font-display text-[24px] font-semibold text-[#0A1F44] mb-2">
                {m.title}
              </h2>
              <p className="text-[16px] leading-relaxed text-[#27315A]">{m.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-[16px] text-[#27315A] italic">
          Your feedback is very important to us. Please contact us regarding sponsorship
          opportunities, share your ideas, inquire about volunteering — and spread the word.
        </p>
      </section>
    </main>
  )
}
