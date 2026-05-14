import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { site } from '@/lib/site'
import { ExternalLink, Mail, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Donate to New Jersey Support Israel via PayPal Giving Fund, The Donors Fund (DAF), Venmo, or check. 100% of donations reach families of terror victims and wounded IDF soldiers.',
}

const promises = [
  '100% of your donation is distributed to families in Israel.',
  'Direct in-person delivery whenever possible.',
  'Privacy protected — names and amounts are never published without permission.',
  'Eligible for employer matching programs.',
  'Anonymous donations welcome.',
]

interface Method {
  name: string
  href?: string
  badge?: string
  description: React.ReactNode
  cta: string
}

const methods: Method[] = [
  {
    name: 'PayPal Giving Fund',
    href: site.donate.paypal,
    badge: 'Recommended · No fees',
    description: (
      <>
        PayPal covers our credit card processing fees, so 100% of your gift reaches families. PayPal
        Giving Fund issues tax receipts automatically.
      </>
    ),
    cta: 'Give via PayPal Giving Fund',
  },
  {
    name: 'The Donors Fund (DAF)',
    href: site.donate.donorsFund,
    badge: 'Donor-Advised Funds',
    description: (
      <>
        Transfer from your Donor-Advised Fund through The Donors Fund. Ideal for larger gifts and
        immediate tax deductions.
      </>
    ),
    cta: 'Give from a DAF',
  },
  {
    name: 'Venmo',
    href: site.donate.venmoUrl,
    badge: '1.9% + 10¢',
    description: (
      <>
        Send to <strong className="text-[#0A1F44]">{site.donate.venmoHandle}</strong> on Venmo.
        Small processing fee applies.
      </>
    ),
    cta: 'Open Venmo',
  },
  {
    name: 'Check or Money Order',
    description: (
      <>
        Make payable to <strong className="text-[#0A1F44]">{site.legalName}</strong> and mail to:
        <br />
        {site.contact.poBox}
        <br />
        {site.contact.cityState}
      </>
    ),
    cta: 'Mailing address above',
  },
]

export default function DonatePage() {
  return (
    <main>
      <PageHero
        eyebrow="Stand With Israel"
        title="Your donation reaches a family in Israel."
        subtitle="Every dollar collected is distributed to families of terror victims and wounded IDF soldiers. Choose the way that works best for you."
      />

      <section className="max-w-[1200px] mx-auto px-6 py-14 md:py-20">
        {/* Promises */}
        <div className="rounded-2xl border border-[#E3E7F3] bg-[#F7F8FC] p-7 mb-12">
          <h2 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-5">
            What your donation means
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {promises.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <CheckCircle2
                  className="w-5 h-5 text-[#0038B8] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[15px] text-[#0A1F44] leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Methods */}
        <div className="grid gap-6 md:grid-cols-2">
          {methods.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-[#E3E7F3] bg-white p-7 hover:shadow-lg hover:border-[#0038B8] transition-all flex flex-col"
            >
              {m.badge && (
                <span className="inline-block self-start mb-3 px-2.5 py-1 rounded-full bg-[#F3F6FF] text-[#0038B8] text-[11px] font-semibold uppercase tracking-wider">
                  {m.badge}
                </span>
              )}
              <h3 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-3">
                {m.name}
              </h3>
              <div className="text-[15px] leading-relaxed text-[#27315A] mb-6 flex-1">
                {m.description}
              </div>
              {m.href ? (
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0038B8] text-white text-[14px] font-semibold hover:bg-[#002a8c] transition-colors self-start"
                >
                  {m.cta} <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              ) : (
                <span className="text-[14px] font-semibold text-[#0038B8]">{m.cta}</span>
              )}
            </div>
          ))}
        </div>

        {/* Earmark / questions */}
        <div className="mt-12 rounded-2xl bg-[#0A1F44] text-white p-8 md:p-10">
          <h2 className="font-display text-[24px] md:text-[28px] font-semibold mb-3">
            Want to earmark your gift?
          </h2>
          <p className="text-[16px] leading-relaxed text-white/85 mb-5 max-w-[760px]">
            You can specify a particular cause — wounded lone soldiers, a family you&apos;ve heard
            about, a particular community — and we&apos;ll honor your request. Just let us know.
          </p>
          <a
            href={`mailto:${site.contact.email}?subject=Donation%20inquiry`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0038B8] text-[15px] font-semibold hover:bg-[#FFE9A8] hover:text-[#0A1F44] transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            Contact us about your donation
          </a>
          <p className="mt-5 text-[13px] text-white/70">
            New Jersey Support Israel, Inc. · EIN {site.ein} · Contributions are tax-deductible to
            the fullest extent allowed by law.
          </p>
        </div>
      </section>
    </main>
  )
}
