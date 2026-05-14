import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'New Jersey Support Israel is a 501(c)(3) humanitarian relief organization providing direct aid to families of terror victims and wounded IDF soldiers in Israel.',
}

const links = [
  { href: '/operating-principles', label: 'Operating Principles' },
  { href: '/our-history', label: 'Our History' },
  { href: '/leadership', label: 'Our Leadership' },
  { href: '/our-partners', label: 'Our Partners' },
  { href: '/media-coverage', label: 'Media Coverage' },
  { href: '/financial-reports', label: 'Financial Reports' },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A 501(c)(3) humanitarian organization rooted in New Jersey."
        subtitle="We provide financial aid and moral support to families of terror victims and wounded IDF soldiers in Israel — directly, transparently, and with 100% of donated funds reaching the families we serve."
      />
      <Prose>
        <p>
          New Jersey Support Israel was incorporated as a non-profit in the State of New Jersey in
          July 2014 and recognized by the IRS as a 501(c)(3) charitable organization in March 2015.
          Our roots, however, go back to 2000, when a small group of New Jersey neighbors began
          coordinating humanitarian aid to Israel.
        </p>
        <p>
          Our work focuses on three commitments: provide financial aid to families of terror victims
          and wounded IDF soldiers in Israel; express our solidarity and compassion by raising the
          spirit of the wounded — often visiting in person; and participate in public events in
          support of the safety and security of the people of Israel.
        </p>
        <h2>Where to learn more</h2>
        <p>
          Each area of our organization has its own page. Explore how we operate, who leads us, how
          we&apos;ve grown, and how we&apos;re funded.
        </p>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </Prose>
    </main>
  )
}
