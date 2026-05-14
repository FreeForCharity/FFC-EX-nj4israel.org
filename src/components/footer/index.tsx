'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Logo from '@/components/ui/Logo'
import { site } from '@/lib/site'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  const socialLinks = [
    { icon: FaFacebookF, href: site.social.facebook, label: 'Facebook' },
    { icon: FaXTwitter, href: site.social.twitter, label: 'X (Twitter)' },
    { icon: FaInstagram, href: site.social.instagram, label: 'Instagram' },
  ]

  const aboutLinks = [
    { name: 'Operating Principles', href: '/operating-principles' },
    { name: 'Our History', href: '/our-history' },
    { name: 'Our Leadership', href: '/leadership' },
    { name: 'Our Partners', href: '/our-partners' },
    { name: 'Media Coverage', href: '/media-coverage' },
    { name: 'Financial Reports', href: '/financial-reports' },
  ]

  const involveLinks = [
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 px-6"
        id="aria-font"
      >
        {/* Brand */}
        <div className="space-y-4 lg:col-span-1">
          <Logo variant="light" size="md" />
          <p className="text-[14px] text-white/80 leading-relaxed max-w-xs">
            A humanitarian relief organization, established in 2014 and recognized as a charitable
            non-profit 501(c)(3).
          </p>
          <p className="text-[13px] text-white/70">
            <span className="font-semibold text-white">EIN:</span> {site.ein}
          </p>
        </div>

        {/* About */}
        <div className="space-y-4">
          <h3 className="text-[18px] font-semibold uppercase tracking-wider text-white">About</h3>
          <ul className="space-y-2">
            {aboutLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[14px] text-white/85 hover:text-white hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get involved */}
        <div className="space-y-4">
          <h3 className="text-[18px] font-semibold uppercase tracking-wider text-white">
            Get Involved
          </h3>
          <ul className="space-y-2">
            {involveLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[14px] text-white/85 hover:text-white hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-[18px] font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="space-y-3 text-[14px] text-white/90">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-[#7AA9FF] flex-shrink-0" aria-hidden="true" />
              <span>
                {site.contact.poBox}
                <br />
                {site.contact.cityState}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5 text-[#7AA9FF] flex-shrink-0" aria-hidden="true" />
              <a
                href={`tel:${site.contact.phoneTel}`}
                className="hover:text-white transition-colors"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5 text-[#7AA9FF] flex-shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-white transition-colors break-all"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>

          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-white/10 hover:bg-[#0038B8] p-2.5 rounded-full transition-colors"
              >
                <Icon className="w-4 h-4 text-white" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div
          className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/70"
          id="aria-font"
        >
          <p>
            © {currentYear} {site.legalName}. All rights reserved.
          </p>
          <p>
            A 501(c)(3) charitable non-profit · Website hosted by{' '}
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7AA9FF] hover:text-white underline"
            >
              Free For Charity
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
