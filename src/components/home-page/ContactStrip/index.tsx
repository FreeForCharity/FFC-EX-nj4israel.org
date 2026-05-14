import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '@/lib/site'

const ContactStrip = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-20" aria-labelledby="contact-heading">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-[#0038B8] text-[13px] font-semibold uppercase tracking-[0.2em] mb-3">
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="font-display text-[32px] md:text-[40px] leading-tight font-semibold text-[#0A1F44] mb-4"
            >
              Questions, partnerships, or a family in need?
            </h2>
            <p className="text-[16px] leading-relaxed text-[#27315A] mb-6">
              We welcome ideas, sponsorship inquiries, volunteer interest, and information about
              those who urgently need our help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#0038B8] text-white text-[15px] font-semibold hover:bg-[#002a8c] transition-colors"
            >
              Contact us
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-[#E3E7F3] bg-[#F7F8FC] p-6">
              <MapPin className="w-6 h-6 text-[#0038B8] mb-3" aria-hidden="true" />
              <p className="text-[13px] font-semibold uppercase tracking-wider text-[#27315A] mb-1">
                Mailing Address
              </p>
              <p className="text-[15px] text-[#0A1F44] leading-snug">
                {site.contact.poBox}
                <br />
                {site.contact.cityState}
              </p>
            </div>

            <div className="rounded-2xl border border-[#E3E7F3] bg-[#F7F8FC] p-6">
              <Phone className="w-6 h-6 text-[#0038B8] mb-3" aria-hidden="true" />
              <p className="text-[13px] font-semibold uppercase tracking-wider text-[#27315A] mb-1">
                Phone
              </p>
              <a
                href={`tel:${site.contact.phoneTel}`}
                className="text-[15px] text-[#0A1F44] hover:text-[#0038B8]"
              >
                {site.contact.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-[#E3E7F3] bg-[#F7F8FC] p-6">
              <Mail className="w-6 h-6 text-[#0038B8] mb-3" aria-hidden="true" />
              <p className="text-[13px] font-semibold uppercase tracking-wider text-[#27315A] mb-1">
                Email
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-[15px] text-[#0A1F44] hover:text-[#0038B8] break-all"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactStrip
