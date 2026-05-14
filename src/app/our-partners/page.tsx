import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = {
  title: 'Our Partners',
  description:
    'Organizations whose vision, goals, and operating principles align with New Jersey Support Israel.',
}

const partners = [
  'New York Association of Jews from the Former Soviet Union',
  'American Association of Jews from FSU, Ohio Chapter',
  'Boston Supports Israel',
  'Shalom Israel Fund, Chicago',
]

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Together"
        title="Our Partners"
        subtitle="We collaborate with organizations whose vision, goals, and operating principles closely align with our own."
      />
      <Prose>
        <p>
          The groups below share — to a substantial degree — a similar vision, similar goals, and
          similar operating principles to ours. Many other organizations also do meaningful work for
          Israel; not listing them here merely means that their operating principles differ
          substantially from ours.
        </p>
        <ul>
          {partners.map((p) => (
            <li key={p}>
              <strong>{p}</strong>
            </li>
          ))}
        </ul>
        <p>
          If your organization shares our operating principles and you&apos;d like to explore a
          partnership, we&apos;d welcome the conversation.
        </p>
      </Prose>
    </main>
  )
}
