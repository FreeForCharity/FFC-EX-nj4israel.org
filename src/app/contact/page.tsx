import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { site } from '@/lib/site'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact New Jersey Support Israel — by email, phone, or mail. We welcome ideas, sponsorship inquiries, volunteer interest, and stories of families who need help.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd love to hear from you."
        subtitle="Ideas, suggestions, offers to help, or information about those who urgently need our help — we welcome them all."
      />
      <section className="max-w-[1200px] mx-auto px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Direct contact info */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-[#0A1F44] mb-2">
              Reach us directly
            </h2>
            <p className="text-[16px] leading-relaxed text-[#27315A] mb-6">
              The fastest way to reach us is by email or phone. We typically respond within a few
              business days.
            </p>

            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-start gap-4 rounded-2xl border border-[#E3E7F3] bg-white p-6 hover:border-[#0038B8] hover:shadow-md transition-all"
            >
              <Mail className="w-7 h-7 text-[#0038B8] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[#27315A] mb-1">
                  Email
                </p>
                <p className="text-[17px] font-semibold text-[#0A1F44]">{site.contact.email}</p>
                <p className="text-[14px] text-[#27315A] mt-1">
                  Best for sponsorship inquiries, volunteer interest, and partnership questions.
                </p>
              </div>
            </a>

            <a
              href={`tel:${site.contact.phoneTel}`}
              className="flex items-start gap-4 rounded-2xl border border-[#E3E7F3] bg-white p-6 hover:border-[#0038B8] hover:shadow-md transition-all"
            >
              <Phone className="w-7 h-7 text-[#0038B8] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[#27315A] mb-1">
                  Phone
                </p>
                <p className="text-[17px] font-semibold text-[#0A1F44]">{site.contact.phone}</p>
                <p className="text-[14px] text-[#27315A] mt-1">
                  Speak directly with a volunteer board member.
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-[#E3E7F3] bg-white p-6">
              <MapPin className="w-7 h-7 text-[#0038B8] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[#27315A] mb-1">
                  Mailing Address
                </p>
                <p className="text-[17px] font-semibold text-[#0A1F44]">
                  {site.legalName}
                  <br />
                  {site.contact.poBox}
                  <br />
                  {site.contact.cityState}
                </p>
                <p className="text-[14px] text-[#27315A] mt-1">
                  Make checks payable to <em>{site.legalName}</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Social + EIN aside */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#E3E7F3] bg-[#F7F8FC] p-7">
              <h2 className="font-display text-[22px] font-semibold text-[#0A1F44] mb-3">
                Follow our work
              </h2>
              <p className="text-[15px] leading-relaxed text-[#27315A] mb-5">
                We share stories and updates on social media — including news from our trips to
                Israel.
              </p>
              <div className="flex gap-3">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-[#0038B8] text-white flex items-center justify-center hover:bg-[#002a8c] transition-colors"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={site.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-11 h-11 rounded-full bg-[#0038B8] text-white flex items-center justify-center hover:bg-[#002a8c] transition-colors"
                >
                  <FaXTwitter className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-[#0038B8] text-white flex items-center justify-center hover:bg-[#002a8c] transition-colors"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0A1F44] text-white p-7">
              <h2 className="font-display text-[20px] font-semibold mb-2">Donation questions?</h2>
              <p className="text-[15px] leading-relaxed text-white/85 mb-4">
                Earmark a gift, ask about employer matching, or arrange a DAF transfer.
              </p>
              <a
                href="/donate"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-[#0038B8] text-[14px] font-semibold hover:bg-[#FFE9A8] hover:text-[#0A1F44] transition-colors"
              >
                See ways to give
              </a>
              <p className="mt-4 text-[12px] text-white/70">
                EIN {site.ein} · 501(c)(3) charitable non-profit
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
