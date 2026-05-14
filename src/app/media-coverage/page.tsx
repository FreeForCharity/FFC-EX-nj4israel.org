import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media Coverage',
  description:
    'Articles and press mentioning New Jersey Support Israel and our work supporting families of terror victims and wounded IDF soldiers.',
}

interface MediaEntry {
  publication: string
  title: string
  author?: string
  date: string
  url?: string
}

const entries: MediaEntry[] = [
  {
    publication: 'NEWSWE No. 464',
    title: 'Jewish People is One Family',
    author: 'Eleonora Shifrin',
    date: 'September 18–23, 2014',
  },
  {
    publication: 'Jewish Link of New Jersey',
    title: 'We Stand With Israel',
    author: 'JLNJ Staff',
    date: 'November 12, 2015',
    url: 'https://jewishlink.news/we-stand-with-israel/',
  },
  {
    publication: 'Jewish Standard',
    title: 'Charity Israel Solidarity Concert',
    date: 'December 4, 2015',
    url: 'https://www.scribd.com/document/292093037/Jewish-Standard-December-4-2015',
  },
]

export default function MediaCoveragePage() {
  return (
    <main>
      <PageHero
        eyebrow="Press"
        title="Media Coverage"
        subtitle="Selected articles and press mentions documenting our work."
      />
      <section className="max-w-[820px] mx-auto px-6 py-14 md:py-20">
        <ul className="space-y-6">
          {entries.map((e) => {
            const content = (
              <>
                <p className="text-[#0038B8] text-[13px] font-semibold uppercase tracking-[0.18em] mb-1">
                  {e.publication}
                </p>
                <h2 className="font-display text-[22px] md:text-[24px] font-semibold text-[#0A1F44] mb-2 group-hover:text-[#0038B8] transition-colors">
                  {e.title}
                </h2>
                <p className="text-[14px] text-[#27315A]">
                  {e.author ? `${e.author} · ` : ''}
                  {e.date}
                </p>
              </>
            )
            return (
              <li
                key={e.publication + e.title}
                className="rounded-2xl border border-[#E3E7F3] bg-white p-6 hover:shadow-md transition-all"
              >
                {e.url ? (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex justify-between items-start gap-4"
                  >
                    <div className="flex-1">{content}</div>
                    <ExternalLink
                      className="w-5 h-5 text-[#0038B8] flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Open article in a new tab</span>
                  </a>
                ) : (
                  <div>{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
