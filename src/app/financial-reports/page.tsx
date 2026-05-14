import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { site } from '@/lib/site'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Reports',
  description: 'Year-by-year summary of funds raised and distributed by New Jersey Support Israel.',
}

interface YearRow {
  year: string
  raised?: string
  families?: string
  distributed?: string
  notes?: string
}

const rows: YearRow[] = [
  {
    year: '2023',
    raised: '$125,897.68',
    families: '66',
    distributed: '$54,600',
    notes:
      '$7,000 distributed among 7 additional families; $15,768 contributed to Israeli non-profit organizations responding to the war.',
  },
  {
    year: '2022',
    raised: '$76,620.30',
    families: '48',
    distributed: '$51,400',
    notes: 'Ukraine refugee support of $4,600 also provided.',
  },
  {
    year: '2021',
    raised: '$27,197.20',
    families: '43',
    distributed: '$26,605',
  },
  {
    year: '2016',
    raised: '$64,173',
    families: '83',
    distributed: '$69,560',
  },
]

export default function FinancialReportsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Transparency"
        title="Financial Reports"
        subtitle="100% of collected funds are distributed to terror victims and wounded IDF soldiers. Below is a summary of our most recent years."
      />
      <section className="max-w-[1100px] mx-auto px-6 py-14 md:py-20">
        <div className="overflow-x-auto rounded-2xl border border-[#E3E7F3] bg-white">
          <table className="w-full text-left">
            <caption className="sr-only">
              Annual fundraising and distribution summary for New Jersey Support Israel
            </caption>
            <thead className="bg-[#F7F8FC] text-[#0A1F44]">
              <tr>
                <th scope="col" className="px-5 py-4 text-[13px] uppercase tracking-wider">
                  Year
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] uppercase tracking-wider">
                  Raised
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] uppercase tracking-wider">
                  Families helped
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] uppercase tracking-wider">
                  Distributed
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.year}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFBFE]'}
                  style={{ borderTop: '1px solid #E3E7F3' }}
                >
                  <td className="px-5 py-4 font-semibold text-[#0A1F44]">{r.year}</td>
                  <td className="px-5 py-4 text-[#0A1F44]">{r.raised ?? '—'}</td>
                  <td className="px-5 py-4 text-[#27315A]">{r.families ?? '—'}</td>
                  <td className="px-5 py-4 text-[#27315A]">{r.distributed ?? '—'}</td>
                  <td className="px-5 py-4 text-[14px] text-[#27315A]">{r.notes ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E3E7F3] bg-white p-7">
            <h2 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-3">
              Sixteen-year totals
            </h2>
            <p className="text-[16px] leading-relaxed text-[#27315A]">
              From 2008 through 2023, New Jersey Support Israel provided assistance to{' '}
              <strong className="text-[#0A1F44]">762 families</strong>, distributing a total of{' '}
              <strong className="text-[#0A1F44]">$576,458</strong> directly to terror victims,
              wounded IDF soldiers, and their families.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E3E7F3] bg-white p-7">
            <h2 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-3">
              Independent data
            </h2>
            <p className="text-[16px] leading-relaxed text-[#27315A] mb-4">
              We&apos;re continuing to publish detailed reports for recent years. In the meantime,
              raw filings and organizational data are available through CauseIQ.
            </p>
            <a
              href={`https://www.causeiq.com/organizations/new-jersey-support-israel,${site.ein.replace('-', '')}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0038B8] text-white text-[14px] font-semibold hover:bg-[#002a8c] transition-colors"
            >
              View on CauseIQ <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-[14px] text-[#27315A] italic">
          Detailed financial reports may also be obtained from the New Jersey Office of the Attorney
          General. EIN {site.ein}.
        </p>
      </section>
    </main>
  )
}
